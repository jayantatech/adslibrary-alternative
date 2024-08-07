import Header from "@/components/Header";
import BrandsLogoSection from "@/pages/home/BrandsLogoSection";
import FeatureFourSection from "@/pages/home/FeatureFourSection";
import FeatureOneSection from "@/pages/home/FeatureOneSection";
import FeatureThreeSection from "@/pages/home/FeatureThreeSection";
import FeatureTwoSection from "@/pages/home/FeatureTwoSection";
import HeroSection from "@/pages/home/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BrandsLogoSection />
      <FeatureOneSection />
      <FeatureTwoSection />
      <FeatureThreeSection />
      <FeatureFourSection />
      <div className="w-full h-[980px]"></div>
    </div>
  );
};

export default Home;
