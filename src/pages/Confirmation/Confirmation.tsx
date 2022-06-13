import React from "react";
import { MainLogo } from "components";
import { useTranslation } from "react-i18next";
import img from "assets/img/checked.png";

type Props = {};

const Confirmation = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-full pt-10 sm:pl-0 pl-5  flex flex-col items-start sm:items-center">
        <MainLogo />
      </div>
      <div className="flex items-center flex-col pb-20 my-auto">
        <img className="w-10" src={img} />
        <p className="max-w-[400px] text-center">{t("confirmationText")}</p>
      </div>
    </div>
  );
};

export default Confirmation;
