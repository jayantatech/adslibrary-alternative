"use client";
import React, { useEffect, useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { FcVideoFile } from "react-icons/fc";
import { Skeleton } from "@/components/ui/skeleton";
import AdsGroupFiltersBar from "@/components/AdsGroupFiltersBar";
import BrandsBar from "@/components/BrandsBar";
import TopBarTabs from "@/components/TopBarTabs";
import { MixedPosts } from "../../../../../../public/contents";

const MyBrands = () => {
  const [isCardData, setIsCardData] = useState(MixedPosts.slice(0, 9));
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-auto max-lg:py-3 py-1">
      <div className="w-full min-h-[68px] h-auto max-md:gap-3  bg-white rounded-md flex items-center justify-between px-3 py-2  max-md:flex-col ">
        <div className="flex items-center justify-start gap-4 max-md:w-full h-auto ">
          <TopBarTabs
            firstTabLabel="My Ads"
            firstTabLink="/panel/myAds"
            firstTabMatchUrl="myAds"
            secondTabLabel="My Brands"
            secondTabLink="/panel/myBrands"
            secondTabMatchUrl="myBrands"
          />
        </div>
        <div className=" w-auto max-md:w-full h-full flex items-center justify-center">
          <button className="w-auto h-[38px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
            <RiAddBoxFill className="text-[22px] " />
            <span className="text-[18px]">Add New</span>
          </button>
        </div>
      </div>
      <div className="w-full py-4 ">
        <AdsGroupFiltersBar />
      </div>
      {isCardData.length > 1 ? (
        <div className=" grid grid-cols-2 4k-desktop:grid-cols-3 5k-desktop:grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-1 max-lg:gap-2 gap-3 max-md:mx-4 max-lg:mx-3">
          {isCardData.map((item) => (
            <BrandsBar brandInfo={item} key={item.brandName} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[480px] max-md:h-[420px] flex items-center justify-center">
          {loading ? (
            <Skeleton className="w-full h-full bg-gray-200" />
          ) : (
            <div className="w-[738px] min-h-[280px] max-md:w-full max-md:min-h-[380px] max-md:px-3 max-lg:w-[660px] h-auto flex flex-col items-center justify-center">
              <FcVideoFile className="text-[120px] max-lg:text-[98px] max-md:text-[80px] my-2 opacity-40" />
              <p className="text-[16px] font-OpenSans text-center">
                This group is empty, click the button below to save ads from ad
                platform like FB ads library, TikTok creative center & Instagram
                or upload your own ad video/photo from local.
              </p>
              <div className="flex w-full h-[80px] max-lg:h-[66px] max-md:h-auto py-2  items-center justify-center gap-4 mt-6 max-lg:mt-2 max-md:flex-col max-md:gap-2">
                <div className="bg-mainBlue text-white w-[178px] max-md:w-full h-[40px] max-lg:h-[40px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-slate-200 hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-gray-100">
                  <span className="text-[17px] font-OpenSans">
                    Save New Ads
                  </span>
                </div>
                <div className="bg-white w-[178px] max-md:w-full h-[40px] max-lg:h-[40px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-slate-400 hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500 ">
                  <span className="text-[17px] font-OpenSans">
                    Manual Uploads{" "}
                  </span>
                </div>
              </div>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBrands;
