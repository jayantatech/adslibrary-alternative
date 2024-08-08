import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import { ChromeIcon } from "../../../public/icon";
import { MdArrowOutward } from "react-icons/md";
import {
  HeroBackgroundSideImageOne,
  HeroBackgroundSideImageTwo,
  HeroDashboardBackgroundOne,
  HeroDashboardBackgroundTwo,
  HeroDashboardIMage,
} from "../../../public/images"; // Import all images

import styles from "./animations.module.css"; // Import the CSS module

const HeroSection = () => {
  return (
    <div className="w-full h-auto lg:min-h-[880px] max-lg:h-[640px] max-md:max-h-[580px] bg-[#F5F8FE] relative overflow-hidden">
      <div className="w-full h-auto absolute top-0 left-0 flex justify-between items-start opacity-50 max-md:opacity-30">
        <div className="w-auto h-auto relative ml-10 max-lg:-translate-x-40 max-md:-translate-x-24">
          <Image
            src={HeroBackgroundSideImageOne}
            alt="heroImage"
            className={`w-[280px] h-auto -z-10 ${styles.animateMoveUp}`} // Apply the CSS module class
          />
        </div>
        <div className="w-auto h-auto relative mr-10 max-lg:translate-x-40 max-md:translate-x-24">
          <Image
            src={HeroBackgroundSideImageTwo}
            alt="heroImage"
            className={`w-[290px] h-auto -z-10 ${styles.animateMoveDown} ${styles.animateMoveDelay1000}`} // Apply the CSS module classes
          />
        </div>
      </div>
      <ContentWrapper>
        <div className="w-full h-full max-md:h-full bg-blued-300 flex items-center justify-center z-10 relative">
          <div className="md:w-[76%] max-md:w-full h-auto lg:min-h-[880px]  max-lg:h-[640px] pt-[60px] max-lg:pt-[54px] relative z-20">
            <div className="text-center w-auto max-md:w-full h-auto">
              <h1 className=" text-[48px] lg:text-[72px] max-lg:text-[44px] max-lg:font-semibold font-OpenSans font-medium max-md:text-[28px] mb-2">
                <span className="text-mainBlue">
                  Best Ad Library Saving Tool
                </span>{" "}
                <br />
                Save, Download & Share
              </h1>
              <p className="text-[17px] max-md:text-[16px] font-OpenSans">
                Save ads from fb ad library, tiktok creative center and
                instagram. Share creative ad ideas with your team or clients.
              </p>
              <div className="flex w-full h-[80px] max-lg:h-[66px] max-md:h-auto py-2  items-center justify-center gap-4 mt-6 max-lg:mt-2 max-md:flex-col">
                <div className="bg-mainBlue text-white w-[288px] h-[44px] max-lg:h-[40px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-black hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-gray-100">
                  <Image
                    src={ChromeIcon}
                    alt="logo"
                    className="w-[26px] h-[26px]"
                  />
                  <span className="text-[17px] font-OpenSans">
                    Install Chrome Extension
                  </span>
                </div>
                <div className="bg-white w-[178px] h-[44px] max-lg:h-[40px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-black hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500 ">
                  <span className="text-[17px] font-OpenSans">
                    Start Free Trial
                  </span>
                  <MdArrowOutward className="text-[26px]" />
                </div>
              </div>
            </div>
            <div className="w-full h-auto mx-auto mt-3">
              <Image
                src={HeroDashboardIMage}
                alt="heroImage"
                className=" w-[90%] max-lg:w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroSection;
