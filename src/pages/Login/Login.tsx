import React, { FC } from "react";
import CoverImage from "../../components/CoverImage/CoverImage";

type Props = {};

const Login: FC = (props: Props) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full md:w-3/5  h-screen text-center justify-center ">
        Content
      </div>
      <CoverImage />
    </div>
  );
};

export default Login;
