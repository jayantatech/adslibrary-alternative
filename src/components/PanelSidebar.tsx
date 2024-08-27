"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { TbPhotoSearch } from "react-icons/tb";
import { Logo } from "../../public/images";
import FolderTreeTwo from "./FolderTreeTwo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PanelSidebar = () => {
  const pathName = usePathname();

  const currentPath = pathName?.split("/")[2];
  const calculateTimeLeft = () => {
    const endDate = new Date("2024-08-29T00:00:00");
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="w-60 h-screen bg-gray-800 text-white flex flex-col justify-between py-4 px-4 pb-6 fixed top-0 left-0">
      <div>
        <div>
          <Image src={Logo} alt="logo" className="h-[34px]" />
        </div>
        <div className="pt-10">
          <span className="text-[16px] font-OpenSans text-gray-400">Main</span>
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href={"/panel/myAds"}
              className={`flex items-center justify-start gap-3 py-2 hover:bg-mainBlue px-2 rounded-md cursor-pointer ${
                currentPath === "myAds" || currentPath === "myBrands"
                  ? "bg-mainBlue"
                  : ""
              }`}
            >
              <FaHome className="text-[18px]" />
              <span className="text-[16px]">Library</span>
            </Link>
            <Link
              href={"/panel/exploreAds"}
              className={`flex items-center justify-start gap-3 py-2  hover:bg-mainBlue px-2 rounded-md cursor-pointer ${
                currentPath === "exploreAds" || currentPath === "exploreBrands"
                  ? "bg-mainBlue"
                  : ""
              }`}
            >
              <TbPhotoSearch className="text-[18px]" />
              <span className="text-[16px]">Explore</span>
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <FolderTreeTwo />
        </div>
      </div>
      {/* side bar folder code */}

      <div>
        <div className="w-full min-h-[110px] bg-white rounded-md p-2 flex flex-col gap-2">
          <div className="text-center text-gray-800 bg-">
            <p className="text-[15px] font-OpenSans font-bold translate-y-1">
              Free Trial Ends In:
            </p>
            <div className="text-[15px] font-semibold font-OpenSans flex items-center justify-center flex-row gap-1 p-1">
              <span>
                {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:
                {timeLeft.seconds}
              </span>
            </div>
          </div>
          <button className="w-full h-[40px] hover:bg-mainBlue border-2 border-mainBlue text-mainBlue hover:text-white cursor-pointer hover:scale-[.98] transition-all duration-150 rounded-md flex items-center justify-center gap-1">
            <GiTrophy className="text-[20px]" />
            <p className="text-[14px] font-OpenSans font-bold">Upgrade Now</p>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default PanelSidebar;
