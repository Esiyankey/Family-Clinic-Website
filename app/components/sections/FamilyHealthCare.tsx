"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/app/components/ui/SectionHeader";
import { FaBaby, FaUserMd, FaFemale } from "react-icons/fa";

type ServiceCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const familyServices: ServiceCard[] = [
  {
    icon: <FaBaby className="h-7 w-7" />,
    title: "Pediatric care",
    description: "Well-baby visits, childhood vaccinations and sick visits.",
  },
  {
    icon: <FaUserMd className="h-7 w-7" />,
    title: "Adult primary care",
    description:
      "Annual physicals, preventive screenings and chronic disease management.",
  },
  {
    icon: <FaFemale className="h-7 w-7" />,
    title: "Women’s health",
    description:
      "Well-woman exams, family planning and ongoing reproductive health support.",
  },
];

export function FamilyHealthCare() {
  return (
    <section id="services" className="bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Family healthcare under one roof."
          subtitle="Our providers build long-term relationships with your family, making it easier to coordinate care, spot changes early and support you through every season of life."
          imageSrc="/images/section-img.png"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {familyServices.map((service, idx) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1a76d1]/10 text-[#1a76d1]">
                {service.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View all services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
