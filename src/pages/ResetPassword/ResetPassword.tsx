import { Button, Input, MainLogo, Title } from "components";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const ResetPassword = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-full pt-10 sm:pl-0 pl-5 pb-4 sm:pb-32 flex flex-col items-start sm:items-center">
        <MainLogo />
      </div>
      <Title mainText={t("resetPassword")} />

      <div className="w-full px-6">
        <div className="max-w-[400px] pt-10 m-auto  ">
          <Input title={t("email")} placeholder={t("emailPlaceholder")} />
        </div>
      </div>
      <div className="w-full px-6 sm:relative absolute bottom-0  ">
        <div className="max-w-[400px]  py-8 mx-auto ">
          <Button title={t("resetPassword")} />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
