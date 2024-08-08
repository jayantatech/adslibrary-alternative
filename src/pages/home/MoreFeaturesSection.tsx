import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { HomeDownload } from "../../../public/images";

const MoreFeaturesSection = () => {
  return (
    <div className="h-auto w-full my-24">
      <ContentWrapper>
        <div className="w-full h-auto min-h-[780px]  rounded-md md:py-8 md:px-8 max-md:p-3 bg-gradient-to-r from-slate-700 to-black ">
          <div className="py-6">
            <div className="py-4 h-auto w-full">
              <h2 className="text-[44px] max-lg:text-[34px] font-semibold font-OpenSans text-center max-md:text-[28px] text-white">
                More Surprise Features
              </h2>
              <p className="text-center font-OpenSans text-[16px] text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                non aut mollitia impedit sit possimus
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-auto lg:flex-row lg:justify-evenly max-lg:gap-6 py-10">
              <div className="w-[488px] max-md:w-full max-lg:w-[540px] h-[610px] max-md:h-[520px] bg-white rounded-md md:px-6 md:py-6 max-md:p-4 flex flex-col items-start justify-between">
                <div className="w-[58px] max-md:h-[48px] h-[58px] max-md:w-[48px] bg-mainBlue text-white rounded-md flex items-center justify-center">
                  <IoSearchSharp className="text-[34px] max-md:text-[28px] " />
                </div>
                <div className="h-[120px] max-md:h-[180px] w-full">
                  <h3 className="text-[20px] font-OpenSans font-semibold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="text-[16px] font-OpenSans pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas debitis velit quo accusantium. Quam alias mollitia,
                    facere aut quia aspernatur!
                  </p>
                </div>
                <div className="h-[358px] max-md:h-[240px] w-full bg-gradient-to-r from-lightBlue  to-mainBlue flex items-center justify-center relative rounded-md shadow-md hover:scale-[.98] transition-all duration-150">
                  <Image
                    src={HomeDownload}
                    alt="feature image"
                    className="w-[94%]"
                  />
                </div>
              </div>
              <div className="w-[488px] max-md:w-full max-lg:w-[540px] h-[610px] max-md:h-[520px] bg-white rounded-md md:px-6 md:py-6 max-md:p-4 flex flex-col items-start justify-between">
                <div className="w-[58px] max-md:h-[48px] h-[58px] max-md:w-[48px] bg-mainBlue text-white rounded-md flex items-center justify-center">
                  <IoSearchSharp className="text-[34px] max-md:text-[28px] " />
                </div>
                <div className="h-[120px] max-md:h-[180px] w-full">
                  <h3 className="text-[20px] font-OpenSans font-semibold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="text-[16px] font-OpenSans pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas debitis velit quo accusantium. Quam alias mollitia,
                    facere aut quia aspernatur!
                  </p>
                </div>
                <div className="h-[358px] max-md:h-[240px] w-full bg-gradient-to-r from-lightBlue  to-mainBlue flex items-center justify-center relative rounded-md shadow-md hover:scale-[.98] transition-all duration-150">
                  <Image
                    src={HomeDownload}
                    alt="feature image"
                    className="w-[94%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default MoreFeaturesSection;
