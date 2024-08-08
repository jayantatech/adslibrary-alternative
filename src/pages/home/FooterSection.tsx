import Image from "next/image";

import { MdArrowOutward } from "react-icons/md";

import ContentWrapper from "@/components/ContentWrapper";
import { Logo } from "../../../public/images";
import { ChromeIcon } from "../../../public/icon";

const FooterSection = () => {
  return (
    <footer>
      <div className="w-full h-auto min-h-[380px] max-md:h-[780xp] bg-lightBlue">
        <ContentWrapper>
          <div className="py-8">
            <div>
              <h3 className="text-[44px] max-lg:text-[38px] font-OpenSans font-semibold text-center">
                Register Right Now
              </h3>
              <p className="text-center font-OpenSans text-[16px] py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus sit et corrupti similique!
              </p>
            </div>
            <div className="w-full h-auto flex items-center justify-center py-2">
              <div className="w-[760px] h-[140px] max-md:h-[200px] bg-gradient-to-r from-slate-700 to-black  rounded-md px-8 max-md:py-4">
                <div className="flex w-full h-[80px] max-lg:h-[66px] max-md:h-auto py-2  items-center justify-center gap-4 mt-6 max-lg:mt-2 max-md:flex-col">
                  <div className="bg-mainBlue text-white w-2/4 max-md:w-full h-[44px] max-lg:h-[44px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-slate-400 hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-gray-100 shadow-md">
                    <Image
                      src={ChromeIcon}
                      alt="logo"
                      className="w-[26px] h-[26px]"
                    />
                    <span className="text-[17px] font-OpenSans">
                      Install Chrome Extension
                    </span>
                  </div>
                  <div className="bg-white w-2/4 max-md:w-full h-[44px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-slate-400 hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500 max-lg:h-[44px] shadow-md">
                    <span className="text-[17px] font-OpenSans">
                      Start Free Trial
                    </span>
                    <MdArrowOutward className="text-[28px]" />
                  </div>
                </div>
                <p className="text-[14px] text-center font-OpenSans text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <div className="bg-black py-14 w-full relative overflow-hidden">
        <ContentWrapper>
          <div className="w-full h-[290px] max-lg:h-[580px] max-md:h-auto flex flex-row max-lg:flex-wrap lg:gap-10 z-10 relative ">
            <div className="w-1/5 max-lg:w-2/4 max-md:w-full max-lg:h-[240px] flex flex-col gap-2 max-md:h-[220px]">
              <div className="w-full h-[30px] flex items-center justify-start border-l-[4px] border-mainBlue mb-3">
                <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                  About adsDemo
                </span>
              </div>
              <div className="py-2">
                <Image alt="Footer Logo" src={Logo} width={180} height={70} />{" "}
              </div>
              <p className="text-[15px] font-openSans text-[#fff]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptate dolor quo neque porro vitae inventore iure,
                dignissimos placeat molestias.{" "}
              </p>
            </div>
            <div className="w-1/5 h-auto max-lg:h-[240px] max-lg:w-2/4 max-md:w-2/4  flex flex-col gap-2">
              <div className="w-full h-[30px] flex items-center justify-start border-l-[4px] border-mainBlue mb-3">
                <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                  Products{" "}
                </span>
              </div>
              <div className="flex items-start justify-center flex-col gap-3">
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Chrome Extension
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Library{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Discovery{" "}
                </a>
              </div>
            </div>

            <div className="w-1/5 h-auto max-lg:h-[240px] max-lg:w-2/4 max-md:w-2/4 flex flex-col gap-2">
              <div className="w-full h-[30px] flex items-center justify-start border-l-[4px] border-mainBlue mb-3">
                <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                  Company
                </span>
              </div>
              <div className="flex items-start justify-center flex-col gap-3">
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Pricing{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Affiliates{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Discovery{" "}
                </a>
              </div>
            </div>
            <div className="w-1/5 h-auto max-lg:h-[240px] max-lg:w-2/4 max-md:w-1/2  flex flex-col gap-2">
              <div className="w-full h-[30px] flex items-center justify-start border-l-[4px] border-mainBlue mb-3">
                <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                  Ad Platforms{" "}
                </span>
              </div>
              <div className="flex items-start justify-center flex-col gap-3">
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Fb Ad Library{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  TikTok Ad Library{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  TikTok Creative Center{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Tiktok Organic{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Instagram Organic{" "}
                </a>
              </div>
            </div>
            <div className="w-1/5 h-auto max-lg:h-[240px] max-lg:w-2/4 max-md:w-1/2  flex flex-col gap-2">
              <div className="w-full h-[30px] flex items-center justify-start border-l-[4px] border-mainBlue mb-3">
                <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                  Popular Articles
                </span>
              </div>
              <div className="flex items-start justify-center flex-col gap-3">
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Post one{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Post two{" "}
                </a>
                <a className="text-[15px] font-openSans text-[#fff] font-semibold hover:text-lightBlue cursor-pointer hover:scale-[.98] transition-all duration-150 flex items-center justify-start">
                  Post three{" "}
                </a>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </footer>
  );
};

export default FooterSection;
