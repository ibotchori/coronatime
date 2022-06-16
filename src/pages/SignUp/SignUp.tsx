import React, { FC } from "react";
import {
  Button,
  CoverImage,
  Input,
  MainLogo,
  Title,
  Checkbox,
  HaveAccount,
  LanguageToggle,
} from "components/";
import { useTranslation } from "react-i18next";

type Props = {};

const SignUp = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex">
      <div className="w-full sm:w-[55%] flex overflow-hidden overflow-y-scroll h-screen">
        <div className=" w-full pl-5 md:pl-16 lg:pl-28 pt-7 pr-5 ">
          {/* Logo & language */}
          <div className="flex justify-between">
            <MainLogo />
            <div>
              <LanguageToggle />
            </div>
          </div>
          {/* Title */}
          <Title mainText={t("signUpTitle")} paragraph={t("signUpSubTitle")} />
          <form className=" max-w-[400px] pb-5">
            {/* Input */}
            <Input
              title={t("username")}
              type="text"
              id="username"
              placeholder={t("usernamePlaceholder")}
            />
            <Input
              title={t("signUpEmail")}
              type="email"
              id="email"
              placeholder={t("signUpEmailPlaceholder")}
            />
            <Input
              title={t("signUpPassword")}
              type="text"
              id="password"
              placeholder={t("signUpPasswordPlaceholder")}
            />
            <Input
              title={t("signUpRepeatPassword")}
              type="text"
              id="password"
              placeholder={t("signUpRepeatPasswordPlaceholder")}
            />
            {/* Checkbox */}
            <Checkbox label={t("signUpRemember")} anchor="" />
            {/* Button */}
            <Button title={t("signUp")} />
            {/* Have Account */}
            <HaveAccount title={t("signUpAccount")} anchor={t("signUpLogIn")} />
          </form>
        </div>
      </div>
      <CoverImage />
    </div>
  );
};

export default SignUp;
