import Header from "@/components/Header";
import BrandsLogoSection from "@/pages/home/BrandsLogoSection";
import HeroSection from "@/pages/home/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BrandsLogoSection />
      <div className="w-full h-[980px]"></div>
    </div>
  );
};

export default Home;
