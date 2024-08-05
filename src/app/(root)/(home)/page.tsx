import Header from "@/components/Header";
import HeroSection from "@/pages/home/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="w-full h-[980px]"></div>
    </div>
  );
};

export default Home;
