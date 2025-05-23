"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaEye, FaPlay } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton";
import { VideoPostTypes } from "../../public/contents";
import { FacebookLogo, InstagramLogo } from "../../public/images";
import CardPostDialogBox from "./CardPostDialogBox";

const VideoCard = ({
  brandLogo,
  brandName,
  lastSaveDate,
  activeStatus,
  postVideo,
  postDescription,
}: VideoPostTypes) => {
  const [isEyeHover, setIsEyeHover] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track if the video has been loaded
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video && !isVideoLoaded) {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoLoaded) {
            video.src = postVideo; // Load the video source only once
            setIsVideoLoading(true); // Show the skeleton loader
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5, // Trigger when 50% of the video is in view
      });

      observer.observe(video);

      return () => {
        observer.unobserve(video);
      };
    }
  }, [postVideo, isVideoLoaded]);

  const handleVideoLoad = () => {
    setIsVideoLoading(false); // Hide the skeleton loader once the video is loaded
    setIsVideoLoaded(true); // Mark the video as loaded
  };

  useEffect(() => {
    const video = videoRef.current;
    if (isVideoPlaying && video) {
      video.play();
    }
  }, [isVideoPlaying]);

  return (
    <div className="w-[368px] max-lg:w-[340px] h-auto bg-white rounded-md p-3 shadow-lg">
      <div className="w-full h-[54px] max-lg:h-[52px] flex items-center justify-between relative">
        {isVideoLoading && (
          <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        )}
        <div
          className={`${
            isVideoLoading ? "opacity-0" : "opacity-100"
          } w-full h-full flex items-center justify-between`}
        >
          <div className="w-auto h-full flex items-center justify-start gap-1">
            <div className="w-[48px] max-lg:w-[46px] h-[48px] max-lg:h-[46px] rounded-md">
              <Image
                src={brandLogo}
                alt="Brand Logo"
                className="w-full h-full rounded-md"
              />
            </div>
            <h3 className="text-[17px] max-lg:text-[16px] font-bold font-OpenSans">
              {brandName}
            </h3>
          </div>
          <CardPostDialogBox displayFormat="" displayData={postVideo}>
            <div
              className={`w-[34px] max-lg:w-[30px] h-[34px] max-lg:h-[30px] bg-transparent rounded-[4px] border-slate-300 hover:border-blue-500 border flex items-center justify-center cursor-pointer transition-all duration-150 ${
                isEyeHover ? "scale-[.95]" : ""
              }`}
              onMouseEnter={() => setIsEyeHover(true)}
              onMouseLeave={() => setIsEyeHover(false)}
            >
              <FaEye
                className={`text-[18px] max-lg:text-[17px] hover:text-blue-500 transition-all duration-150 ${
                  isEyeHover ? "scale-[.95] text-blue-500" : ""
                }`}
              />
            </div>
          </CardPostDialogBox>
        </div>
        {/* {!isImageLoading ? (
    
        ) : null} */}
      </div>
      <div className="relative w-full min-h-[60px] h-auto mt-1">
        {isVideoLoading ? (
          <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        ) : null}
        {!isVideoLoading ? (
          <>
            <div className="w-full h-[28px] flex items-center justify-start gap-1">
              <BsClock className="text-[18px] max-lg:text-[17px]" />
              <span className="text-[14px] font-Poppins">{lastSaveDate}</span>
            </div>
            <div className="w-full h-[30px] flex items-center justify-between">
              <div className="flex items-center justify-start gap-1 w-auto h-full">
                <HiOutlineStatusOnline className="text-[18px] max-lg:text-[17px]" />
                <span className="text-[14px] font-Poppins">{activeStatus}</span>
              </div>
              <div className="w-auto h-full flex gap-1 items-center justify-center">
                <span className="text-[14px] font-Poppins">Platform:</span>
                <div className="w-[26px] h-[26px] flex items-center justify-center rounded-full overflow-hidden">
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
          </>
        ) : null}
      </div>
      <div className="w-full h-[488px] max-lg:h-[484px] my-1.5 rounded-md overflow-hidden relative">
        {isVideoLoading ? (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        ) : null}
        {!isVideoLoading ? (
          <div
            className={`w-[80px] h-[80px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-20 cursor-pointer ${
              !isVideoPlaying ? "block" : "hidden"
            }`}
            onClick={() => setIsVideoPlaying(true)}
          >
            <div className="w-full h-full bg-black absolute rounded-full opacity-40"></div>
            <FaPlay className="text-[34px] text-white translate-x-1 cursor-pointer opacity-100" />
          </div>
        ) : null}

        <video
          ref={videoRef}
          controls={isVideoPlaying}
          onLoadedData={handleVideoLoad}
          className="w-full h-full object-cover z-0"
        />
      </div>

      <div className="w-full min-h-[46px] h-auto relative">
        {isVideoLoading ? (
          <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        ) : null}
        {!isVideoLoading ? (
          <p className="text-[14px] max-lg:text-[14px] font-OpenSans font-semibold">
            {postDescription}
          </p>
        ) : null}
      </div>
      <div className="w-full h-[40px] max-lg:h-[38px] bg-cdyan-500 mt-1.5 flex items-center justify-between relative">
        {isVideoLoading ? (
          <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        ) : null}
        {!isVideoLoading ? (
          <>
            <div className="w-[72%] max-lg:w-[72%] h-full border p-3 hover:border-blue-500 transition-all duration-200 rounded-md flex items-center justify-between cursor-pointer">
              <span className="text-[14px] font-Poppins">Select Groups</span>
              <MdKeyboardArrowDown className="text-[18px] hover:text-blue-500" />
            </div>

            <div className="w-[26%] h-full border bg-blue-600 text-white flex items-center justify-center rounded-md font-OpenSans font-semibold text-[15px] cursor-pointer hover:scale-[.96] transition-all duration-150">
              Save Ad
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default VideoCard;
