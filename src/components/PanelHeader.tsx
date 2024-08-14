import React from "react";
import { BsFileText } from "react-icons/bs";
import SearchComponent from "./SearchComponent";
import UserCard from "./UserCard";

const PanelHeader = () => {
  return (
    <header className="w-full min-h-[68px] h-auto bg-lightBlue border-slate-200 shadow flex items-center justify-start flex-row lg:px-4 text-lg z-50">
      <div className=" min-w-[33%] bg-redd-300 w-auto h-full flex items-center justify-start">
        <button className="w-auto  h-[42px] px-4 py-2 flex items-center justify-center text-mainBlue hover:bg-mainBlue border-2 border-slate-200 font-medium gap-1 rounded-md hover:text-white hover:scale-[.95] transition-all duration-150 max-md:w-full bg-white">
          <BsFileText />
          <span className="text-[18px]">Docs</span>
        </button>
      </div>
      <div className="w-auto min-w-[33%] flex items-center justify-center h-full px-4">
        <SearchComponent />
      </div>
      <div className="min-w-[33%] h-full flex items-center justify-end bg-sldate-500 bg-dred-500">
        <UserCard />
      </div>
    </header>
  );
};

export default PanelHeader;
