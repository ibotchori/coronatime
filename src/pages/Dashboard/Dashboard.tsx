import React from "react";
import { LanguageToggle, MainLogo } from "components";
import newCases from "assets/img/new-cases.png";
import recovered from "assets/img/recovered.png";
import death from "assets/img/death.png";

type Props = {};

const Dashboard = (props: Props) => {
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
          <div className="pl-6 pt-1  h-8 hidden sm:flex">
            <p className="border-r-2 pr-2  font-bold ">Irakli Botchorishvili</p>
            <button className="pl-2 pb-1">Log out</button>
          </div>
        </div>
      </div>
      {/* Toggle Buttons */}
      <div className=" px-4 sm:px-10 md:px-28">
        <p className="font-bold text-2xl pt-12 pb-10">Worldwide Statistics</p>
        <div className="border-b-2 pb-3 text-base flex ">
          <div className="w-[100px] sm:w-[130px]">
            <span className="hover:font-bold cursor-pointer hover:border-b-4 hover:border-black pb-3">
              Worldwide
            </span>
          </div>
          <div>
            <span className="hover:font-bold cursor-pointer hover:border-b-4 hover:border-black pb-3">
              By Country
            </span>
          </div>
        </div>
        {/* Worldwide */}
        <div className="flex md:flex-row flex-col justify-between items-center py-2 sm:py-10  w-full h-full ">
          <div className=" w-full md:w-[32%] h-[200px] sm:h-[300px] bg-blue-50 rounded-3xl flex flex-col justify-center items-center my-2">
            <img src={newCases} alt="" />
            <p className="text-xl pt-4 sm:pt-8 pb-2 sm:pb-4 font-semibold">
              New cases
            </p>
            <span className="font-extrabold text-[39px]">17,750</span>
          </div>
          <div className="w-full md:w-[32%] h-[200px] sm:h-[300px] bg-green-50 rounded-3xl flex flex-col justify-center items-center my-2">
            <img className="pt-6" src={recovered} alt="" />
            <p className="text-xl pt-4 sm:pt-8 pb-2 sm:pb-4 font-semibold">
              Recovered
            </p>
            <span className="font-extrabold text-[39px]">17,750</span>
          </div>
          <div className="w-full md:w-[32%] h-[200px] sm:h-[300px] bg-yellow-50 rounded-3xl flex flex-col justify-center items-center my-2">
            <img className="pt-3" src={death} alt="" />
            <p className="text-xl pt-4 sm:pt-8 pb-2 sm:pb-4 font-semibold">
              Death
            </p>
            <span className="font-extrabold text-[39px]">17,750</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
