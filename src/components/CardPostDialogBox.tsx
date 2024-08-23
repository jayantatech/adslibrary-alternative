import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlinePageview } from "react-icons/md";
import { ImEmbed2 } from "react-icons/im";

import { LakmeLogo } from "../../public/images";
import { CiMobile4 } from "react-icons/ci";
import { IoIosDesktop } from "react-icons/io";
import { Skeleton } from "./ui/skeleton";

type CardPostDialogBoxProps = {
  children: React.ReactNode;
  displayFormat: string;
  displayData?: string | StaticImageData;
};

function CardPostDialogBox({
  children,
  displayFormat,
  displayData,
}: CardPostDialogBoxProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  });
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="m-desktop:min-w-[1024px] lg:min-w-[940px]  max-lg:min-w-[660px] lg:h-[560px] m-desktop:h-[686px] max-md:h-[610px] max-lg:h-[710px] max-md:min-w-[200px]  bg-white p-0 overflow-hidde ">
        <div className="w-full h-full flex flex-row gap-3 max-lg:flex-col max-lg:overflow-y-scroll max-lg:p-2 overflow-y-auto max-lg:scrollbar-thin max-lg:scrollbar-thumb-mainBlue max-lg:scrollbar-track-lightBlue rounded-md max-sm:gap-10">
          <div className="lg:w-[45%] max-lg:w-full h-full max-lg:h-auto flex flex-col gap-2">
            {isLoading ? (
              <div className="w-full h-full">
                <Skeleton className="lg:h-[540px] m-desktop:h-[440px] bg-lightBlue w-full max-md:w-full max-md:h-[80px] max-m-desktop: h-[424px]" />
                <Skeleton className="m-desktop:h-[148px] lg:hidden m-desktop:block mt-2 bg-lightBlue w-full max-md:w-full max-md:h-[340px]" />
                <Skeleton className="m-desktop:h-[68px] lg:hidden m-desktop:block mt-2 bg-lightBlue w-full max-md:w-full max-md:h-[80px]" />
              </div>
            ) : (
              <>
                <div className="w-full h-auto py-1 max-lg:p-2 lg:hidden ">
                  <div className="w-full min-h-[60px] h-auto items-center justify-between max-md:flex-col gap-2 flex ">
                    <div className="flex flex-col max-md:w-full ">
                      <span className="font-OpenSans text-[18px] font-bold">
                        Ad Details
                      </span>
                      <span className="font-OpenSans text-[15px]">
                        Id: 1245275293682139136
                      </span>
                    </div>
                    <div className="flex gap-3 max-md:w-full">
                      <button className="w-auto h-[34px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                        <IoShareSocial className="text-[20px] " />
                        <span className="text-[16px]">Share</span>
                      </button>
                      <button className="w-auto h-[34px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                        <ImEmbed2 className="text-[20px] " />
                        <span className="text-[16px]">Embed</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-[40px] max-lg:h-[38px]  flex items-center justify-between relative mt-2">
                    <div className="w-[72%] max-lg:w-[72%] h-full border bg-white p-3 hover:border-blue-500 transition-all duration-200 rounded-md flex items-center justify-between cursor-pointer">
                      <span className="text-[14px] font-Poppins">
                        Select Groups
                      </span>
                      <MdKeyboardArrowDown className="text-[18px] hover:text-blue-500" />
                    </div>

                    <div className="w-[26%] h-full border bg-blue-600 text-white flex items-center justify-center rounded-md font-OpenSans font-semibold text-[15px] cursor-pointer hover:scale-[.96] transition-all duration-150">
                      Save Ad
                    </div>
                  </div>
                </div>
                <div className="w-full h-[424px] max-lg:h-[528px] max-md:h-[424px] max-lg:p-2 max-lg:rounded-md rounded-md overflow-hidden bg-lightBlue">
                  {displayFormat === "image" ? (
                    <Image
                      src={displayData as StaticImageData}
                      alt=""
                      className="w-full h-full object-cover max-lg:rounded-md"
                    />
                  ) : (
                    <video
                      src={displayData as string}
                      controls
                      className="w-full h-full  z-0 bg-cover"
                    />
                  )}
                </div>
                <div className="w-full min-h-[220px]  max-lg:min-h-[240px] flex-1 bg-lightBlue relative p-3 roun ">
                  <div className="w-full min-h-[66px] h-auto flex gap-2 items-center justify-between">
                    <div className="w-[60px] h-[60px] rounded-md bg-black max-md:w-[68px] max-md:h-[68px] overflow-hidden">
                      <Image
                        src={LakmeLogo}
                        className="w-full h-full"
                        alt="Brand_Logo"
                      />
                    </div>
                    <div className="w-full h-full flex-1 items-center flex-row justify-between flex max-md:flex-col max-md:items-start">
                      <span className="font-OpenSans text-[22px] font-bold">
                        The North Face
                      </span>
                      <button className="w-auto h-[36px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                        <MdOutlinePageview className="text-[20px] " />
                        <span className="text-[18px]">View Brand</span>
                      </button>{" "}
                    </div>
                  </div>
                  <div className="w-full h-[110px] l-tablet:h-[120px] overflow-y-scroll scrollbar-thin scrollbar-thumb-mainBlue scrollbar-track-lightBlue pt-1">
                    <p className="text-[15px] font-OpenSans ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ipsa labore, quam voluptates id <br /> repellat reiciendis
                      porro numquam at voluptate error eius ipsum iure tempore,
                      commodi
                    </p>
                  </div>
                  <div className="w-full h-[48px] mt-1 flex items-center flex-row justify-between gap-2 absolute bottom-2 left-0 p-3 bg-lightBlue max-sm:flex-col">
                    <button className="w-1/2 h-[38px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                      <span className="text-[16px]">Download Photo</span>
                    </button>{" "}
                    <button className="w-1/2 h-[38px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                      <span className="text-[16px]">Download Ad Data</span>
                    </button>{" "}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="min-w-[52%] max-lg:w-full flex-1 h-full max-lg:h-auto max-h-[684px] max-md:min-h-[880px] min-h-[480px] lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-thumb-mainBlue lg:scrollbar-track-lightBlue">
            {isLoading ? (
              <div>
                <Skeleton className="lg:h-[164px] max-lg:h-[340px] bg-lightBlue w-full max-md:w-full max-md:h-[280px] mb-2" />
                <Skeleton className="lg:h-[204px] max-lg:h-[280px] bg-lightBlue w-full max-md:w-full max-md:h-[180px] " />
                <Skeleton className="lg:h-[120px] mt-2 max-lg:h-[360px] bg-lightBlue w-full max-md:w-full max-md:h-[130px] " />
                <Skeleton className="lg:h-[160px] mt-2 bg-lightBlue w-full max-md:w-full max-md:h-[330px]" />
              </div>
            ) : (
              <>
                <div className="w-full h-[20px] bg-white sticky top-0 left-0 max-lg:hidden z-40"></div>

                <div className="h-full w-full p-2">
                  <div className="w-full h-auto py-1 max-lg:hidden">
                    <div className="w-full h-[60px] flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-OpenSans text-[18px] font-bold">
                          Ad Details
                        </span>
                        <span className="font-OpenSans text-[15px]">
                          Id: 1245275293682139136
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <button className="w-auto h-[34px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                          <IoShareSocial className="text-[20px] " />
                          <span className="text-[16px]">Share</span>
                        </button>
                        <button className="w-auto h-[34px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                          <ImEmbed2 className="text-[20px] " />
                          <span className="text-[16px]">Embed</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-[40px] max-lg:h-[38px] bg-cdyan-500 flex items-center justify-between relative mt-2">
                      <div className="w-[72%] max-lg:w-[72%] h-full border bg-white p-3 hover:border-blue-500 transition-all duration-200 rounded-md flex items-center justify-between cursor-pointer">
                        <span className="text-[14px] font-Poppins">
                          Select Groups
                        </span>
                        <MdKeyboardArrowDown className="text-[18px] hover:text-blue-500" />
                      </div>

                      <div className="w-[26%] h-full border bg-blue-600 text-white flex items-center justify-center rounded-md font-OpenSans font-semibold text-[15px] cursor-pointer hover:scale-[.96] transition-all duration-150">
                        Save Ad
                      </div>
                    </div>
                  </div>
                  <div className="w-full min-h-[188px] h-auto max-md:min-h-[268px]  flex items-start justify-start flex-col">
                    <span className="font-OpenSans text-[18px] font-bold">
                      Metadata
                    </span>
                    <div className="w-full  h-[160px] max-md:min-h-[160px] rounded-md mt-2">
                      <div className="w-full min-h-full max-md:min-h-[240px] rounded-md p-2 grid grid-cols-3 row-span-2 gap-2 border-2 border-slate-200 max-md:grid-cols-2 max-md:grid-rows-3">
                        <div className="col-span-1 h-full w-auto flex items-center justify-center flex-col rounded-md border border-slate-200 hover:scale-[.98] transition-all duration-150  ">
                          <span className="font-OpenSans text-[14px] ">
                            Saved Time
                          </span>
                          <span className="font-OpenSans text-[16px] font-bold">
                            Nov 23, 2023
                          </span>
                        </div>
                        <div className="col-span-1 h-full w-auto  flex items-center justify-center flex-col rounded-md border border-slate-200 hover:scale-[.98] transition-all duration-150">
                          <span className="font-OpenSans text-[14px] ">
                            Likes{" "}
                          </span>
                          <span className="font-OpenSans text-[16px] font-bold">
                            1,675
                          </span>
                        </div>
                        <div className="col-span-1 h-full w-auto  flex items-center justify-center flex-col rounded-md border border-slate-200 hover:scale-[.98] transition-all duration-150">
                          <span className="font-OpenSans text-[14px] ">
                            CTA{" "}
                          </span>
                          <span className="font-OpenSans text-[16px] font-bold">
                            Comprar agora
                          </span>
                        </div>
                        <div className="col-span-1 h-full w-auto  flex items-center justify-center flex-col rounded-md border border-slate-200 hover:scale-[.98] transition-all duration-150">
                          <span className="font-OpenSans text-[14px] ">
                            Display Format
                          </span>
                          <span className="font-OpenSans text-[16px] font-bold">
                            Image{" "}
                          </span>
                        </div>
                        <div className="col-span-1 h-full w-auto  flex items-center justify-center flex-col rounded-md border border-slate-200 hover:scale-[.98] transition-all duration-150">
                          <span className="font-OpenSans text-[14px] ">
                            Categories{" "}
                          </span>
                          <span className="font-OpenSans text-[16px] font-bold">
                            Buti product{" "}
                          </span>
                        </div>
                        <div className="col-span-1 h-full w-auto  flex items-center justify-center flex-col rounded-md border border-slate-200 hover:scale-[.98] transition-all duration-150">
                          <span className="font-OpenSans text-[14px] ">
                            Status{" "}
                          </span>
                          <span className="font-OpenSans text-[16px] font-bold">
                            Active{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full h-auto py-2 mt-4 flex items-start justify-start flex-col">
                    <span className="font-OpenSans text-[18px] font-bold">
                      Metadata
                    </span>
                    <a className="cursor-pointer text-mainBlue text-[15px]">
                      https://www.facebook.com/ads/library/?id=1760280567726822
                    </a>
                    <div className="w-full h-auto flex items-center justify-center gap-2 mt-2   max-md:flex-col-reverse max-md:items-center">
                      <div className="w-[160px] h-[98px] bg-black rounded-md"></div>
                      <div className="w-auto h-auto flex-1">
                        <div className="w-auto h-auto">
                          <span className="font-OpenSans text-[18px] font-bold">
                            Metadata
                          </span>{" "}
                          <a className="cursor-pointer text-mainBlue text-[15px]">
                            https://www.facebook.com/ads/library/?id=1760280567726822
                          </a>
                        </div>
                        <div className="flex gap-3 mt-1">
                          <button className="w-auto h-[34px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                            <CiMobile4 className="text-[20px] " />
                            <span className="text-[16px]">View Mobile</span>
                          </button>
                          <button className="w-auto h-[34px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
                            <IoIosDesktop className="text-[20px] " />
                            <span className="text-[16px]">View Desktop</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-auto mt-2 flex items-start justify-start flex-col">
                    <span className="font-OpenSans text-[18px] font-bold">
                      Tags
                    </span>
                    <div className="w-full h-[40px] max-lg:h-[38px] bg-cdyan-500 flex items-center justify-between relative mt-1">
                      <div className="w-[72%] max-lg:w-[72%] h-full focus:right-0 border bg-white p-2 hover:border-blue-500 transition-all duration-200 rounded flex items-center justify-between cursor-pointer">
                        <input
                          type="text"
                          alt="TextFild"
                          placeholder="Please Enter a Tag"
                          className="text-[14px] w-full outline-none focus:border-none h-full font-OpenSans font-semibold"
                        />
                      </div>

                      <div className="w-[26%] h-full border bg-blue-600 text-white flex items-center justify-center rounded-md font-OpenSans font-semibold text-[15px] cursor-pointer hover:scale-[.96] transition-all duration-150">
                        Save Tag
                      </div>
                    </div>
                    <div className="w-full h-auto mt-2 flex items-start justify-start flex-col pb-3">
                      <span className="font-OpenSans text-[18px] font-bold">
                        Comments
                      </span>
                      <div className="w-full rounded-md h-[206px] mt-2 bg-red-200 flex items-start justify-start flex-col">
                        <textarea
                          className="w-full h-full p-2 border rounded-md font-semibold resize-none text-[15px] font-OpenSans"
                          placeholder="Enter Your Comments"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CardPostDialogBox;
