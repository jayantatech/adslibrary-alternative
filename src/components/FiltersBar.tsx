"use client";
import React, { useState } from "react";
import MultiSelectSearch from "./MultiSelectSearch";
import SingleSelect from "./SingleSelect";
import { CustomDatePicker } from "./CustomCalendar";
import { DateRange } from "react-day-picker";

const FiltersBar = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(
    undefined
  );

  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(undefined);
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

  return (
    <div className="flex items-center justify-start md:gap-8 max-md:gap-3 max-md:flex-col max-md:items-start">
      <div>
        <span className="text-[18px] font-OpenSans font-semibold">
          {" "}
          Filters:
        </span>
      </div>
      <div className="flex w-full h-auto max-lg:flex-col items-center max-lg:items-start justify-start gap-3">
        <div className=" flex items-center justify-start gap-3 w-auto max-md:flex-col max-md:items-start">
          <MultiSelectSearch options={categoryOptions} placeholder="Category" />
          <MultiSelectSearch options={formatData} placeholder="Format" />
        </div>
        <div className=" max-md:min-h-full flex items-center justify-start gap-3 w-auto max-md:flex-col max-md:items-start">
          <MultiSelectSearch options={platformData} placeholder="Platform" />
          <SingleSelect
            label="Only FB Ad Library ads"
            placeholder="Select a fruit"
            options={options1}
          />{" "}
        </div>
        <CustomDatePicker />
      </div>
    </div>
  );
};

export default FiltersBar;
