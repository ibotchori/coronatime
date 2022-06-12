import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const LanguageToggle = (props: Props) => {
  const { i18n } = useTranslation();

  const lang: any = {
    en: { nativeName: "EN" },
    ge: { nativeName: "GE" },
  };
  return (
    <>
      {Object.keys(lang).map((lng) => (
        <button
          className={`bg-blue-400 ${
            i18n.resolvedLanguage === lng ? "bg-blue-800" : ""
          }  text-white font-bold py-1 px-2 `}
          type="submit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lang[lng].nativeName}
        </button>
      ))}
    </>
  );
};

export default LanguageToggle;
