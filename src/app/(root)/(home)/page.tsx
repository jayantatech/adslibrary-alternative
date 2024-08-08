import Header from "@/components/Header";
import BrandsLogoSection from "@/pages/home/BrandsLogoSection";
import FeatureFourSection from "@/pages/home/FeatureFourSection";
import FeatureOneSection from "@/pages/home/FeatureOneSection";
import FeatureThreeSection from "@/pages/home/FeatureThreeSection";
import FeatureTwoSection from "@/pages/home/FeatureTwoSection";
import FooterSection from "@/pages/home/FooterSection";
import HeroSection from "@/pages/home/HeroSection";
import MoreFeaturesSection from "@/pages/home/MoreFeaturesSection";
import TestimonialsSection from "@/pages/home/TestimonialsSection";
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
      {/* <FeatureFourSection /> */}
      <MoreFeaturesSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Home;
