import FiltersBar from "@/components/FiltersBar";
import React from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { MixedPosts } from "../../../../../public/contents";
import CardsComponent from "@/components/CardsComponent";

const page = () => {
  return (
    <div className="w-full h-auto max-lg:py-3 py-1">
      <div className="w-full min-h-[68px] h-auto max-md:gap-3  bg-white rounded-md flex items-center justify-between px-3 py-2  max-md:flex-col ">
        <div className="flex items-center justify-start gap-4 max-md:w-full h-auto ">
          <div className="text-[18px] font-OpenSans font-semibold px-3 h-[36px] bg-mainBlue text-white rounded-md flex items-center justify-center cursor-pointer max-md:w-3/5">
            Community Ads
          </div>
          <div className="text-[18px] font-OpenSans font-semibold px-3 h-[36px] bg-lightBlue rounded-md flex items-center justify-center cursor-pointer  max-md:w-1/3">
            Brands
          </div>
        </div>
        <div className=" w-auto max-md:w-full h-full flex items-center justify-center">
          <button className="w-auto h-[40px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-mainBlue border-2 border-mainBlue font-medium gap-1 rounded-md hover:text-white hover:scale-[.95] transition-all duration-150 max-md:w-full">
            <RiAddBoxFill className="text-[22px] " />
            <span className="text-[18px]">Add New</span>
          </button>
        </div>
      </div>
      <div className="w-full py-4 ">
        <FiltersBar />
      </div>
      <div className=" columns-2 2xl:columns-4 max-xl:col-span-3  max-lg:columns-2 max-md:columns-1 py-3 gap-3  lg:gap-6 max-lg:gap-4 w-full  h-auto overflow-hidden ">
        {MixedPosts.map((card, index) => (
          <CardsComponent key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default page;
