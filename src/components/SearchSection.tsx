import React from "react";
import FiltersBar from "./FiltersBar";
import { CustomDatePicker } from "./CustomCalendar";

const SearchSection = () => {
  return (
    <div className="w-full  h-[210px] bg-rded-200 rounded-md">
      <div className="flex items-center justify-start h-[52px] py-2 w-full bg-sldate-400 gap-2 ">
        <div className="w-full h-full bg-redd-300">
          <FiltersBar />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
