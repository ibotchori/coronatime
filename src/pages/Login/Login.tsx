import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInputTypes, LoginSchema } from "Helpers/FormSchema/LoginSchema";
import { useTranslation } from "react-i18next";
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

type Props = {};

const Login: FC = (props: Props) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<LoginInputTypes>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: LoginInputTypes) => {
    console.log(data);
  };

  console.log("🚀 ~ dirtyFields", dirtyFields.userName);

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" max-w-[400px] pb-5"
          >
            {/* Input */}
            <Input
              title={t("logInUsername")}
              type="text"
              id="username"
              placeholder={t("logInUsernamePlaceholder")}
              register={register}
              name="userName"
              errorMessage={errors.userName?.message}
              dirtyFields={dirtyFields.userName}
            />
            <Input
              title={t("logInPassword")}
              type="password"
              id="password"
              placeholder={t("logInPasswordPlaceholder")}
              register={register}
              name="password"
              errorMessage={errors.password?.message}
              dirtyFields={dirtyFields.password}
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
