import Header from "@/components/Header";
import BrandsLogoSection from "@/pages/home/BrandsLogoSection";
import FeatureOneSection from "@/pages/home/FeatureOneSection";
import HeroSection from "@/pages/home/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BrandsLogoSection />
      <FeatureOneSection />
      <div className="w-full h-[980px]"></div>
    </div>
  );
};

export default Home;
