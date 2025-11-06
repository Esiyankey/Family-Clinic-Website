import React from "react";
import Image from "next/image";
export const WhyChooseUs = () => {
  const features = [
    "Comprehensive family healthcare tailored to your needs — from preventive to critical care.",
    "Integrated services combining diagnostics, counselling, and wellness programs under one roof.",
    "Cutting-edge digital tools including online booking, digital health records, and telehealth options.",
    "Strong relationships with local insurers, providers, and community partners for coordinated care.",
    "Commitment to continuous improvement — we monitor patient feedback daily to enhance quality and satisfaction.",
  ];

  return (
    <section className="mt-28">
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

      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold  mb-4">
              Why Our Patients Trust Us
            </h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          <p className="text-[#abaaab] max-w-xl  text-lg leading-relaxed mb-12">
            Our clinic offers comprehensive medical services with a focus on
            personalized care. We combine state-of-the-art technology with
            compassionate service to provide outstanding patient experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="shrink-0 pt-1">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <p className="text-lg leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
