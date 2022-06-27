import React from "react";
import { Death, Recovered, NewCases } from "assets/img";
import { useTranslation } from "react-i18next";

type Props = {
  data?: any;
};

const Worldwide = ({ data }: Props) => {
  const { t } = useTranslation();

  let newCases: number = 0;
  let recovered: number = 0;
  let deaths: number = 0;

  data.forEach((a: any) => {
    newCases += a.statistics.confirmed;
    recovered += a.statistics.recovered;
    deaths += a.statistics.deaths;
  });

  return (
    <div className="flex md:flex-row flex-col justify-between items-center py-2 sm:py-10  w-full h-full px-4 sm:px-10 md:px-28 ">
      <div className=" w-full md:w-[32%] h-[200px] sm:h-[300px] bg-blue-50 rounded-3xl flex flex-col justify-center items-center my-2">
        <img src={NewCases} alt="" />
        <p className="text-xl pt-4 text-center sm:pt-8 pb-2 sm:pb-4 font-semibold">
          {t("newCases")}
        </p>
        <span className="font-extrabold text-[39px]">{newCases}</span>
      </div>
      <div className="w-full md:w-[32%] h-[200px] sm:h-[300px] bg-green-50 rounded-3xl flex flex-col justify-center items-center my-2">
        <img className="pt-6" src={Recovered} alt="" />
        <p className="text-xl pt-4 text-center sm:pt-8 pb-2 sm:pb-4 font-semibold">
          {t("recovered")}
        </p>
        <span className="font-extrabold text-[39px]">{recovered}</span>
      </div>
      <div className="w-full md:w-[32%] h-[200px] sm:h-[300px] bg-yellow-50 rounded-3xl flex flex-col justify-center items-center my-2">
        <img className="pt-3" src={Death} alt="" />
        <p className="text-xl pt-4 text-center sm:pt-8 pb-2 sm:pb-4 font-semibold">
          {t("death")}
        </p>
        <span className="font-extrabold text-[39px]">{deaths}</span>
      </div>
    </div>
  );
};

export default Worldwide;
