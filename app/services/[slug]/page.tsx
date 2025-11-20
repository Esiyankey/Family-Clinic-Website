import Link from "next/link";
import { servicesData } from "../../../lib/data/servicesData";

import HeroHeader from "@/app/components/features/HeroHeader";

export default async function  ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
  
  const service = servicesData.find(item => item.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center text-xl text-red-500">
        Service not found.
      </div>
    );
  }

  return (
    <div className="w-full">

      <HeroHeader
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

     
      

       
      <section className="mx-auto max-w-4xl py-16 px-6">

       
        <p className="text-gray-600 text-lg leading-relaxed">
          {service.description}
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-gray-800">
          Service Overview
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
          {service.longDescription}
        </p>

     
        <h3 className="mt-10 mb-4 text-xl font-semibold text-gray-800">
          Key Benefits
        </h3>

        <ul className="space-y-3 text-lg text-gray-600">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-blue-600">✔</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 mb-4 text-xl font-semibold text-gray-800">
          Procedure Steps
        </h3>

        <ul className="space-y-3 text-lg text-gray-600">
          {service.procedure.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-blue-600">•</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>

    
        <div className="mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            {service.cta}
          </button>
        </div>

      </section>

    </div>
  );
}
