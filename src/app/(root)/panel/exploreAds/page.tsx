import FiltersBar from "@/components/FiltersBar";
import MultiSelectSearch from "@/components/MultiSelectSearch";
import SearchSection from "@/components/SearchSection";
import React from "react";
import { RiAddBoxFill } from "react-icons/ri";
import { ImagePosts, VideoPosts } from "../../../../../public/contents";
import VideoCard from "@/components/VideoCard";
import ImageCard from "@/components/ImageCard";

const page = () => {
  return (
    <div className="w-full h-auto ">
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
          <button className="w-auto h-[40px] px-3 py-2 flex items-center justify-center text-mainBlue hover:bg-mainBlue border-2 border-mainBlue font-medium gap-1 rounded-md hover:text-white hover:scale-[.95] transition-all duration-150 max-md:w-full">
            <RiAddBoxFill className="text-[22px] " />
            <span className="text-[18px]">Add New</span>
          </button>
        </div>
      </div>
      <div className="w-full py-4 ">
        <FiltersBar />
      </div>
      <div className="w-full h-auto bg-redd-300 min-h-[450px] py-4">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-4 justify-items-center">
          {ImagePosts.map((post) => (
            <ImageCard
              key={post.brandName}
              brandLogo={post.brandLogo}
              brandName={post.brandName}
              lastSaveDate={post.lastSaveDate}
              activeStatus={post.activeStatus}
              postImage={post.postImage}
              postDescription={post.postDescription}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-4 justify-items-center mt-14">
          {VideoPosts.map((post) => (
            <VideoCard
              key={post.brandName}
              brandLogo={post.brandLogo}
              brandName={post.brandName}
              lastSaveDate={post.lastSaveDate}
              activeStatus={post.activeStatus}
              postVideo={post.postVideo}
              postDescription={post.postDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
