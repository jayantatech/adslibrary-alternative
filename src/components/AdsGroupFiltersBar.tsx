"use client";
import React, { useState, useEffect } from "react";
import MultiSelectSearch from "./MultiSelectSearch";
import SingleSelect from "./SingleSelect";
import { CustomDatePicker } from "./CustomCalendar";
import { DateRange } from "react-day-picker";
import { Skeleton } from "@/components/ui/skeleton";

const AdsGroupFiltersBar = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const [searchBoxData, setSearchBoxData] = useState<string>();
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(undefined);

  const [clearRequest, setClearRequest] = useState<boolean>(false);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);
  const brandData: { value: string; label: string }[] = [
    { value: "Google", label: "Google" },
    { value: "Nike", label: "Nike" },
    { value: "Toyota", label: "Toyota" },
  ];
  const tagData: { value: string; label: string }[] = [
    { value: "Google", label: "Google" },
    { value: "game", label: "Game" },
  ];
  const categoryOptions: { value: string; label: string }[] = [
    { value: "apparel_accessories", label: "Apparel & Accessories" },
    { value: "appliances", label: "Appliances" },
    { value: "apps", label: "Apps" },
    { value: "baby_kids_maternity", label: "Baby, Kids & Maternity" },
    { value: "beauty_personal_care", label: "Beauty & Personal Care" },
    { value: "business_services", label: "Business Services" },
    { value: "e_commerce", label: "E-Commerce" },
    { value: "education", label: "Education" },
    { value: "financial_services", label: "Financial Services" },
    { value: "food_beverage", label: "Food & Beverage" },
    { value: "game", label: "Game" },
    { value: "health", label: "Health" },
    { value: "home_improvement", label: "Home Improvement" },
    { value: "household_products", label: "Household Products" },
    { value: "life_services", label: "Life Services" },
    { value: "news_entertainment", label: "News & Entertainment" },
    { value: "pets", label: "Pets" },
    { value: "sports_outdoor", label: "Sports & Outdoor" },
    { value: "tech_electronics", label: "Tech & Electronics" },
    { value: "travel", label: "Travel" },
    { value: "vehicle_transportation", label: "Vehicle & Transportation" },
    { value: "social_organization", label: "Social Organization" },
    { value: "other", label: "Other" },
  ];

  const formatData: { value: string; label: string }[] = [
    { value: "Video", label: "Video" },
    { value: "Image", label: "Image" },
    { value: "Carousel", label: "Carousel" },
  ];

  const platformData = [
    { value: "fb", label: "FB" },
    { value: "tiktok", label: "Tiktok" },
    { value: "instagram", label: "Instagram" },
  ];

  const options1 = [
    { value: "still_running", label: "Still Running" },
    { value: "not_running", label: "Not Running" },
  ];

  const handleSearch = () => {
    console.log(
      searchBoxData,
      selectedCategories,
      selectedFormats,
      selectedPlatforms,
      selectedStatus,
      selectedDateRange
    );
  };

  return (
    <div className="w-full h-auto flex flex-col gap-2 bg-white px-4 py-6 rounded">
      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4 max-md:w-full max-md:h-16 ultra-desktop:w-2/4" />
          <Skeleton className="h-11 w-full max-lg:h-44 max-md:h-80 ultra-desktop:h-32 ultra-desktop:w-3/4 " />
          <Skeleton className="h-10 w-1/2 max-md:w-full  ultra-desktop:w-1/3" />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-start min-h-[52px] h-auto  max-md:h-[88px] py-2 w-full gap-2 max-md:flex-col max-md:items-start  max-xl-desktop:w-full">
            <div className="text-[18px] font-OpenSans font-semibold w-auto">
              Ai Search:
            </div>
            <div className="w-[540px] max-lg:w-full  max-xl-desktop:w-1/2  max-md:w-full h-full max-md:px-0 max-lg:pl-2">
              <input
                type="text"
                onChange={(event) => setSearchBoxData(event.target.value)}
                placeholder="Enter Your Keyword you want to search"
                className="w-full h-full px-2 pl-3 py-2 rounded-md text-[16px] border-gray-400 shadow-md focus:outline-none border focus:border-slate-400
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
          </div>
          <div className="flex items-start justify-start md:gap-8 max-md:gap-3 max-md:flex-col max-md:items-start ultra-desktop:flex-col ultra-desktop:gap-2">
            <div>
              <span className="text-[18px] font-OpenSans font-semibold">
                Filters:
              </span>
            </div>
            <div className="flex flex-col xl-desktop:flex-col ultra-desktop:flex-row w-full h-auto gap-3 max-lg:gap-4 items-start max-md:flex-col max-md:items-start max-xl-laptop:flex-col max-xl:flex-col max-ultra-desktop:flex-col max-xl-desktop:flex-col xl:items-start max-lg:items-start justify-start">
              <div className=" flex items-start justify-start gap-3 w-auto max-lg:w-full max-md:flex-col max-md:items-start max-lg:flex-row max-ultra-desktop:w-full max-lg:gap-4">
                <MultiSelectSearch
                  options={brandData}
                  onSelect={setSelectedBrand}
                  placeholder="Brand"
                />
                <MultiSelectSearch
                  options={tagData}
                  placeholder="Tag"
                  onSelect={setSelectedTag}
                />
              </div>
              <div className=" flex items-start justify-start gap-3 w-auto max-lg:w-full max-md:flex-col max-md:items-start max-lg:flex-row max-ultra-desktop:w-full max-lg:gap-4">
                <MultiSelectSearch
                  options={categoryOptions}
                  onSelect={setSelectedCategories}
                  placeholder="Category"
                />
                <MultiSelectSearch
                  options={formatData}
                  placeholder="Format"
                  onSelect={setSelectedFormats}
                />
              </div>
              <div className="  flex items-start justify-start gap-3 w-auto max-lg:w-full max-md:flex-col max-md:items-start max-lg:flex-row max-ultra-desktop:w-full ultra-desktop:hidden max-lg:gap-4">
                <MultiSelectSearch
                  options={platformData}
                  placeholder="Platform"
                  onSelect={setSelectedPlatforms}
                />
                <SingleSelect
                  label="Only FB Ad Library ads"
                  placeholder="Select a status"
                  options={options1}
                  onSelect={setSelectedStatus}
                  topLabel="Ad Status"
                />
              </div>
              <div className="w-auto h-auto max-lg:w-full  max-ultra-desktop:w-1/2 ultra-desktop:hidden">
                <CustomDatePicker
                  onSelect={setSelectedDateRange}
                  topLabel="Starting and End Date"
                />
              </div>
            </div>
            <div className=" gap-3 w-full h-auto hidden ultra-desktop:flex">
              <div className="  flex items-start justify-start gap-3 w-auto max-lg:w-full max-md:flex-col max-md:items-start max-lg:flex-row max-ultra-desktop:w-full max-lg:gap-4 ">
                <MultiSelectSearch
                  options={platformData}
                  placeholder="Platform"
                  onSelect={setSelectedPlatforms}
                />
                <SingleSelect
                  label="Only FB Ad Library ads"
                  placeholder="Select a status"
                  options={options1}
                  onSelect={setSelectedStatus}
                  topLabel="Ad Status"
                />{" "}
              </div>
              <div className="w-auto h-auto max-lg:w-full max-ultra-desktop:w-full ">
                <CustomDatePicker
                  onSelect={setSelectedDateRange}
                  topLabel="Starting and End Date"
                />
              </div>
            </div>
          </div>

          <div className="flex w-auto h-[44px] gap-3 py-3 max-md:w-full">
            <button
              onClick={handleSearch}
              className="w-[188px] max-md:w-1/2 h-[40px] shadow bg-mainBlue text-white text-[18px] font-OpenSans font-semibold hover:scale-[.97] transition-all duration-150 rounded"
            >
              Search
            </button>
            <button
              onClick={handleSearch}
              className="w-[188px] max-md:w-1/2 h-[40px] shadow border-mainBlue border bg-lightBlue font-OpenSans text-black text-[18px] font-semibold hover:scale-[.97] transition-all duration-150 rounded"
            >
              Clear Filter
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdsGroupFiltersBar;
