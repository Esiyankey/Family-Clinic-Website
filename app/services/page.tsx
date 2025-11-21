"use client";
import HeroHeader from "../components/features/HeroHeader";

import ServicesGrid from "../components/features/ServicesGrid";
import { servicesData as services } from "../../lib/data/servicesData";
import SectionHeader from "../components/features/SectionHeader";
const page = () => {
  return (
    <main>
      <HeroHeader
        title="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "services" }]}
      />

      <div className="mt-24">
        <SectionHeader
          title="We Offer Different Services To Improve Your Health"
          subtitle="Our medical facility is dedicated to offering a wide range of
            healthcare services tailored to meet your needs. From general
            treatments to specialized procedures, our expert team is here to
            ensure you receive the best care possible."
          imageSrc="/images/section-img.png"
        />

        <div className="max-w-7xl mx-auto px-4 py-16">
          <ServicesGrid services={services} />
        </div>
      </div>
    </main>
  );
};

export default page;
