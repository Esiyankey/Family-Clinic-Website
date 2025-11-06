'use client'
import SplashScreen from "./components/features/SplashScreen";
import { DataSection } from "./components/sections/DataSection";
import { FamilyHealthCare } from "./components/sections/FamilyHealthCare";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div>
      <SplashScreen />
      <HeroSection />
      <FamilyHealthCare/>
      <DataSection/>
    </div>
  );
}
