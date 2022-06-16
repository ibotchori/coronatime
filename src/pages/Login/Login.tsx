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

const Login: FC = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex">
      <div className="w-full sm:w-[55%] flex  h-screen overflow-hidden overflow-y-scroll">
        <div className=" w-full pl-5 md:pl-16 lg:pl-28 pt-7 pr-5 first-line:">
          {/* Logo & language */}
          <div className="flex justify-between">
            <MainLogo />
            <div>
              <LanguageToggle />
            </div>
          </div>
          {/* Title */}
          <Title mainText={t("logInTitle")} paragraph={t("logInSubTitle")} />
          <form className=" max-w-[400px] pb-5">
            {/* Input */}
            <Input
              title={t("logInUsername")}
              type="text"
              id="username"
              placeholder={t("logInUsernamePlaceholder")}
            />
            <Input
              title={t("logInPassword")}
              type="text"
              id="password"
              placeholder={t("logInPasswordPlaceholder")}
            />
            {/* Checkbox */}
            <Checkbox label={t("logInRemember")} anchor={t("logInForgot")} />
            {/* Button */}
            <Button title={t("logIn")} />
            {/* Have Account */}
            <HaveAccount title={t("logInAccount")} anchor={t("logInSignUp")} />
          </form>
        </div>
      </div>
      <CoverImage />
    </div>
  );
};

export default Login;
