import React from "react";
import { LanguageToggle, MainLogo } from "components";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="w-full min-h-screen py-4">
      <div className="flex justify-between border-b-2 border-gray-200 px-4 sm:px-10 md:px-20 py-3">
        <div className="pb-3 ">
          <MainLogo />
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
      <div></div>
    </div>
  );
};

export default Dashboard;
