import React, { FC } from "react";
import { Button, CoverImage, Input, MainLogo } from "components/";
import Checkbox from "components/Checkbox/Checkbox";

type Props = {};

const Login: FC = (props: Props) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full md:w-3/5  h-screen  ">
        <div className="pl-5 md:pl-24 pt-7 pr-5">
          <MainLogo />
          <form className="pt-6 md:pt-10 max-w-[400px]">
            {/* Title */}
            <h1 className="font-extrabold  text-2xl pb-1 md:pb-2">
              Welcome back
            </h1>
            <p className="font-light text-xl pb-4">
              Welcome back! Please enter your details
            </p>
            {/* Input */}
            <Input
              title="Username"
              type="text"
              id="username"
              placeholder="Enter unique username or email"
            />
            <Input
              title="Password"
              type="text"
              id="password"
              placeholder="Fill in password"
            />
            {/* Checkbox */}
            <Checkbox label="Remember this device" anchor="Forgot password?" />
            {/* Button */}
            <Button title="Log In" />
            {/* Sign UP */}
            <div className="flex justify-center mb-6 mt-4">
              <div className="flex ">
                <p className="ml-2 text-md font-normal  text-gray-900 dark:text-gray-300 pr-2">
                  Don’t have and account?
                </p>
              </div>
              <a className="text-md font-bold text-grey-600" href="">
                Sign up for free
              </a>
            </div>
          </form>
        </div>
      </div>
      <CoverImage />
    </div>
  );
};

export default Login;
