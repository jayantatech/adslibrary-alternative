"use client";

import React, { useEffect, useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { MixedPosts } from "../../../../../public/contents";
import CardsComponent from "@/components/CardsComponent";
import { FcVideoFile } from "react-icons/fc";
import { Skeleton } from "@/components/ui/skeleton";
import AdsGroupFiltersBar from "@/components/AdsGroupFiltersBar";
import { FaRegEdit } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const GroupAds = () => {
  const [isCardData, setIsCardData] = useState([{}]);
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
      <div className="w-full min-h-[68px] h-auto max-md:gap-3 bg-white rounded-md flex items-center justify-between px-3 py-2  max-md:flex-col ">
        <div className="flex items-start justify-start gap-4 max-md:w-full h-auto flex-col max-lg:w-1/2">
          <p className="font-OpenSans text-[19px] font-semibold">
            Folder/# FileName
          </p>
          <p className="font-OpenSans text-[14px] -mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            (File Description)
          </p>
        </div>
        <div className=" w-auto max-md:w-full h-full flex items-center justify-center gap-3 max-lg:gap-2 max-lg:w-1/2 max-md:flex-col">
          <div className="max-md:w-full flex gap-3 max-lg:gap-2">
            <button className="w-auto h-[38px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
              <FaRegEdit className="text-[22px] " />
              <span className="text-[18px]">Edit</span>
            </button>
            <button className="w-auto h-[38px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
              <IoShareSocial className="text-[22px] " />
              <span className="text-[18px]">Share</span>
            </button>
          </div>
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
        <div className=" columns-2 xl-desktop:columns-3 ultra-desktop:columns-4 4k-desktop:columns-6 5k-desktop:columns-7 max-lg:columns-2 max-md:columns-1 py-3 gap-3 lg:gap-6 max-lg:gap-4 w-full  h-auto overflow-hidden ">
          {MixedPosts.map((card, index) => (
            <CardsComponent key={index} cardData={card} />
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

export default GroupAds;
