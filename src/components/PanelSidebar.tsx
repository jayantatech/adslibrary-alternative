import Image from "next/image";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { RiArrowDownSFill } from "react-icons/ri";
import { TbPhotoSearch } from "react-icons/tb";
import { Logo } from "../../public/images";

const PanelSidebar = () => {
  return (
    <aside className="w-60 h-screen bg-gray-800 text-white flex flex-col justify-between py-4 px-4 pb-6 fixed top-0 left-0">
      <div>
        <div>
          <Image src={Logo} alt="logo" className="h-[34px]" />
        </div>
        <div className="pt-10">
          <span className="text-[16px] font-OpenSans text-gray-400">Main</span>
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center justify-start gap-3 py-2 bg-mainBlue px-2 rounded-md cursor-pointer">
              <FaHome className="text-[18px]" />
              <span className="text-[16px]">Libary</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-2  hover:bg-mainBlue px-2 rounded-md cursor-pointer">
              <TbPhotoSearch className="text-[18px]" />
              <span className="text-[16px]">Explore</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full min-h-[110px] bg-white rounded-md p-2 flex flex-col gap-2">
          <div className="w-full h-[50px] bg-tedal-300 flex gap-2 items-center justify-start">
            <div className="w-[44px] h-[44px] bg-mainBlue rounded-md flex items-center justify-center">
              <FaUser className="text-[24px]" />
            </div>
            <div className="w-auto flex flex-row items-center justify-center gap-2">
              {" "}
              <div>
                <span className="text-[16px] text-gray-600">Jay Biswas</span>
                <p className="text-[14px] text-gray-600">Free Account</p>
              </div>
              <RiArrowDownSFill className="text-[24px] text-black cursor-pointer" />
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
