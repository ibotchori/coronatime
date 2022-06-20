import React, { FC, useEffect, useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {};

const SignUp = (props: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [usernameErrorFromAPI, setUsernameError] = useState(false);
  const [emailErrorFromAPI, setEmailError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<SignUpInputTypes>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });

  // hide errors from API when inputs changes
  useEffect(() => {
    setUsernameError(false);
  }, [watch("username")]);
  useEffect(() => {
    setEmailError(false);
  }, [watch("email")]);

  const onSubmit = async (data: SignUpInputTypes) => {
    // add redirect property to data
    data["redirectOnConfirm"] = "http://localhost:3000/email-confirmation";

    try {
      await axios({
        method: "POST",
        url: `https://coronatime-api.devtest.ge/api/register`,
        data: data,
      });

      setUsernameError(false);
      setEmailError(false);
      reset();
      navigate("/email-confirmation");
      console.log(data);
    } catch (err: any) {
      // Handle Error Here
      console.log(err);
      setUsernameError(false);
      setEmailError(false);
      if (err.response.data[0].context.label === "username") {
        setUsernameError(true);
      } else {
        setEmailError(true);
      }
    }
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
              name="username"
              errorMessage={
                errors.username?.message
                  ? errors.username?.message
                  : usernameErrorFromAPI
                  ? t("usernameIsTaken")
                  : ""
              }
              dirtyFields={dirtyFields.username}
            />
            <Input
              title={t("signUpEmail")}
              type="email"
              id="email"
              placeholder={t("signUpEmailPlaceholder")}
              register={register}
              name="email"
              errorMessage={
                errors.email?.message
                  ? errors.email?.message
                  : emailErrorFromAPI
                  ? t("emailIsTaken")
                  : ""
              }
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
              id="repeatPassword"
              placeholder={t("signUpRepeatPasswordPlaceholder")}
              register={register}
              name="repeatPassword"
              errorMessage={errors.repeatPassword?.message}
              dirtyFields={dirtyFields.repeatPassword}
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
