"use client";

import SectionHeader from "@/app/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { GoCheck } from "react-icons/go";

const reasons = [
  "Experienced, family-focused healthcare team",
  "Easy online booking & telemedicine support",
  "Warm, patient-friendly environment",
  "Accepts most major insurance plans",
  "Coordinated care with local specialists",
  "Long-term continuity for chronic conditions",
];

export function WhyChooseUs() {
  const mid = Math.ceil(reasons.length / 2);
  const leftReasons = reasons.slice(0, mid);
  const rightReasons = reasons.slice(mid);

  return (
    <section
      id="why-us"
      className="bg-slate-50 py-14 md:py-16 lg:py-20 border-y border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Why choose Family Clinic?"
          subtitle="Our mission is to deliver holistic healthcare that supports families through every stage of life. We partner with local healthcare providers, employers and insurance companies to create a seamless, coordinated care experience for our patients."
          imageSrc="/images/section-img.png"
        />

        {/* TWO-COLUMN GRID OF REASONS */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            {leftReasons.map((reason) => (
              <div
                key={reason}
                data-aos="fade-up"
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#1a76d1]/10 text-[#1a76d1]">
                  <GoCheck className="h-4 w-4" />
                </div>
                <p className="text-base md:text-lg text-slate-700">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {rightReasons.map((reason) => (
              <div
                key={reason}
                data-aos="fade-up"
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#1a76d1]/10 text-[#1a76d1]">
                  <GoCheck className="h-4 w-4" />
                </div>
                <p className="text-base md:text-lg text-slate-700">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <a href="tel:+233000000000">Talk to our care team</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
