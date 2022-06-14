import { Button, Input, MainLogo, Title } from "components";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const NewPassword = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-full pt-10 sm:pl-0 pl-5 pb-4 sm:pb-32 flex flex-col items-start sm:items-center">
        <MainLogo />
      </div>
      <Title mainText={t("resetPassword")} />
      <div className="w-full  px-6 flex flex-col sm:justify-start sm:h-min justify-between h-full">
        <div className="w-full">
          <div className="max-w-[400px] pt-10 mx-auto  ">
            <Input
              title={t("newPassword")}
              placeholder={t("newPasswordPlaceholder")}
            />
            <Input
              title={t("repeatPassword")}
              placeholder={t("repeatPassword")}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-[400px]  py-8 mx-auto overflow-hidden ">
            <Button title={t("saveChanges")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
