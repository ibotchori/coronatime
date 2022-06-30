import { Button, Input, MainLogo, Title } from "components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  NewPasswordInputTypes,
  NewPasswordSchema,
} from "Helpers/FormSchema/NewPasswordSchema";
import { useLocation, useNavigate } from "react-router-dom";
import APIservice from "services";

type Props = {};

const NewPassword = (props: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  /* Use Form */

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<NewPasswordInputTypes>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(NewPasswordSchema),
  });

  const onSubmit = async (data: NewPasswordInputTypes) => {
    // add hash property to data
    data["hash"] = location.search.slice(6);

    try {
      // HTTP request from service file
      await APIservice.passwordRecover(data);
      navigate("/password-confirmation");
      reset();
    } catch (error: any) {
      alert("Something went wrong, try again later");
      navigate("/email-confirmation");
      reset();
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-full pt-10 sm:pl-0 pl-5 pb-4 sm:pb-20 flex flex-col items-start sm:items-center">
        <MainLogo />
      </div>
      <Title mainText={t("resetPassword")} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  px-6 flex flex-col sm:justify-start sm:h-min justify-between h-full"
      >
        <div className="w-full">
          <div className="max-w-[400px] pt-10 mx-auto  ">
            <Input
              title={t("newPassword")}
              placeholder={t("newPasswordPlaceholder")}
              register={register}
              name="password"
              type="password"
              errorMessage={errors.password?.message}
              dirtyFields={dirtyFields.password}
            />
            <Input
              title={t("repeatPassword")}
              placeholder={t("repeatPassword")}
              register={register}
              name="repeatPassword"
              type="password"
              errorMessage={errors.repeatPassword?.message}
              dirtyFields={dirtyFields.repeatPassword}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-[400px]  py-8 mx-auto overflow-hidden ">
            <Button title={t("saveChanges")} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
