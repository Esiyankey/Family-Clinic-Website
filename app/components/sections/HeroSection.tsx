"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";

const cards = [
  {
    title: "Annual Checkups",
    description: "Stay on top of your health with routine exams.",
  },
  {
    title: "Chronic Care",
    description: "Long-term support for diabetes, hypertension, and more.",
  },
  {
    title: "Laboratory Services",
    description: "Fast and reliable diagnostic testing.",
  },
  {
    title: "Telemedicine",
    description: "Convenient virtual consultations.",
  },
];

export default function HeroSection() {
  return (
    <section>
      {/* HERO IMAGE */}
      <div className="relative w-full h-[650px] overflow-hidden">
        <Image
          src="/images/interior.jpg"
          alt="Family Clinic"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1a76d1]/30 via-[#1a76d1]/20 to-transparent" />

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center lg:ml-10 mb-24 z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-gray-800">
              <h2 className="text-lg md:text-xl text-[#1a76d1] mb-2">
                Your Partner in Health & Wellness
              </h2>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Welcome to Family Clinic
              </h1>

              <p className="hidden lg:flex text-lg md:text-xl mb-6 text-gray-700">
                At Family Clinic, we provide compassionate care for families
                across Maryland.
              </p>
              <Button className="p-7 mt-10 w-full bg-[#1a76d1] text-white rounded-[3px] text-lg font-semibold">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-10/12 mx-auto px-4 -mt-32 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative lg:w-96 bg-[#1a76d1] h-56 text-white p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="translate-x-8 translate-y-8"
                >
                  <path
                    d="M110 40C110 28.9543 101.046 20 90 20H90C78.9543 20 70 28.9543 70 40V70H40C28.9543 70 20 78.9543 20 90V90C20 101.046 28.9543 110 40 110H70V140C70 151.046 78.9543 160 90 160V160C101.046 160 110 151.046 110 140V110H140C151.046 110 160 101.046 160 90V90C160 78.9543 151.046 70 140 70H110V40Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="flex text-blue-50 leading-relaxed mb-6">
                  {card.description}
                </p>
                <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all group/btn">
                  <span className="uppercase text-sm tracking-wider">
                    learn more
                  </span>
                  <GoArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
