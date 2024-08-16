"use client";
import React, { useState } from "react";
import { BsFileText } from "react-icons/bs";
import SearchComponent from "./SearchComponent";
import UserCard from "./UserCard";
import Image from "next/image";
import { Logo, PosterImage } from "../../public/images";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

const PanelHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full min-h-[68px] h-auto shadow bg-lightBlue border-slate-200 xl:px-2  flex items-center justify-start flex-row  text-lg z-50 sticky top-0 left-0 py-2 max-lg:justify-between ">
      <div className=" w-full h-auto flex items-center justify-between px-2 lg:px-4 xl:hidden ">
        <div className="w-[220px] h-full bgd-cyan-300 flex items-center justify-start">
          <Image src={Logo} alt="logo" className="w-auto h-[34px]" />
        </div>
        <div className="xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoMdClose className="text-[34px] text-mainBlue cursor-pointer" />
          ) : (
            <IoIosMenu className="text-[34px] text-mainBlue cursor-pointer" />
          )}
        </div>
      </div>
      <div className=" w-[33%] bg-redd-300   h-full flex items-center justify-start max-xl:hidden">
        <button className="w-auto  h-[42px] px-4 py-2 flex items-center justify-center text-mainBlue hover:bg-mainBlue border-2 border-slate-200 font-medium gap-1 rounded-md hover:text-white hover:scale-[.95] transition-all duration-150 max-md:w-full bg-white ">
          <BsFileText />
          <span className="text-[18px]">Docs</span>
        </button>
      </div>
      <div className="w-[33%] min-w-[410px] flex items-center justify-center h-full px-4 max-xl:hidden">
        <SearchComponent />
      </div>
      <div className="w-[33%] h-full flex items-center justify-end bg-sldate-500 max-xl:hidden">
        <UserCard />
      </div>
      <div
        className={`w-full h-screen max-lg:h-full max-md:h-full bg-lightBlue fixed top-[76px] py-2 xl:hidden transition-all duration-200 z-50 px-2 ${
          menuOpen ? "-translate-y-3" : "-translate-y-[140%]"
        }`}
      >
        <div className="w-full max-md:h-auto h-auto px-2">
          <div className="lg:w-full max-md:h-[64px] px-2 py-2 h-[50px] border-2 border-slate-200 rounded-md bg-white flex gap-2 items-center justify-start  max-xl-laptop:flex">
            <div className="w-[42px] h-[42px] text-white bg-mainBlue rounded-md flex items-center justify-center">
              <FaUser className="text-[22px]" />
            </div>
            <div className="w-auto flex-1 h-auto bg-sdlate-100 flex flex-row items-center justify-center gap-2">
              {" "}
              <div className="w-full h-auto box-border ">
                {" "}
                <span className="text-[16px] text-gray-600 block translate-y-1">
                  Jay Biswas
                </span>
                <span className="text-[14px] text-gray-600 block -translate-y-1">
                  Free Account
                </span>
              </div>
            </div>
          </div>{" "}
          <nav className="w-full bgd-fuchsia-500 min-h-[170px] h-auto flex items-start px-1 justify-start">
            <ul className="flex gap-2 font-OpenSans text-[16px] flex-col w-full h-auto">
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Library
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Discovery
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Pricing Plan
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                My Folders
                <MdOutlineKeyboardArrowDown className="text-[20px]" />
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Account & Subscription
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Payment & Invoice{" "}
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                My Team{" "}
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                My Affiliation{" "}
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Tutorial
              </li>
            </ul>
          </nav>
          <div className="w-full max-lg:h-[68px] max-md:h-[110px] flex flex-row gap-6 max-md:gap-3 items-center justify-center max-md:flex-col max-md:w-full">
            <div className="w-full max-md:w-full h-auto bgd-red-500 flex items-center justify-center gap-2">
              <button className="w-full lg:mt-2 h-[40px] bg-mainBlue text-white rounded-[4px] text-[15px] font-semibold font-OpenSans hover:scale-[.98] transition-all duration-200 hover:bg-blue-500 shadow flex items-center justify-center gap-2">
                <TbLogout2 className="text-[22px]" />
                <span className="text-[18px]">Logout </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PanelHeader;
