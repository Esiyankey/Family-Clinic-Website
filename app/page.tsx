'use client'
import SplashScreen from "./components/features/SplashScreen";
import { ContactSection } from "./components/sections/ContactSection";
import { DataSection } from "./components/sections/DataSection";
import { FamilyHealthCare } from "./components/sections/FamilyHealthCare";
import HeroSection from "./components/sections/HeroSection";
import { InsuranceAndBilling } from "./components/sections/InsuranceAndBilling";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <SplashScreen />
      <HeroSection />
      <FamilyHealthCare/>
      <DataSection/>
      <WhyChooseUs/>
      <ContactSection/>
      <InsuranceAndBilling/>
    </div>
  );
}
