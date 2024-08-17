"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TitanLogo } from "../../public/images";

const SearchComponent = () => {
  const [inputHover, setInputHover] = useState<boolean>(false);
  return (
    <div className="w-auto lg:min-w-[280px] lg:w-[494px] relative">
      <div
        className="flex items-center w-full justify-start px-2 gap-1.5 bg-white py-2 rounded-md h-[42px] border-2 border-slate-200 focus-within:border-slate-400 focus-within:border-1.5 transition-all duration-150"
        onFocus={() => setInputHover(true)}
        onBlur={() => setInputHover(false)}
      >
        <IoIosSearch className="text-[22px]" />
        <input
          placeholder="Enter your search"
          className="text-[16px] w-full focus:outline-none"
        />
      </div>
      <div
        className={`w-full h-auto max-h-[448px] bg-white border-2 absolute mt-3 rounded-md p-3 min-h-[288px] transition-all duration-150 ${
          inputHover ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-auto pb-2 border-b  flex items-center justify-start gap-2">
          <button className="w-auto h-[36px] px-4 bg-lightBlue py-2 flex items-center justify-center text-mainBlue hover:bg-mainBlue border-2 border-slate-200 hover:border-mainBlue font-medium gap-1 rounded-md hover:text-white hover:scale-[.98] transition-all duration-150 max-md:w-full ">
            <span className="text-[18px]">View Libray</span>
          </button>
          <button className="w-auto h-[36px] px-4 py-2 flex items-center justify-center text-mainBlue hover:bg-mainBlue border-2 border-slate-200 hover:border-mainBlue font-medium gap-1 rounded-md hover:text-white hover:scale-[.98] transition-all duration-150 max-md:w-full bg-lightBlue">
            <span className="text-[18px]">View Discovery</span>
          </button>
        </div>
        <div>
          <span className="text-[14px] font-semibold font-OpenSans">
            Discover Brands
          </span>
          <div className="w-full h-auto mt-1 bg-sldate-400 bg-white flex flex-col gap-1">
            <div className="flex items-center justify-start gap-2 py-1 px-2 rounded-md border-2 border-transparent transition-all duration-150 hover:bg-gray-50 hover:border-slate-200 ">
              <Image
                src={TitanLogo}
                alt="brand image"
                className="w-[42px] h-[42px] rounded-md"
              />
              <span className="text-[17px] font-OpenSans">
                Lorem ipsum dolor sit amet{" "}
              </span>
            </div>
            <div className="flex items-center justify-start gap-2 py-1 px-2 rounded-md border-2 border-transparent transition-all duration-150 hover:bg-gray-50 hover:border-slate-200 ">
              <Image
                src={TitanLogo}
                alt="brand image"
                className="w-[42px] h-[42px] rounded-md"
              />
              <span className="text-[17px] font-OpenSans">
                Lorem ipsum dolor sit amet{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
