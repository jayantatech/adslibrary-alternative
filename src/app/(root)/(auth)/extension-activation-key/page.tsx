import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import { Logo } from "../../../../../public/images";
import CopyKeyComponent from "@/components/(auth)/CopyKeyComponent";
import AuthCheck from "@/lib/AuthCheck";

const ExtensionActivationKey = async () => {
  const authStatus = await AuthCheck();
  return (
    <div className="bg-lightBlue">
      <ContentWrapper>
        <div className="min-w-full min-h-screen py-10">
          <div className="w-full h-auto py-2 flex items-center justify-center">
            <Image src={Logo} className="h-auto w-[278px] " alt="logo" />
          </div>
          <div className="w-auto  bg-fuchdsia-400 max-md:max-w-full max-md:px-2 mx-auto pt-14 lg:w-[540px] h-auto ">
            <CopyKeyComponent serverAuth={authStatus} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ExtensionActivationKey;
