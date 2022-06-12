import React, { FC } from "react";
import {
  Button,
  CoverImage,
  Input,
  MainLogo,
  Title,
  Checkbox,
  HaveAccount,
} from "components/";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full md:w-[55%] flex justify-center md:justify-start  h-screen  ">
        <div className=" md:w-fit lg:w-full pl-5 md:pl-16 lg:pl-28 pt-7 pr-5 ">
          {/* Logo */}
          <MainLogo />
          {/* Title */}
          <Title
            mainText="Welcome to Coronatime"
            paragraph="Please enter required info to sign up"
          />
          <form className=" max-w-[400px] pb-5">
            {/* Input */}
            <Input
              title="Username"
              type="text"
              id="username"
              placeholder="Enter unique username or email"
            />
            <Input
              title="Email"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            <Input
              title="Password"
              type="text"
              id="password"
              placeholder="Fill in password"
            />
            <Input
              title="Repeat password"
              type="text"
              id="password"
              placeholder="Repeat password"
            />
            {/* Checkbox */}
            <Checkbox label="Remember this device" anchor="" />
            {/* Button */}
            <Button title="Log In" />
            {/* Have Account */}
            <HaveAccount title="Already have an account?" anchor="Log in" />
          </form>
        </div>
      </div>
      <CoverImage />
    </div>
  );
};

export default SignUp;
