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
              name="userName"
              errorMessage={errors.userName?.message}
              dirtyFields={dirtyFields.userName}
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
