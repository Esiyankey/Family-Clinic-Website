import React from "react";
import Image from "next/image";
import { FaAmbulance } from "react-icons/fa";
import { PiStethoscopeLight } from "react-icons/pi";
import { GiCaduceus } from "react-icons/gi";

export const FamilyHealthCare = () => {
  return (
    <section className="bg-white mt-20">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-semibold my-6">
          Comprehensive Family HealthCare
        </h1>
      </div>
      <div className="flex justify-center items-center my-4">
        <Image
          src="/images/section-img.png"
          alt="section image"
          width={50}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center text-[#abaaab] text-center max-w-2xl mx-auto my-6 text-lg lg:text-xl">
        Our team is dedicated to providing exceptional, compassionate care for
        you and your loved ones. Whether you need emergency attention,
        medication support, or ongoing treatment, Family Clinic ensures your
        well-being is always our top priority.
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center  items-center mt-20 gap-24">
          <div className="w-32 h-32 rounded-full flex justify-center items-center border border-gray-300 hover:bg-[#1a76d1] bg-white">
            <FaAmbulance
              size={60}
              className="text-[#1a76d1] hover:text-white"
            />
          </div>
          <div className="text-[#1a76d1] text-3xl hidden lg:flex">
            ...............
          </div>
          <div className="w-32 h-32 rounded-full flex justify-center items-center border border-gray-300 hover:bg-[#1a76d1] bg-white">
            <GiCaduceus size={60} className="text-[#1a76d1] hover:text-white" />
          </div>
          <div className="text-[#1a76d1] text-3xl hidden lg:flex">
            ................
          </div>
          <div className="w-32 h-32 rounded-full flex justify-center items-center border border-gray-300 hover:bg-[#1a76d1] bg-white">
            <PiStethoscopeLight
              size={60}
              className="text-[#1a76d1] hover:text-white"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <h3>Emengency Help</h3>
          <p>
            Immediate medical assistance for urgent conditions and critical
            cases. Our team ensures fast, effective, and coordinated emergency
            response
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
