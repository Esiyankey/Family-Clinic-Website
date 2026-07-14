"use client";

import Image from "next/image";
import SectionHeader from "@/app/components/ui/SectionHeader";

type Provider = {
  name: string;
  credentials: string;
  specialty?: string;
  bio: string;
  image: string;
};

const providers: Provider[] = [
  {
    name: "Linda Biney, MSN, FNP",
    credentials: "Certified Registered Nurse Practitioner / Owner",
    bio: "Linda Biney is the founder of Family Clinic and a Family Nurse Practitioner with extensive experience in primary care, urgent care, and bedside nursing. She is committed to providing compassionate, evidence-based healthcare while promoting preventive medicine and personalized care for every patient.",
    image: "/images/Linda_remini.jpg",
  },
  {
    name: "Charlyn Tupaz",
    credentials: "Certified Registered Nurse Practitioner",
    specialty: "Adult-Gerontology Primary Care",
    bio: "Charlyn Tupaz is a Certified Registered Nurse Practitioner specializing in Adult-Gerontology Primary Care with over 18 years of nursing experience. She is passionate about preventive medicine, patient education, and building trusted relationships that help patients achieve long-term health and wellness.",
    image: "/images/Charlyn_Tupaz.jpg",
  },
];

export function MeetOurProviders() {
  return (
    <section
      id="providers"
      className="bg-white py-12 md:py-14 lg:py-16 border-t border-slate-100"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Meet Our Providers"
          subtitle="Our experienced healthcare providers are committed to delivering compassionate, patient-centered care for individuals and families."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {providers.map((provider, idx) => (
            <div
              key={provider.name}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-md">
                <Image
                  src={provider.image}
                  alt={provider.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {provider.name}
              </h3>

              <span className="inline-block rounded-full bg-[#1a76d1]/10 px-3 py-1 text-xs font-semibold text-[#1a76d1]">
                {provider.specialty
                  ? `${provider.credentials} • ${provider.specialty}`
                  : provider.credentials}
              </span>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {provider.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
