import React from "react";
import Image from "next/image";
export const WhyChooseUs = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-semibold my-6">
          Why Choose Family Clinic?
        </h1>
        <Image
          src="/images/section-img.png"
          alt="section image"
          width={50}
          height={50}
          className="my-4"
        />
        <p className="text-[#abaaab] text-center max-w-2xl mx-auto my-6 text-lg lg:text-xl">
          Our mission is to deliver holistic healthcare that supports families
          through every stage of life. We partner with local healthcare
          providers, employers, and insurance companies to create a seamless
          care experience for our patients. 
        </p>
      </div>
    </section>
  );
};
