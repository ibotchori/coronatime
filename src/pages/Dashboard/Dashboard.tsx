import React, { useEffect, useState } from "react";
import { LanguageToggle, MainLogo } from "components";
import { useTranslation } from "react-i18next";
import {
  Search,
  Worldwide,
  CaretUp,
  CaretDown,
  CaretUpFill,
  CaretDownFill,
} from "./components/";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UseSearch from "./hooks/UseSearch";
import UseLogOut from "./hooks/UseLogOut";

type Props = {};

export interface FetchedDataTypes {
  code: string;
  name: {
    en: string;
    ka: string;
  };
  statistics: {
    confirmed: number;
    critical: number;
    deaths: number;
    recovered: number;
  };
  _id: string;
}

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // get username and token from local storage
  const username: any = localStorage.getItem("username");
  const token: any = localStorage.getItem("token");

  const [fetchedData, setFetchedData] = useState<FetchedDataTypes[]>([]);
  const [showContent, setShowContent] = useState<boolean>(true);

  /* Custom Hooks */
  // Log out
  const { showModal, showModalHandler, logOutHandler } = UseLogOut();
  // Search functionality
  const { searchTerm, handleChange } = UseSearch();

  /* Button sort functionality */
  const [order, setOrder] = useState("DSC");
  const [sortBy, setSortBy] = useState("");

  const sorting = (columnKey: string) => {
    if (columnKey === "location") {
      if (order === "ASC") {
        const sorted = [...fetchedData].sort((a: any, b: any) =>
          a.name.en > b.name.en ? 1 : -1
        );
        setFetchedData(sorted);
        setOrder("DSC");
      }
      if (order === "DSC") {
        const sorted = [...fetchedData].sort((a: any, b: any) =>
          a.name.en < b.name.en ? 1 : -1
        );
        setFetchedData(sorted);
        setOrder("ASC");
      }
    } else {
      if (order === "ASC") {
        const sorted = [...fetchedData].sort((a: any, b: any) =>
          a.statistics[columnKey] > b.statistics[columnKey] ? 1 : -1
        );
        setFetchedData(sorted);
        setOrder("DSC");
      }
      if (order === "DSC") {
        const sorted = [...fetchedData].sort((a: any, b: any) =>
          a.statistics[columnKey] < b.statistics[columnKey] ? 1 : -1
        );
        setFetchedData(sorted);
        setOrder("ASC");
      }
    }

    setSortBy(columnKey);
  };
  /* Button sort functionality finish */

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    // API call
    const API_URL = "https://coronatime-api.devtest.ge/api/countries";
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    };
    const getData = async () => {
      const { data } = await axios.get(API_URL, config);
      setFetchedData(data);
    };
    getData();
  }, []);

  return (
    <div className="w-full min-h-screen py-4">
      {/* Header */}
      <div className="flex justify-between border-b-2 border-gray-200 px-4 sm:px-10 md:px-28 py-3">
        <div className="pb-3 ">
          <div className="sm:hidden">
            <MainLogo width="150" />
          </div>
          <div className="sm:block hidden">
            <MainLogo />
          </div>
        </div>

        <div className="flex justify-between pt-1">
          {/* Logout Button modal, on mobile */}
          {showModal && (
            <button
              onClick={logOutHandler}
              className="absolute shadow-md bg-white text-sm block sm:hidden  rounded-sm py-2 px-2  mt-10 ml-3 "
            >
              {t("logOut")}
            </button>
          )}
          <div>
            <LanguageToggle />
          </div>
          {/* Burger menu button */}
          <div onClick={showModalHandler} className="flex flex-col ">
            <button className="sm:hidden flex pl-4 pt-1">&#9776;</button>
          </div>

          <div className="pl-6 pt-1  h-8 hidden sm:flex">
            {/* Username */}
            <p className="border-r-2 pr-2  font-bold ">
              {JSON.parse(username)}
            </p>
            {/* Logout Button */}
            <button onClick={logOutHandler} className=" pl-2 pb-1 w-20">
              {t("logOut")}
            </button>
          </div>
        </div>
      </div>
      {/* Toggle Buttons */}
      <div className=" px-4 sm:px-10 md:px-28">
        <p className="font-bold text-2xl pt-12 pb-10">
          {t("worldwideStatistics")}
        </p>
        <div className="border-b-2 border-slate-50 pb-3 text-base flex ">
          <div
            onClick={() => setShowContent(true)}
            className="w-[100px] sm:w-[130px]"
          >
            <span
              className={` cursor-pointer  pb-3 ${
                showContent ? "font-bold border-b-4 border-black" : ""
              }`}
            >
              {t("worldwide")}
            </span>
          </div>
          <div onClick={() => setShowContent(false)}>
            <span
              className={` cursor-pointer  pb-3 ${
                !showContent ? "font-bold border-b-4 border-black" : ""
              }`}
            >
              {t("byCountry")}
            </span>
          </div>
        </div>
      </div>

      {showContent ? (
        <Worldwide data={fetchedData} />
      ) : (
        <>
          {/* By country Content */}
          <Search handleChange={handleChange} />
          <div className="sm:border-2 border-slate-100  sm:rounded-xl sm:my-6 px-0 sm:mx-10 md:mx-28  ">
            {/* Table header */}
            <div className="sm:w-full h-16 py-5 px-2 sm:px-10 bg-slate-100 sm:rounded-tl-lg overflow-hidden  sm:rounded-tr-lg  ">
              <div className="flex justify-between md:w-[95%] lg:w-[70%] font-semibold text-sm">
                {/* Location Button */}
                <div
                  onClick={() => sorting("location")}
                  className="flex cursor-pointer w-[85px] md:w-[90px]"
                >
                  <p className="truncate md:text-clip">{t("location")}</p>
                  <div className="flex flex-col justify-between pl-1 sm:pl-2 mt-1 h-[14px]">
                    {sortBy === "location" ? (
                      <>
                        {order === "ASC" ? <CaretUp /> : <CaretUpFill />}
                        {order === "DSC" ? <CaretDown /> : <CaretDownFill />}
                      </>
                    ) : (
                      <>
                        <CaretUp />
                        <CaretDown />
                      </>
                    )}
                  </div>
                </div>
                {/* New Cases Button */}
                <div
                  onClick={() => sorting("confirmed")}
                  className="flex cursor-pointer w-[85px] md:w-[150px]"
                >
                  <p className="truncate md:text-clip">{t("newCases")}</p>
                  <div className="flex flex-col justify-between pl-1 sm:pl-2 mt-1 h-[14px]">
                    {sortBy === "confirmed" ? (
                      <>
                        {order === "ASC" ? <CaretUp /> : <CaretUpFill />}
                        {order === "DSC" ? <CaretDown /> : <CaretDownFill />}
                      </>
                    ) : (
                      <>
                        <CaretUp />
                        <CaretDown />
                      </>
                    )}
                  </div>
                </div>
                {/* Death Button */}
                <div
                  onClick={() => sorting("deaths")}
                  className="flex cursor-pointer w-[85px] md:w-[105px]"
                >
                  <p className="truncate md:text-clip">{t("death")}</p>
                  <div className="flex flex-col justify-between pl-1 sm:pl-2 mt-1 h-[14px]">
                    {sortBy === "deaths" ? (
                      <>
                        {order === "ASC" ? <CaretUp /> : <CaretUpFill />}
                        {order === "DSC" ? <CaretDown /> : <CaretDownFill />}
                      </>
                    ) : (
                      <>
                        <CaretUp />
                        <CaretDown />
                      </>
                    )}
                  </div>
                </div>
                {/* Recovered Button */}
                <div
                  onClick={() => sorting("recovered")}
                  className="flex cursor-pointer w-[85px] md:w-[150px]"
                >
                  <p className="truncate md:text-clip">{t("recovered")}</p>
                  <div className="flex flex-col justify-between pl-1 sm:pl-2 mt-1 h-[14px]">
                    {sortBy === "recovered" ? (
                      <>
                        {order === "ASC" ? <CaretUp /> : <CaretUpFill />}
                        {order === "DSC" ? <CaretDown /> : <CaretDownFill />}
                      </>
                    ) : (
                      <>
                        <CaretUp />
                        <CaretDown />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="overflow-y-scroll min-h-[200px] max-h-[600px] ">
              <div className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 ">
                <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                  <div className="flex w-[85px] md:w-[90px] ">
                    <p>Worldwide</p>
                  </div>
                  <div className="flex w-[85px] md:w-[150px] ">
                    <p>9,704,000</p>
                  </div>
                  <div className="flex   w-[85px] md:w-[105px]">
                    <p>66,591</p>
                  </div>
                  <div className="flex  w-[85px] md:w-[150px]">
                    <p>5,803,905</p>
                  </div>
                </div>
              </div>
              {fetchedData
                .filter((item) => {
                  if (searchTerm === "") {
                    return item;
                  } else if (item.name.en.toLowerCase().includes(searchTerm)) {
                    return item;
                  } else if (item.name.ka.toLowerCase().includes(searchTerm)) {
                    return item;
                  }
                })
                .map((item) => (
                  <div
                    key={item._id}
                    className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 "
                  >
                    <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                      <div className="flex w-[85px] md:w-[90px] ">
                        <p>
                          {i18n.language === "en" ? item.name.en : item.name.ka}
                        </p>
                      </div>
                      <div className="flex w-[85px] md:w-[150px] ">
                        <p>{item.statistics.confirmed}</p>
                      </div>
                      <div className="flex   w-[85px] md:w-[105px]">
                        <p>{item.statistics.deaths}</p>
                      </div>
                      <div className="flex  w-[85px] md:w-[150px]">
                        <p>{item.statistics.recovered}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
