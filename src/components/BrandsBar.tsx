import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { FacebookLogo } from "../../public/images";
import { RiAddBoxFill } from "react-icons/ri";
import { Skeleton } from "./ui/skeleton";

type brandInfoProps = {
  brandLogo: StaticImageData;
  brandName: string;
  lastSaveDate: string;
  activeStatus: string;
  postMedia: StaticImageData | string; // Can be either an image or video URL
  postDescription: string;
  card_type: "image_post" | "video_post";
};

type BrandsBarProps = {
  brandInfo: brandInfoProps;
};

const BrandsBar = ({ brandInfo }: BrandsBarProps) => {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="w-full col-span-1 min-h-[110px] h-auto max-md:flex-col l-tablet:flex-col xl-desktop:flex-row bg-white border-2 border-slate-200 rounded-md p-4 max-md:p-2 flex items-center justify-between gap-2 hover:shadow transition-all duration-150">
      {loading ? (
        <Skeleton className="w-full h-full" />
      ) : (
        <>
          <div className="flex items-center w-auto h-full gap-2 max-md:justify-start max-md:w-full l-tablet:w-full">
            <div className="w-[74px] max-md:w-[64px] h-[74px] max-md:h-[64px] bg-blue-500 rounded-md overflow-hidden">
              <Image
                src={brandInfo.brandLogo}
                className="w-full h-full bg-cover"
                alt="logo"
              />
            </div>
            <div className="flex items-center justify-start gap-1">
              <span className="text-[18px] font-OpenSans font-bold ">
                {brandInfo.brandName}
              </span>
              <div className="w-[26px] h-[26px]">
                <Image
                  src={FacebookLogo}
                  className="w-full h-full bg-cover"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 max-md:flex max-md:w-full max-md:mt-1 l-tablet:w-full max-sm:flex-col sm:flex-row  l-tablet:mt-2">
            <button className="w-auto h-[38px] min-w-[100px] l-tablet:w-full px-2 py-2 flex items-center justify-center text-black hover:bg-lightBlue border border-slate-300 font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
              <div className="w-[26px] h-[26px]">
                <Image
                  src={FacebookLogo}
                  className="w-full h-full bg-cover"
                  alt="logo"
                />
              </div>
              <span className="text-[18px]">Ads Library</span>
            </button>
            <button className="w-auto h-[38px] min-w-[100px]  l-tablet:w-full px-2 py-2 flex items-center justify-center text-black hover:bg-lightBlue border border-slate-300 font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
              <RiAddBoxFill className="text-[22px] text-mainBlue " />
              <span className="text-[18px]">Add Favorite</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BrandsBar;
