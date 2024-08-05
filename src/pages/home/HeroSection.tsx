import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import { ChromeIcon } from "../../../public/icon";
import { MdArrowOutward } from "react-icons/md";
import { HeroDashboardIMage } from "../../../public/images";

const HeroSection = () => {
  return (
    <div className="w-full h-auto lg:min-h-[880px] bg-blue-200">
      <ContentWrapper>
        <div className=" w-full h-auto min-h-[880px] bg-blue-300 flex items-center justify-center">
          <div className="w-[76%] h-auto  lg:min-h-[880px] pt-[60px] bg-cyan-200">
            <div className="text-center w-auto h-auto">
              <h1 className="text-[72px] font-OpenSans font-medium">
                <span className="text-mainBlue">
                  Best Ad Library Saving Tool
                </span>{" "}
                <br />
                Save, Download & Share
              </h1>
              <p className="text-[17px] font-OpenSans">
                Save ads from fb ad library, tiktok creative center and
                instagram. Share creative ad ideas with your team or clients.
              </p>
              <div className="flex w-full h-[80px] bg-fuchsia-400 items-center justify-center gap-4 mt-6">
                <div className="bg-mainBlue text-white w-[288px] h-[54px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-black hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-gray-100">
                  <Image
                    src={ChromeIcon}
                    alt="logo"
                    className="w-[26px] h-[26px]"
                  />
                  <span className="text-[17px] font-OpenSans">
                    Install Chrome Extension
                  </span>
                </div>{" "}
                <div className="bg-white w-[178px] h-[54px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-black hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500">
                  <span className="text-[17px] font-OpenSans">
                    Start Free Trial
                  </span>
                  <MdArrowOutward className="text-[28px]" />
                </div>{" "}
              </div>
            </div>
            <div className="w-full h-auto mx-auto mt-3">
              <Image
                src={HeroDashboardIMage}
                alt="heroImage"
                className=" w-[90%] h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroSection;
