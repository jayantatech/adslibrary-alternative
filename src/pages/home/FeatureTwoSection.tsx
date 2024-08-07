import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import { QuickSave } from "../../../public/images";
import { ChromeIcon } from "../../../public/icon";
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const FeatureTwoSection = () => {
  return (
    <div className="w-full h-auto bg-mainBlue py-14">
      <ContentWrapper>
        <div className="flex flex-row-reverse max-lg:flex-col-reverse gap-4 max-md:gap-14 min-h-[640px] bg-cyand-300 py-4">
          <div className="w-1/2 h-full bg-slated-400 lg:pr-10 max-lg:w-full lg:pt-14">
            <span className="text-[20px] font-semibold font-OpenSans text-white">
              Library
            </span>
            <h2 className="lg:text-[48px] text-[36px] max-md:text-[26px]  max-lg:text-[34px]  font-OpenSans font-semibold text-white">
              Create Online Ad Library
            </h2>
            <p className="text-[16px] font-OpenSans py-1 text-white">
              Ads saved from various ad platforms will be stored in your online
              ad library for easy viewing and management at any time.
            </p>
            <div className="flex w-full h-[80px] max-lg:h-[66px] max-md:h-auto py-2  items-center justify-start gap-4 mt-6 max-lg:mt-2 max-md:flex-col">
              <div className="bg-white w-2/4 max-md:w-full h-[44px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-slate-400 hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500 max-lg:h-[44px] shadow-md">
                <span className="text-[17px] font-OpenSans">
                  Go to My Library
                </span>
                <MdArrowOutward className="text-[28px]" />
              </div>
            </div>
            <div className="flex items-center justify-start flex-wrap gap-3 my-2 max-lg:justify-center max-md:justify-start">
              <div className="col-span-1 flex gap-2 items-center justify-center px-4 py-2 rounded-md shadow-sm hover:scale-[.98] transition-all duration-150 bg-black">
                <FaFacebookSquare className="text-[28px] inline-block text-white" />
                <span className="text-[17px] font-semibold font-OpenSans text-white">
                  Fb Ad Library
                </span>
              </div>
              <div className="col-span-1 flex gap-2 items-center justify-center px-4 py-2 rounded-md shadow-sm hover:scale-[.98] transition-all duration-150 bg-black">
                <FaTiktok className="text-[28px] inline-block text-white" />
                <span className="text-[17px] font-semibold font-OpenSans text-white">
                  TikTok Creative Center{" "}
                </span>
              </div>
              <div className="col-span-1 flex gap-2 items-center justify-center px-4 py-2 rounded-md shadow-sm hover:scale-[.98] transition-all duration-150 bg-black">
                <FaTiktok className="text-[28px] inline-block text-white" />
                <span className="text-[17px] font-semibold font-OpenSans text-white">
                  TikTok Organic{" "}
                </span>
              </div>
              <div className="col-span-1 flex gap-2 items-center justify-center px-4 py-2 rounded-md shadow-sm hover:scale-[.98] transition-all duration-150 bg-black">
                <AiFillTikTok className="text-[28px] inline-block text-white" />
                <span className="text-[17px] font-semibold font-OpenSans text-white">
                  TikTok Ad Library{" "}
                </span>
              </div>
              <div className="col-span-1 flex gap-2 items-center justify-center px-4 py-2 rounded-md shadow-sm hover:scale-[.98] transition-all duration-150 bg-black">
                <FaInstagram className="text-[28px] inline-block text-white" />
                <span className="text-[17px] font-semibold font-OpenSans text-white">
                  Instagram Organic{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full bg-fuchsiad-400 flex items-center justify-center max-lg:w-full">
            <div className="w-[568px] max-lg:w-[610px] max-md:w-full relative">
              <Image
                src={QuickSave}
                alt="section Image"
                className="w-full h-auto z-10 relative max-md:scale-105"
              />

              <div className="w-[90%] h-[90%] bg-slate-600  absolute top-0 left-0 rounded-lg shadow-md translate-x-12 max-md:translate-x-10  max-md:translate-y-12 translate-y-14"></div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default FeatureTwoSection;
