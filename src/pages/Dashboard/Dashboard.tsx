import React, { useEffect, useState } from "react";
import { LanguageToggle, MainLogo } from "components";
import newCases from "assets/img/new-cases.png";
import recovered from "assets/img/recovered.png";
import death from "assets/img/death.png";
import { useTranslation } from "react-i18next";
import Search from "./components/Search";
import { useNavigate } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // get username from local storage
  const username: any = localStorage.getItem("username");

  const [showContent, setShowContent] = useState(false);

  // get token from local storage
  const token: any = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

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
          <div>
            <LanguageToggle />
          </div>
          <button className="sm:hidden flex pl-4 pt-1">&#9776;</button>
          <div
            onClick={logOutHandler}
            className="pl-6 pt-1  h-8 hidden sm:flex"
          >
            <p className="border-r-2 pr-2  font-bold ">
              {JSON.parse(username)}
            </p>
            <button className="pl-2 pb-1 w-20">{t("logOut")}</button>
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
        <>
          {/* Worldwide Content */}
          <div className="flex md:flex-row flex-col justify-between items-center py-2 sm:py-10  w-full h-full px-4 sm:px-10 md:px-28 ">
            <div className=" w-full md:w-[32%] h-[200px] sm:h-[300px] bg-blue-50 rounded-3xl flex flex-col justify-center items-center my-2">
              <img src={newCases} alt="" />
              <p className="text-xl pt-4 text-center sm:pt-8 pb-2 sm:pb-4 font-semibold">
                {t("newCases")}
              </p>
              <span className="font-extrabold text-[39px]">17,750</span>
            </div>
            <div className="w-full md:w-[32%] h-[200px] sm:h-[300px] bg-green-50 rounded-3xl flex flex-col justify-center items-center my-2">
              <img className="pt-6" src={recovered} alt="" />
              <p className="text-xl pt-4 text-center sm:pt-8 pb-2 sm:pb-4 font-semibold">
                {t("recovered")}
              </p>
              <span className="font-extrabold text-[39px]">17,750</span>
            </div>
            <div className="w-full md:w-[32%] h-[200px] sm:h-[300px] bg-yellow-50 rounded-3xl flex flex-col justify-center items-center my-2">
              <img className="pt-3" src={death} alt="" />
              <p className="text-xl pt-4 text-center sm:pt-8 pb-2 sm:pb-4 font-semibold">
                {t("death")}
              </p>
              <span className="font-extrabold text-[39px]">17,750</span>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* By country Content */}
          <Search />
          <div className="sm:border-2 border-slate-100  sm:rounded-xl sm:my-6 px-0 sm:mx-10 md:mx-28  ">
            {/* Table header */}
            <div className="sm:w-full h-16 py-5 px-2 sm:px-10 bg-slate-100 sm:rounded-tl-lg overflow-hidden  sm:rounded-tr-lg  ">
              <div className="flex justify-between md:w-[95%] lg:w-[70%] font-semibold text-sm">
                <div className="flex cursor-pointer w-[85px] md:w-[90px]">
                  <p className="truncate md:text-clip">{t("location")}</p>
                  <div className="flex flex-col justify-between pl-1 sm:pl-2 mt-1 h-[14px]">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0.5L10 5.5L0 5.5L5 0.5Z" fill="#BFC0C4" />
                    </svg>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 5.5L0 0.5H10L5 5.5Z" fill="#010414" />
                    </svg>
                  </div>
                </div>
                <div className="flex cursor-pointer w-[85px] md:w-[150px]">
                  <p className="truncate md:text-clip">{t("newCases")}</p>
                  <div className="flex flex-col justify-between pl-1 sm:pl-2 mt-1 h-[14px]">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0.5L10 5.5L0 5.5L5 0.5Z" fill="#BFC0C4" />
                    </svg>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 5.5L0 0.5H10L5 5.5Z" fill="#010414" />
                    </svg>
                  </div>
                </div>
                <div className="flex cursor-pointer w-[85px] md:w-[105px]">
                  <p className="truncate md:text-clip">{t("death")}</p>
                  <div className="flex flex-col justify-between pl-1 sm:pl-2 mt-1 h-[14px]">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0.5L10 5.5L0 5.5L5 0.5Z" fill="#BFC0C4" />
                    </svg>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 5.5L0 0.5H10L5 5.5Z" fill="#010414" />
                    </svg>
                  </div>
                </div>
                <div className="flex cursor-pointer w-[85px] md:w-[150px]">
                  <p className="truncate md:text-clip">{t("recovered")}</p>
                  <div className="flex flex-col justify-between pl-1 sm:pl-2 mt-1 h-[14px]">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0.5L10 5.5L0 5.5L5 0.5Z" fill="#BFC0C4" />
                    </svg>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 5.5L0 0.5H10L5 5.5Z" fill="#010414" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="overflow-scroll max-h-[600px] ">
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
              <div className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 ">
                <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                  <div className="flex w-[85px] md:w-[90px] ">
                    <p>USA</p>
                  </div>
                  <div className="flex w-[85px] md:w-[150px] ">
                    <p>9,704</p>
                  </div>
                  <div className="flex   w-[85px] md:w-[105px]">
                    <p>66,591</p>
                  </div>
                  <div className="flex  w-[85px] md:w-[150px]">
                    <p>5</p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 ">
                <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                  <div className="flex w-[85px] md:w-[90px] ">
                    <p>Costarica</p>
                  </div>
                  <div className="flex w-[85px] md:w-[150px] ">
                    <p>9</p>
                  </div>
                  <div className="flex   w-[85px] md:w-[105px]">
                    <p>66,591</p>
                  </div>
                  <div className="flex  w-[85px] md:w-[150px]">
                    <p>5,803</p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 ">
                <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                  <div className="flex w-[85px] md:w-[90px] ">
                    <p>Germany</p>
                  </div>
                  <div className="flex w-[85px] md:w-[150px] ">
                    <p>704,000</p>
                  </div>
                  <div className="flex   w-[85px] md:w-[105px]">
                    <p>591</p>
                  </div>
                  <div className="flex  w-[85px] md:w-[150px]">
                    <p>803,905</p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 ">
                <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                  <div className="flex w-[85px] md:w-[90px] ">
                    <p>Georgia</p>
                  </div>
                  <div className="flex w-[85px] md:w-[150px] ">
                    <p>4,000</p>
                  </div>
                  <div className="flex   w-[85px] md:w-[105px]">
                    <p>91</p>
                  </div>
                  <div className="flex  w-[85px] md:w-[150px]">
                    <p>-</p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 ">
                <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                  <div className="flex w-[85px] md:w-[90px] ">
                    <p>Japan</p>
                  </div>
                  <div className="flex w-[85px] md:w-[150px] ">
                    <p>4,000</p>
                  </div>
                  <div className="flex   w-[85px] md:w-[105px]">
                    <p>66</p>
                  </div>
                  <div className="flex  w-[85px] md:w-[150px]">
                    <p>5</p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 ">
                <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                  <div className="flex w-[85px] md:w-[90px] ">
                    <p>Korea</p>
                  </div>
                  <div className="flex w-[85px] md:w-[150px] ">
                    <p>10,704,000</p>
                  </div>
                  <div className="flex   w-[85px] md:w-[105px]">
                    <p>66,591,000</p>
                  </div>
                  <div className="flex  w-[85px] md:w-[150px]">
                    <p>9,704,000</p>
                  </div>
                </div>
              </div>
              <div className="sm:w-full h-14 py-4 px-2 sm:px-10 border-b-2 border-slate-50 ">
                <div className="flex justify-between md:w-[95%] lg:w-[70%] font-base text-xs sm:text-sm">
                  <div className="flex w-[85px] md:w-[90px] ">
                    <p>Armenia</p>
                  </div>
                  <div className="flex w-[85px] md:w-[150px] ">
                    <p>10,704</p>
                  </div>
                  <div className="flex   w-[85px] md:w-[105px]">
                    <p>591,000</p>
                  </div>
                  <div className="flex  w-[85px] md:w-[150px]">
                    <p>9,704,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
