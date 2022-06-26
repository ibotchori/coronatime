import { Button, Input, MainLogo, Title } from "components";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ResetPasswordInputTypes,
  ResetPasswordSchema,
} from "Helpers/FormSchema/ResetPasswordSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {};

const ResetPassword = (props: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* Use Form */
  const [emailErrorFromAPI, setEmailErrorFromAPI] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<ResetPasswordInputTypes>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(ResetPasswordSchema),
  });

  // hide errors from API when inputs changes
  useEffect(() => {
    setEmailErrorFromAPI(false);
  }, [watch("email")]);

  const onSubmit = async (data: ResetPasswordInputTypes) => {
    console.log("🚀 ~ onSubmit ~ data", data);
    // add backlink property to data
    data["backlink"] = "http://localhost:3000/account-confirmation";

    try {
      await axios({
        method: "POST",
        url: `https://coronatime-api.devtest.ge/api/password/send-recovery-link`,
        data: data,
      });

      reset();
      navigate("/email-confirmation");
    } catch (err: any) {
      // Handle Error Here
      if (err.message === "Network Error") {
        alert("Something went wrong, try again later");
        reset();
      } else {
        setEmailErrorFromAPI(true);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center h-screen"
    >
      <div className="w-full pt-10 sm:pl-0 pl-5 pb-4 sm:pb-20 flex flex-col items-start sm:items-center">
        <MainLogo />
      </div>
      <Title mainText={t("resetPassword")} />

      <div className="w-full px-6">
        <div className="max-w-[400px] pt-10 m-auto  ">
          <Input
            title={t("email")}
            placeholder={t("emailPlaceholder")}
            register={register}
            name="email"
            errorMessage={
              errors.email?.message
                ? errors.email?.message
                : emailErrorFromAPI
                ? t("noEmail")
                : ""
            }
            dirtyFields={dirtyFields.email}
          />
        </div>
      </div>
      <div className="w-full px-6 sm:relative absolute bottom-0 overflow-hidden ">
        <div className="max-w-[400px]  py-8 mx-auto ">
          <Button title={t("resetPassword")} />
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
