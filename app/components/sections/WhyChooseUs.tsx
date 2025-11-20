import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import SectionHeader from "@/app/components/features/SectionHeader";
export const WhyChooseUs = () => {
  const features = [
    "Experienced, family-focused healthcare team",
    "Easy online booking & telemedicine support",
    "Warm, patient-friendly environment",
    "Accepts most major insurance plans",
    "Trusted by families across Maryland",
  ];

  return (
    <section className="mt-28 mx-5">
      <SectionHeader
        title="Why Choose Family Clinic?"
        subtitle={`Our mission is to deliver holistic healthcare that supports families
          through every stage of life. We partner with local healthcare
          providers, employers, and insurance companies to create a seamless
          care experience for our patients.`}
        imageSrc="/images/section-img.png"
      />

      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold  mb-4">
              Why Our Patients Trust Us
            </h2>
            <div className="w-16 h-1 bg-[#1a76d1]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="shrink-0 pt-1">
                  <svg
                    className="w-5 h-5 text-[#1a76d1]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <p className="text-lg leading-relaxed">{feature}</p>
              </div>
            ))}
            <Button className="p-5 w-44 bg-[#1a76d1] rounded-xs">
              Learn More
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
