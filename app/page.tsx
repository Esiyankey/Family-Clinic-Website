'use client'
import SplashScreen from "./components/features/SplashScreen";
import { FamilyHealthCare } from "./components/sections/FamilyHealthCare";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div>
      <SplashScreen />
      <HeroSection />
      <FamilyHealthCare/>
    </div>
  );
}
