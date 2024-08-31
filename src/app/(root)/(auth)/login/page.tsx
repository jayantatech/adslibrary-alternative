import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import { Logo } from "../../../../../public/images";
import RegisterCardComponent from "@/components/(auth)/RegisterCardComponent";
import LoginCardComponent from "@/components/(auth)/LoginCardComponent";

const Login = () => {
  return (
    <div className="bg-lightBlue">
      <ContentWrapper>
        <div className="min-w-full min-h-screen py-10">
          <div className="w-full h-auto py-2 flex items-center justify-center">
            <Image src={Logo} className="h-auto w-[278px] " alt="logo" />
          </div>
          <div className="w-auto md:max-w-[496px] max-md:max-w-full max-md:px-2 mx-auto pt-14 h-auto ">
            <LoginCardComponent />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Login;
