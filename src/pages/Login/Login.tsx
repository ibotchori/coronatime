import React, { FC, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import APIservice from "services";

type Props = {};

const Login: FC = (props: Props) => {
  // get token from local storage
  const token: any = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [usernameErrorFromAPI, setUsernameErrorFromAPI] = useState(false);
  const [passwordErrorFromAPI, setPasswordErrorFromAPI] = useState(false);

  // useForm
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<LoginInputTypes>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginSchema),
  });

  // hide errors from API when inputs changes
  useEffect(() => {
    setUsernameErrorFromAPI(false);
    setPasswordErrorFromAPI(false);
  }, [watch("username")]);

  const onSubmit = async (data: LoginInputTypes) => {
    const dataForSubmit = data;

    try {
      // HTTP request from service file
      const result = await APIservice.logIn(dataForSubmit);
      // save token and username to local storage
      localStorage.setItem("token", JSON.stringify(result.data.token));
      localStorage.setItem("username", JSON.stringify(data.username));

      setUsernameErrorFromAPI(false);
      setPasswordErrorFromAPI(false);
      reset();
      navigate("/dashboard");
      console.log(result.data);
    } catch (err: any) {
      // Handle Error Here
      console.log(err);
      setUsernameErrorFromAPI(false);
      setPasswordErrorFromAPI(false);
      if (err.message === "Network Error") {
        alert("Something went wrong, try again later");
        reset();
      } else if (err.response.statusText === "Unauthorized") {
        setPasswordErrorFromAPI(true);
      } else {
        setUsernameErrorFromAPI(true);
      }
    }
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-full sm:w-[55%] flex h-screen overflow-hidden ">
        <div className="w-full pl-5 md:pl-16 lg:pl-36 pt-7 pr-5">
          {/* Logo & language */}
          <div className="flex justify-between md:pt-8 md:pb-5">
            <MainLogo />
            <div className="md:pr-16">
              <LanguageToggle />
            </div>
          </div>
          {/* Title */}
          <Title mainText={t("logInTitle")} paragraph={t("logInSubTitle")} />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" max-w-[400px] pt-1 pb-5"
          >
            {/* Input */}
            <Input
              title={t("username")}
              type="text"
              id="username"
              placeholder={t("logInUsernamePlaceholder")}
              register={register}
              name="username"
              errorMessage={
                errors.username?.message
                  ? errors.username?.message
                  : usernameErrorFromAPI
                  ? t("noUser")
                  : passwordErrorFromAPI
                  ? t("credentials")
                  : ""
              }
              dirtyFields={dirtyFields.username}
            />
            <Input
              title={t("password")}
              type="password"
              id="password"
              placeholder={t("passwordPlaceholder")}
              register={register}
              name="password"
              errorMessage={errors.password?.message}
              dirtyFields={dirtyFields.password}
            />
            {/* Checkbox */}
            <Checkbox label={t("remember")} anchor={t("forgot")} />
            {/* Button */}
            <Button title={t("logIn")} />
            {/* Have Account */}
            <HaveAccount
              title={t("haveAccount")}
              anchor={t("signUpFree")}
              pathToNavigate="/sign-up"
            />
          </form>
        </div>
      </div>
      <CoverImage />
    </div>
  );
};

export default Login;
