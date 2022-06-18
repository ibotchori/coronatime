import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  title?: string;
  anchor?: string;
};

const HaveAccount = (props: Props) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`flex justify-center mb-6 mt-4 pr-4 text-md ${
        i18n.language === "ge"
          ? "sm:flex-row flex-col sm:items-start items-center "
          : ""
      }`}
    >
      <div className="flex ">
        <p className="ml-2 font-normal  text-gray-900 dark:text-gray-300 pr-2">
          {props.title}
        </p>
      </div>
      <a className="font-bold text-grey-600" href="">
        {props.anchor}
      </a>
    </div>
  );
};

export default HaveAccount;
