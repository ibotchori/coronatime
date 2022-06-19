import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SignUpSchema,
  SignUpInputTypes,
} from "Helpers/FormSchema/SignUpSchema";

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

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SignUpInputTypes>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpInputTypes) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-full sm:w-[55%] flex overflow-hidden overflow-y-visible h-screen">
        <div className=" w-full pl-5 md:pl-16 lg:pl-36 pt-7 pr-5 ">
          {/* Logo & language */}
          <div className="flex justify-between md:pt-8 md:pb-5">
            <MainLogo />
            <div className="md:pr-16">
              <LanguageToggle />
            </div>
          </div>
          {/* Title */}
          <Title mainText={t("signUpTitle")} paragraph={t("signUpSubTitle")} />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" max-w-[400px] pb-5 pt-1"
          >
            {/* Input */}
            <Input
              title={t("username")}
              type="text"
              id="username"
              placeholder={t("usernamePlaceholder")}
              register={register}
              name="userName"
              errorMessage={errors.userName?.message}
              dirtyFields={dirtyFields.userName}
            />
            <Input
              title={t("signUpEmail")}
              type="email"
              id="email"
              placeholder={t("signUpEmailPlaceholder")}
              register={register}
              name="email"
              errorMessage={errors.email?.message}
              dirtyFields={dirtyFields.email}
            />
            <Input
              title={t("signUpPassword")}
              type="password"
              id="password"
              placeholder={t("signUpPasswordPlaceholder")}
              register={register}
              name="password"
              errorMessage={errors.password?.message}
              dirtyFields={dirtyFields.password}
            />
            <Input
              title={t("signUpRepeatPassword")}
              type="password"
              id="confirmPassword"
              placeholder={t("signUpRepeatPasswordPlaceholder")}
              register={register}
              name="confirmPassword"
              errorMessage={errors.confirmPassword?.message}
              dirtyFields={dirtyFields.confirmPassword}
            />
            {/* Checkbox */}
            <Checkbox label={t("signUpRemember")} anchor="" />
            {/* Button */}
            <Button title={t("signUp")} />
            {/* Have Account */}
            <HaveAccount
              title={t("signUpAccount")}
              anchor={t("signUpLogIn")}
              pathToNavigate="/"
            />
          </form>
        </div>
      </div>
      <CoverImage />
    </div>
  );
};

export default SignUp;
