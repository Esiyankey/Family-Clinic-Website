"use client";

import HeroHeader from "../components/features/HeroHeader";
import ServicesGrid from "../components/features/ServicesGrid";
import { servicesData as services } from "../../lib/data/servicesData";
import SectionHeader from "../components/features/SectionHeader";

export default function ServicesPage() {
  return (
    <main>
      <HeroHeader
        title="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="We offer comprehensive services to improve your health."
            subtitle="From preventive checkups and chronic care management to on-site diagnostics and telemedicine, our team provides coordinated care for every stage of life."
            imageSrc="/images/section-img.png"
          />

          <div className="mt-10">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>
    </main>
  );
}
