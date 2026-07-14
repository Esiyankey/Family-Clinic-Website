"use client";
import { FaWheelchair } from "react-icons/fa";

const stats = [
  { label: "Families served", value: "2,000+" },
  { label: "Years of care", value: "10+" },
  { label: "Healthcare professionals", value: "30+" },
  { label: "Patient satisfaction", value: "95%" },
];

export function DataSection() {
  return (
    <section
      id="stats"
      className="bg-[#1a76d1] py-12 md:py-16 lg:py-18 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-6 flex-col md:flex-row">

        <div
          className="mb-8 max-w-xl text-center md:text-left"
          data-aos="fade-up"
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
            Trusted by families
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Caring for our community for over three decades.
          </h2>
          <p className="mt-3 text-sm md:text-base text-blue-100">
            We combine experience, compassion and modern technology to deliver
            safe, reliable care for every visit.
          </p>
        </div>
        <div className="mt-6 w-88 mb-12 flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-5 mx-6">
          <FaWheelchair className="mt-0.5 shrink-0 text-xl text-[#1a76d1] md:text-2xl" />
          <div>
            <p className="mb-1 font-semibold text-gray-900">
              Accessible Facility
            </p>
            <p className="text-sm text-gray-600 md:text-base">
              Our clinic is wheelchair accessible and designed to accommodate
              patients with mobility needs.Parking, Entranceways,
              and Examination areas are available.
            </p>
          </div>
        </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="flex flex-col items-center rounded-2xl bg-white/10 px-5 py-6 text-center backdrop-blur-sm"
            >
              <p className="text-3xl md:text-4xl font-semibold leading-tight">
                {item.value}
              </p>
              <p className="mt-2 text-xs md:text-sm text-blue-100">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
