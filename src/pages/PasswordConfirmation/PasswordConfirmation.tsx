import React from "react";
import { Button, MainLogo } from "components";
import { useTranslation } from "react-i18next";
import img from "assets/img/checked.png";

type Props = {};

const PasswordConfirmation = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center h-screen overflow-hidden">
      <div className="w-full pt-10 sm:pl-0 pl-5  flex flex-col items-start sm:items-center">
        <MainLogo />
      </div>
      <div className="w-full my-auto flex flex-col sm:justify-start sm:h-min justify-between h-full">
        <div className="flex items-center flex-col pb-12 my-auto">
          <img className="w-10 pb-4" src={img} />
          <p className="max-w-[400px] px-2 text-center text-lg">
            {t("passwordUpdated")}
          </p>
        </div>
        <div className=" sm:px-0 px-6">
          <div className="max-w-[400px]  py-8 mx-auto ">
            <Button title={t("signIn")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordConfirmation;
