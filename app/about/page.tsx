"use client";

import Image from "next/image";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import HeroHeader from "../components/features/HeroHeader";

export default function AboutUsSection() {
  return (
    <section>
      <HeroHeader
        title="About Family Clinic"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

     
      <div className="max-w-7xl mx-auto grid grid-cols-1 py-16 md:py-20 md:grid-cols-2 gap-12 md:gap-16 px-6 items-center">
        <div>
          <p className="text-[#1a76d1] text-sm md:text-base font-semibold tracking-[0.18em] uppercase mb-3">
            About us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Providing quality family healthcare for every generation.
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            Family Clinic was founded to make healthcare more accessible,
            compassionate and truly family-centered. We focus on prevention,
            wellness and long-term support so that your family has a trusted
            partner through every stage of life.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We care for children, adults and seniors, working with families
            across generations to deliver trusted, affordable and effective
            healthcare close to home.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-blue-100 text-[#1a76d1]">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-xs md:text-sm text-gray-500">Emergency</p>
                <p className="text-lg md:text-xl font-bold text-gray-800">
                  +1 (240) 790-8193
                </p>
              </div>
            </div>
          </div>
        </div>

 
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative w-full h-40 md:h-44 rounded-md overflow-hidden shadow-md">
              <Image
                src="/images/lat_doc_img.jpg"
                alt="Doctor"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-40 md:h-44 rounded-md overflow-hidden shadow-md">
              <Image
                src="/images/lat_doc_img4.jpg"
                alt="Team of doctors"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative w-full h-56 md:h-80 rounded-md overflow-hidden shadow-md">
            <Image
              src="/images/group-image.jpg"
              alt="Healthcare team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl pb-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 mt-16 md:mt-20 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            Our mission & vision
          </h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            <span className="font-semibold text-[#1a76d1]">Our Mission:</span>{" "}
            To deliver affordable, compassionate and holistic medical care that
            empowers families to live healthier, fuller lives.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            <span className="font-semibold text-[#1a76d1]">Our Vision:</span>{" "}
            A healthier community where every patient has access to timely,
            quality healthcare—both in-person and online—regardless of age or
            background.
          </p>

          <h4 className="font-semibold mb-4 text-lg md:text-xl text-gray-900">
            Our values
          </h4>

          <ul className="space-y-3 text-base md:text-lg text-gray-700">
            {["Compassion", "Integrity", "Excellence", "Community"].map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#1a76d1]" /> {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/group-image.jpg"
            fill
            alt="Mission and vision"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
