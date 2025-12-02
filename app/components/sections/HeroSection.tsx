"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";

const cards = [
  {
    title: "Family Medicine",
    description: "Ongoing care for children, adults and seniors.",
  },
  {
    title: "Same-Day Visits",
    description: "Reserved slots for non-emergency concerns.",
  },
  {
    title: "Chronic Care",
    description: "Support for diabetes, hypertension and more.",
  },
  {
    title: "Telehealth",
    description: "Video visits for follow-ups and minor issues.",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Family clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl flex-col gap-10 px-4 py-16 md:min-h-[560px] md:px-6 lg:px-8 lg:flex-row lg:items-center">
        {/* Left: text */}
        <div
          className="max-w-xl space-y-6"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
            Family-centred primary care
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
            Compassionate care for every member of your family.
          </h1>

          <p className="text-base md:text-lg text-slate-100/90">
            From routine checkups to long-term care, our team provides
            personalised, relationship-based medicine for all ages.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us
                <GoArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white hover:text-slate-900"
            >
              <a href="tel:+233000000000">Call +233 00 000 000</a>
            </Button>
          </div>

          <p className="text-xs md:text-sm text-blue-100/90">
            Open Monday–Saturday · Now accepting new patients
          </p>
        </div>

        {/* Right: simple trust card */}
        <div
          className="mt-8 w-full max-w-md lg:mt-0 lg:ml-auto"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur shadow-xl">
            <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
              <Image
                src="/images/doctor.jpg"
                alt="Doctor with family"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-3 left-3 text-sm text-white">
                <p className="font-semibold">Board-certified providers</p>
                <p className="text-xs text-blue-100">
                  Trusted by families across our community
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-slate-100">
              On-site lab services, vaccinations and chronic care—designed to
              keep your family close to home for most of their healthcare.
            </p>
          </div>
        </div>
      </div>

      {/* Four highlight cards under hero */}
      <div className="relative z-10 mx-auto -mt-6 max-w-6xl px-4 pb-12 md:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group rounded-2xl bg-white text-slate-900 p-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-sm md:text-base font-semibold">
                {card.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                {card.description}
              </p>
              <Link
                href="/services"
                className="mt-3 inline-flex items-center text-xs font-medium text-[#1a76d1] hover:underline"
              >
                Learn more
                <GoArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
