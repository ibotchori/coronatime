import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  mainText?: string;
  paragraph?: string;
};

function Title({ mainText, paragraph }: Props) {
  const { i18n } = useTranslation();
  return (
    <div className="pt-10">
      <h1
        className={`font-extrabold  pb-2 ${
          i18n.language === "ge" ? "md:text-2xl text-xl" : "text-2xl "
        } `}
      >
        {mainText}
      </h1>
      {paragraph && (
        <p
          className={`font-light  pb-4 ${
            i18n.language === "ge"
              ? "md:text-xl text-md"
              : "text-lg sm:text-xl "
          } `}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
}

export default Title;
