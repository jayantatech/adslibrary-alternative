import React from "react";
import FiltersBar from "./FiltersBar";
import { CustomDatePicker } from "./CustomCalendar";
// import MultiSelectSearch from "./MultiSelectSearch";

const SearchSection = () => {
  return (
    <div className="w-full h-[210px] bg-rded-200 rounded-md">
      <div className="flex items-center justify-start min-h-[52px] h-auto  max-md:h-[88px] py-2 w-full bg-sldate-400 gap-2 max-md:flex-col max-md:items-start">
        <span className="text-[18px] font-OpenSans font-semibold">
          {" "}
          Ai Search:
        </span>
        <div className="w-[540px] max-md:w-full h-full ">
          <input
            type="text"
            placeholder="Enter Your Keyword you want to search"
            className="w-full h-full px-2 pl-3 py-2 rounded-md text-[16px] border-slate-200 shadow-md focus:outline-none border focus:border-mainBlue
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
      </div>
      <div className="flex items-center justify-start h-[52px] py-2 w-full bg-sldate-400 gap-2 ">
        <div className="w-full h-full bg-redd-300">
          <FiltersBar />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
