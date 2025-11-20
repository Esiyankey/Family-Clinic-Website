

'use client';
import HeroHeader from "../components/features/HeroHeader";
import Image from "next/image";
import ServicesGrid from '../components/features/ServicesGrid';
import { servicesData as services } from '../../lib/data/servicesData';
const page = () => {
 


  return (
    <main>
      <HeroHeader
        title="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "services" }]}
      />

      <div className='mt-24'>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl max-w-xl text-center font-semibold my-6">
            We Offer Different Services To Improve Your Health
          </h1>
          <Image
            src="/images/section-img.png"
            alt="section image"
            width={50}
            height={50}
            className="my-4"
          />
          <p className="text-[#abaaab] text-center max-w-2xl mx-auto my-6 text-lg lg:text-xl">
            Our medical facility is dedicated to offering a wide range of
            healthcare services tailored to meet your needs. From general
            treatments to specialized procedures, our expert team is here to
            ensure you receive the best care possible.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
        <ServicesGrid services={services} />
      </div>
      </div>
    </main>
  );
};

export default page