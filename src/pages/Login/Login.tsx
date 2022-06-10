import React, { FC } from "react";
import { CoverImage, MainLogo } from "components/";

type Props = {};

const Login: FC = (props: Props) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full md:w-3/5  h-screen text-center justify-center ">
        <MainLogo />
      </div>
      <CoverImage />
    </div>
  );
};

export default Login;
