"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import HeroHeader from "../components/features/HeroHeader";

export default function AboutUsSection() {
  return (
    <section >
      <HeroHeader
        title="About Family Clinic"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "about-us" }]}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 py-20 md:grid-cols-2 gap-16 px-6 items-center">
       

        <div>
          <p className="text-[#1a76d1] text-xl md:text-4xl font-semibold mb-2">ABOUT US</p>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-4">
            Providing Quality Family Healthcare For Over Years
          </h2>

          <p className="text-gray-600 text-sm md:text-xl leading-relaxed mb-4">
            Family Clinic was founded to make healthcare more accessible, compassionate, and
            family-centered. We are committed to prevention, wellness, and long-term patient support.
          </p>

          <p className="text-gray-600 text-xs md:text-lg leading-relaxed mb-8">
            We work with families across generations delivering trusted, affordable, and effective healthcare.
          </p>

          <div className="flex items-center gap-6">
      

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-blue-100 text-[#1a76d1]">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500">Emergency</p>
                <p className="text-lg font-bold text-gray-800">(+233) 0123456789</p>
              </div>
            </div>
          </div>
        </div>
         <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative w-full h-40 rounded-sm overflow-hidden shadow-md">
              <Image src="/images/doctor.jpg" alt="Doctor" fill className="object-cover" />
            </div>

            <div className="relative w-full h-40 rounded-sm overflow-hidden shadow-md">
              <Image src="/images/team_doctor.jpg" alt="Dentist" fill className="object-cover" />
            </div>
          </div>

          <div className="relative w-full h-84 rounded-sm overflow-hidden shadow-md">
            <Image src="/images/team.jpg" alt="Healthcare" fill className="object-cover" />
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl pb-24 mx-auto grid  grid-cols-1 md:grid-cols-2 gap-12 px-6 mt-32 items-center">
        <div>
          <h3 className="text-xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission & Vision</h3>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            <span className="font-semibold text-[#1a76d1] text-lg md:text-2xl">Our Mission:</span> To deliver affordable,
            compassionate, and holistic medical care that empowers families to live healthier lives.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            <span className="font-semibold text-[#1a76d1] text-lg md:text-2xl">Our Vision:</span> A healthier community
            where every patient has access to timely, quality healthcare — both in-person and online.
          </p>

          <h4 className=" font-semibold mb-4 text-lg md:text-2xl text-gray-900">Our Values</h4>

          <ul className="space-y-3 text-gray-700 text-lg">
            {["Compassion", "Integrity", "Excellence", "Community"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#1a76d1]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <Image src="/images/team_doctor.jpg" fill alt="Mission Vision" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
