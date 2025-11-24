"use client";

import SplashScreen from "./components/features/SplashScreen";
import HeroSection from "./components/sections/HeroSection";
import { DataSection } from "./components/sections/DataSection";
import { FamilyHealthCare } from "./components/sections/FamilyHealthCare";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { InsuranceAndBilling } from "./components/sections/InsuranceAndBilling";
import { ContactSection } from "./components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Shows only briefly / first visit (see updated SplashScreen) */}
      <SplashScreen />

      <main className="flex flex-col">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Stats / social proof */}
        <DataSection />

        {/* 3. Core services */}
        <FamilyHealthCare />

        {/* 4. Why choose us */}
        <WhyChooseUs />

        {/* 5. Insurance & billing overview */}
        <InsuranceAndBilling />

        {/* 6. Emergency / contact CTA */}
        <ContactSection />
      </main>
    </div>
  );
}
