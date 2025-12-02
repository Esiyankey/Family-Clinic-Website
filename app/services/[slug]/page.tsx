

import Link from "next/link";
import { servicesData } from "../../../lib/data/servicesData";
import HeroHeader from "@/app/components/features/HeroHeader";
import { GoArrowLeft, GoCheckCircle } from "react-icons/go";

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center text-xl text-red-500">
        Service not found.
      </div>
    );
  }

  const Icon = service.icon;

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

      <section className="mx-auto max-w-5xl py-12 md:py-16 px-6">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-[#1a76d1] hover:underline"
          >
            <GoArrowLeft className="mr-1 h-4 w-4" />
            Back to all services
          </Link>
        </div>

        {/* Overview card */}
        <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a76d1]/10 text-[#1a76d1]">
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {service.title}
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {service.description}
            </p>
          </div>
        </div>

        {/* Long description */}
        <div className="space-y-10">
          <div>
            <h2 className="mb-3 text-xl md:text-2xl font-semibold text-gray-900">
              Service overview
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {service.longDescription}
            </p>
          </div>

          {/* Benefits + Procedure in grid */}
          <div className="grid gap-10 md:grid-cols-2">
            {/* Benefits */}
            <div>
              <h3 className="mb-3 text-lg md:text-xl font-semibold text-gray-900">
                Key benefits
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <GoCheckCircle className="mt-1 h-4 w-4 text-emerald-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedure */}
            <div>
              <h3 className="mb-3 text-lg md:text-xl font-semibold text-gray-900">
                What to expect
              </h3>
              
            </div>
          </div>

          {/* CTA */}
          {/* <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[#1a76d1] px-6 py-3 text-sm md:text-base font-medium text-white hover:bg-[#155fb2] transition-colors"
            >
              {service.cta}
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}
