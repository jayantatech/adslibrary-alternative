"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsClock } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";

import { MdKeyboardArrowDown } from "react-icons/md";
import { FacebookLogo, InstagramLogo } from "../../public/images";
import { ImagePostTypes } from "../../public/contents";

const ImageCard = ({
  brandLogo,
  brandName,
  lastSaveDate,
  activeStatus,
  postImage,
  postDescription,
}: ImagePostTypes) => {
  const [isEyeHover, serIsEyeHover] = useState(false);
  useEffect(() => {
    console.log(isEyeHover);
  }, [isEyeHover]);
  return (
    <div className="w-[368px] max-lg:w-[340px] h-fit  bg-white rounded-md p-3 shadow-lg">
      <div className="w-full h-[54px] max-lg:h-[52px] flex items-center justify-between ">
        <div className="w-auto h-full flex items-center justify-start gap-1">
          <div className="w-[48px] max-lg:w-[46px] h-[48px] max-lg:h-[46px] rounded-md">
            <Image
              src={brandLogo}
              alt="Facebook-Logo"
              className="w-full h-full rounded-md"
            />
          </div>
          <h3 className="text-[17px] max-lg:text-[16px] font-bold font-OpenSans">
            {brandName}
          </h3>
        </div>
        <div
          className={`w-[34px] max-lg:w-[30px] h-[34px] max-lg:h-[30px] bg-transparent rounded-[4px] border-slate-300 hover:border-blue-500 border flex items-center justify-center cursor-pointer transition-all duration-150 ${
            isEyeHover ? "scale-[.95]" : ""
          }`}
          onMouseEnter={() => serIsEyeHover(true)}
          onMouseLeave={() => serIsEyeHover(false)}
        >
          <FaEye
            className={`text-[18px] max-lg:text-[17px] hover:text-blue-500 transition-all duration-150 ${
              isEyeHover ? "scale-[.95] text-blue-500" : ""
            }`}
          />
        </div>
      </div>
      <div className="w-full h-[28px] flex items-center justify-start gap-1">
        <BsClock className=" text-[18px] max-lg:text-[17px]" />
        <span className="text-[14px] font-Poppins">{lastSaveDate}</span>
      </div>
      <div className="w-full h-[30px] flex items-center justify-between">
        <div className="flex items-center justify-start gap-1 w-auto h-full">
          <HiOutlineStatusOnline className="text-[18px] max-lg:text-[17px]" />
          <span className="text-[14px] font-Poppins">{activeStatus}</span>
        </div>
        <div className="w-auto h-full flex gap-1 items-center justify-center">
          <span className="text-[14px] font-Poppins"> Platform:</span>
          <div className="w-[26px] h-[26px] flex items-center justify-center rounded-full overflow-hidden">
            {" "}
            <Image
              src={FacebookLogo}
              width={26}
              height={26}
              alt="Facebook-Logo"
              className="scale-105"
            />
          </div>
          <div className="w-[26px] h-[26px] flex items-center justify-center rounded-full overflow-hidden">
            <Image
              src={InstagramLogo}
              width={26}
              height={26}
              alt="Instagram-Logo"
              className="scale-105"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[310px] max-lg:h-[298px] my-1.5 rounded-md overflow-hidden">
        <Image
          src={postImage}
          alt="Instagram-Logo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full min-h-[46px] h-auto">
        <p className="text-[14px] max-lg:text-[14px] font-OpenSans font-semibold">
          {postDescription}
        </p>
      </div>
      <div className="w-full h-[40px] max-lg:h-[38px] bg-cdyan-500 mt-1.5 flex items-center justify-between">
        <div className="w-[72%] max-lg:w-[72%] h-full border p-3 hover:border-blue-500 transition-all duration-200 rounded-md flex items-center justify-between cursor-pointer">
          <span className="text-[14px] font-Poppins">Select Groups</span>
          <MdKeyboardArrowDown className="text-[18px] hover:text-blue-500" />
        </div>
        <div className="w-[26%] h-full border bg-blue-600 text-white flex items-center justify-center rounded-md font-OpenSans font-semibold text-[15px] cursor-pointer hover:scale-[.96] transition-all duration-150">
          Save Ad
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
