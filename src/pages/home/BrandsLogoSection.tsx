import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import { Logo } from "../../../public/images";

const BrandsLogoSection = () => {
  return (
    <div className="w-full h-auto my-[68px]">
      <ContentWrapper>
        <div className="w-full h-auto min-h-[260px] py-[26px]">
          <h2 className="text-[32px] max-lg:text-[28px] font-OpenSans font-semibold text-center">
            3,000+ Brands and Agencies Rely on Us
          </h2>{" "}
          <div className="w-full h-auto mt-4">
            <div className="lg:w-[76%] w-full  h-auto mx-auto flex items-center justify-evenly  gap-4 py-2 max-md:grid max-md:grid-cols-2 max-md:grid-rows-2">
              <div className="md:w-1/5 px-3 max-lg:px-2 py-1 col-span-1 row-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="md:w-1/5 px-3 max-lg:px-2 py-1 col-span-1 row-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="md:w-1/5 px-3 max-lg:px-2 py-1 col-span-1 row-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="md:w-1/5 px-3 max-lg:px-2 py-1 col-span-1 row-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
            </div>
            <div className="lg:w-[76%] w-full  h-auto mx-auto flex items-center justify-evenly gap-4 py-2 max-md:grid max-md:grid-cols-2 max-md:grid-rows-2">
              <div className="md:w-1/5 px-3 max-lg:px-2 py-1 col-span-1 row-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="md:w-1/5 px-3 max-lg:px-2 py-1 col-span-1 row-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="md:w-1/5 px-3 max-lg:px-2 py-1 col-span-1 row-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="md:w-1/5 px-3 max-lg:px-2 py-1 col-span-1 row-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
            </div>
            {/* <div className="lg:w-[76%] bg-gray-500 h-auto mx-auto flex items-center justify-center gap-4 py-2">
              <div className="w-1/5 px-3 py-1 col-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="w-1/5 px-3 py-1 col-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="w-1/5 px-3 py-1 col-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
              <div className="w-1/5 px-3 py-1 col-span-1 rounded-md hover:scale-[.98] transition-all duration-150  inline-block bg-lightBlue shadow-md">
                <Image
                  src={Logo}
                  alt="brandLogo"
                  className="w-auto h-[40px] "
                />
              </div>
            </div> */}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default BrandsLogoSection;
