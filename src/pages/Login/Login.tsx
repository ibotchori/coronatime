import React, { FC } from "react";

type Props = {};

const Login: FC = (props: Props) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full md:w-3/5  h-screen text-center justify-center ">
        Content
      </div>
      <div className="w-2/5 hidden md:block h-screen">
        <div className=" w-full h-full bg-no-repeat bg-cover bg-center bg-[url('./assets/img/cover_image.png')]"></div>
      </div>
    </div>
  );
};

export default Login;
