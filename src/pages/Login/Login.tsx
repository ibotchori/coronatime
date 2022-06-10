import React, { FC } from "react";
import { CoverImage, MainLogo } from "components/";

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
            <div className="mb-6">
              <label
                htmlFor="Username"
                className="block mb-2 text-md font-bold text-gray-900 dark:text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter unique username or email"
              />
            </div>
            {/* Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-md font-bold text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Fill in password"
              />
            </div>
            {/* Checkbox */}
            <div className="flex justify-between mb-6">
              <div className="flex ">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                >
                  Remember this device
                </label>
              </div>
              <a className="text-sm font-bold text-blue-600" href="">
                Forgot password?
              </a>
            </div>
            {/* Button */}
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 uppercase font-bold rounded-lg text-md w-full  px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  mr-10"
            >
              Log In
            </button>
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
