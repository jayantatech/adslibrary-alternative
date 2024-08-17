// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import { BsClock } from "react-icons/bs";
// import { FaEye } from "react-icons/fa";
// import { HiOutlineStatusOnline } from "react-icons/hi";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { Skeleton } from "@/components/ui/skeleton";

// import { FacebookLogo, InstagramLogo } from "../../public/images";
// import { ImagePostTypes } from "../../public/contents";

// const ImageCard = ({
//   brandLogo,
//   brandName,
//   lastSaveDate,
//   activeStatus,
//   postImage,
//   postDescription,
// }: ImagePostTypes) => {
//   const [isEyeHover, setIsEyeHover] = useState(false);
//   const [isImageLoading, setIsImageLoading] = useState(true);

//   return (
//     <div className="w-[368px] max-lg:w-[340px] h-fit bg-white rounded-md p-3 shadow-lg">
//       <div className="w-full h-[54px] max-lg:h-[52px] flex items-center justify-between relative">
//         {isImageLoading ? (
//           <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
//             <Skeleton className="w-full h-full bg-lightBlue" />
//           </div>
//         ) : null}
//         {!isImageLoading ? (
//           <>
//             <div className="w-auto h-full flex items-center justify-start gap-1 ">
//               <div className="w-[48px] max-lg:w-[46px] h-[48px] max-lg:h-[46px] rounded-md">
//                 <Image
//                   src={brandLogo}
//                   alt="Facebook-Logo"
//                   className="w-full h-full rounded-md"
//                 />
//               </div>
//               <h3 className="text-[17px] max-lg:text-[16px] font-bold font-OpenSans">
//                 {brandName}{" "}
//               </h3>
//             </div>

//             <div
//               className={`w-[34px] max-lg:w-[30px] h-[34px] max-lg:h-[30px] bg-transparent rounded-[4px] border-slate-300 hover:border-blue-500 border flex items-center justify-center cursor-pointer transition-all duration-150 ${
//                 isEyeHover ? "scale-[.95]" : ""
//               }`}
//               onMouseEnter={() => setIsEyeHover(true)}
//               onMouseLeave={() => setIsEyeHover(false)}
//             >
//               <FaEye
//                 className={`text-[18px] max-lg:text-[17px] hover:text-blue-500 transition-all duration-150 ${
//                   isEyeHover ? "scale-[.95] text-blue-500" : ""
//                 }`}
//               />
//             </div>
//           </>
//         ) : null}
//       </div>
//       <div className="relative w-full min-h-[60px] h-auto mt-1">
//         {isImageLoading ? (
//           <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
//             <Skeleton className="w-full h-full bg-lightBlue" />
//           </div>
//         ) : null}
//         {!isImageLoading ? (
//           <>
//             <div className="w-full h-[28px] flex items-center justify-start gap-1">
//               <BsClock className="text-[18px] max-lg:text-[17px]" />
//               <span className="text-[14px] font-Poppins">{lastSaveDate}</span>
//             </div>
//             <div className="w-full h-[30px] flex items-center justify-between">
//               <div className="flex items-center justify-start gap-1 w-auto h-full">
//                 <HiOutlineStatusOnline className="text-[18px] max-lg:text-[17px]" />
//                 <span className="text-[14px] font-Poppins">{activeStatus}</span>
//               </div>
//               <div className="w-auto h-full flex gap-1 items-center justify-center">
//                 <span className="text-[14px] font-Poppins">Platform:</span>
//                 <div className="w-[26px] h-[26px] flex items-center justify-center rounded-full overflow-hidden">
//                   <Image
//                     src={FacebookLogo}
//                     width={26}
//                     height={26}
//                     alt="Facebook-Logo"
//                     className="scale-105"
//                   />
//                 </div>
//                 <div className="w-[26px] h-[26px] flex items-center justify-center rounded-full overflow-hidden">
//                   <Image
//                     src={InstagramLogo}
//                     width={26}
//                     height={26}
//                     alt="Instagram-Logo"
//                     className="scale-105"
//                   />
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : null}
//       </div>
//       <div className="w-full h-[310px] max-lg:h-[298px] my-1.5 rounded-md overflow-hidden relative">
//         {isImageLoading && (
//           <div className="absolute inset-0 flex items-center justify-center z-10">
//             <Skeleton className="w-full h-full" />
//           </div>
//         )}
//         <Image
//           src={postImage}
//           alt="Post Image"
//           width={368}
//           height={310}
//           className={`object-cover w-full h-full  ${
//             isImageLoading ? "opacity-0" : ""
//           }`}
//           onLoad={() => setIsImageLoading(false)}
//         />
//       </div>
//       <div className="w-full min-h-[46px] h-auto relative">
//         {isImageLoading ? (
//           <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
//             <Skeleton className="w-full h-full bg-lightBlue" />
//           </div>
//         ) : null}
//         {!isImageLoading ? (
//           <p className="text-[14px] max-lg:text-[14px] font-OpenSans font-semibold">
//             {postDescription}
//           </p>
//         ) : null}
//       </div>
//       <div className="w-full h-[40px] max-lg:h-[38px] bg-cdyan-500 mt-1.5 flex items-center justify-between relative">
//         {isImageLoading ? (
//           <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
//             <Skeleton className="w-full h-full bg-lightBlue" />
//           </div>
//         ) : null}
//         {!isImageLoading ? (
//           <>
//             <div className="w-[72%] max-lg:w-[72%] h-full border p-3 hover:border-blue-500 transition-all duration-200 rounded-md flex items-center justify-between cursor-pointer">
//               <span className="text-[14px] font-Poppins">Select Groups</span>
//               <MdKeyboardArrowDown className="text-[18px] hover:text-blue-500" />
//             </div>

//             <div className="w-[26%] h-full border bg-blue-600 text-white flex items-center justify-center rounded-md font-OpenSans font-semibold text-[15px] cursor-pointer hover:scale-[.96] transition-all duration-150">
//               Save Ad
//             </div>
//           </>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default ImageCard;

"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton";
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
  const [isEyeHover, setIsEyeHover] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageInView, setIsImageInView] = useState(false);

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the Image is in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="w-[368px] max-lg:w-[340px] h-fit bg-white rounded-md p-3 shadow-lg">
      <div className="w-full h-[54px] max-lg:h-[52px] flex items-center justify-between relative">
        {isImageLoading && (
          <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        )}
        {!isImageLoading ? (
          <>
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
          </>
        ) : null}
      </div>
      <div className="relative w-full min-h-[60px] h-auto mt-1">
        {isImageLoading && (
          <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        )}
        {!isImageLoading ? (
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
                    alt="Facebook Logo"
                    className="scale-105"
                  />
                </div>
                <div className="w-[26px] h-[26px] flex items-center justify-center rounded-full overflow-hidden">
                  <Image
                    src={InstagramLogo}
                    width={26}
                    height={26}
                    alt="Instagram Logo"
                    className="scale-105"
                  />
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div
        className="w-full h-[310px] max-lg:h-[298px] my-1.5 rounded-md overflow-hidden relative"
        ref={imageRef}
      >
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full" />
          </div>
        )}
        {isImageInView && (
          <Image
            src={postImage}
            alt="Post Image"
            width={368}
            height={310}
            className={`object-cover w-full h-full ${
              isImageLoading ? "opacity-0" : ""
            }`}
            onLoad={() => setIsImageLoading(false)}
          />
        )}
      </div>
      <div className="w-full min-h-[46px] h-auto relative">
        {isImageLoading && (
          <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        )}
        {!isImageLoading ? (
          <p className="text-[14px] max-lg:text-[14px] font-OpenSans font-semibold">
            {postDescription}
          </p>
        ) : null}
      </div>
      <div className="w-full h-[40px] max-lg:h-[38px] bg-cdyan-500 mt-1.5 flex items-center justify-between relative">
        {isImageLoading && (
          <div className="absolute top-0 left-0 inset-0 flex items-center justify-center z-10">
            <Skeleton className="w-full h-full bg-lightBlue" />
          </div>
        )}
        {!isImageLoading ? (
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

export default ImageCard;
