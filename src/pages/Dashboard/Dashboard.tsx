import React from "react";
import { LanguageToggle, MainLogo } from "components";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="w-full min-h-screen py-4">
      {/* Header */}
      <div className="flex justify-between border-b-2 border-gray-200 px-4 sm:px-10 md:px-20 py-3">
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
      <div className=" px-4 sm:px-10 md:px-20">
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
      </div>
    </div>
  );
};

export default Dashboard;
