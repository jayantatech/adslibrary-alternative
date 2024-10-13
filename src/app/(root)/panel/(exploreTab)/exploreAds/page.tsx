"use client";
import FiltersBar from "@/components/FiltersBar";
import { RiAddBoxFill } from "react-icons/ri";
import { MixedPosts } from "../../../../../../public/contents";
import CardsComponent from "@/components/CardsComponent";
import TopBarTabs from "@/components/TopBarTabs";
import { useEffect } from "react";
import getJWTToken from "@/lib/getTokenInfo";
import { useUserData } from "@/lib/hooks/useUserData";

const ExploreAds = () => {
  // useEffect(() => {
  //   async function fetchUserData() {
  //     try {
  //       const response = await fetch("/api/user-data", { method: "POST" });
  //       const data = await response.json();

  //       if (!response.ok) {
  //         throw new Error(data.error || "Failed to fetch user data");
  //       }

  //       console.log(data.data);
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   }

  //   fetchUserData();
  // }, []);
  // console.log("page token", token);

  const { userData, loading, error } = useUserData();

  return (
    <div className="w-full h-auto max-lg:py-3 py-1">
      <div className="w-full min-h-[68px] h-auto max-md:gap-3  bg-white rounded-md flex items-center justify-between px-3 py-2  max-md:flex-col ">
        <div className="flex items-center justify-start gap-4 max-md:w-full h-auto ">
          <TopBarTabs
            firstTabLabel="Community Ads"
            firstTabLink="/panel/exploreAds"
            firstTabMatchUrl="exploreAds"
            secondTabLabel="Brands"
            secondTabLink="/panel/exploreBrands"
            secondTabMatchUrl="exploreBrands"
          />
        </div>
        <div className=" w-auto max-md:w-full h-full flex items-center justify-center">
          <button className="w-auto h-[38px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
            <RiAddBoxFill className="text-[22px] " />
            <span className="text-[18px]">Add New</span>
          </button>
        </div>
      </div>
      <div className="w-full py-4 ">
        <FiltersBar />
      </div>
      <div className=" columns-2 xl-desktop:columns-3 ultra-desktop:columns-4 4k-desktop:columns-6 5k-desktop:columns-7 max-lg:columns-2 max-md:columns-1 py-3 gap-3 lg:gap-6 max-lg:gap-4 w-full  h-auto overflow-hidden ">
        {MixedPosts.map((card, index) => (
          <CardsComponent key={index} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default ExploreAds;
