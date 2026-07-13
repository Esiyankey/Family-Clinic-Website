"use client";

import HeroHeader from "../components/features/HeroHeader";
import ContactForm from "../components/features/ContactForm";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FiClock, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { FaInfoCircle, FaFax, FaWheelchair } from "react-icons/fa";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: Record<string, string>) => {
    setIsLoading(true);
    try {
      console.log("Form data:", data);
      // TODO: replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text" as const,
      placeholder: "Enter your full name",
      required: true,
      span: "half" as const,
    },
    {
      name: "email",
      label: "Email",
      type: "email" as const,
      placeholder: "you@example.com",
      required: true,
      span: "half" as const,
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel" as const,
      placeholder: "Phone number (optional)",
      span: "half" as const,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text" as const,
      placeholder: "How can we help?",
      span: "half" as const,
    },
    {
      name: "message",
      label: "Your Message",
      type: "textarea" as const,
      placeholder: "Share a bit more about your question or concern...",
      span: "full" as const,
    },
  ];

  return (
    <main>
      <HeroHeader
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Contact form section */}
      <ContactForm
        title="We’d love to hear from you"
        description="Have a question about billing, or our services? Send us a message and our team will get back to you as soon as possible."
        fields={formFields}
        buttonText="Send message"
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      {/* Contact info cards */}
      <div className="max-w-7xl mx-auto pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Call & Email */}
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-6 items-start">
            <div>
              <FaPhone className="text-3xl" />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <span className="text-lg md:text-xl font-semibold">
                Office Numbers
              </span>
              <div className="space-y-1.5">
                <a
                  href="tel:+13014710678,,1"
                  className="flex items-baseline gap-2 text-lg font-semibold leading-tight hover:text-blue-100"
                >
                  301-471-0678
                  <span className="text-xs font-normal text-blue-100">
                    (Ext. 1)
                  </span>
                </a>
                <a
                  href="tel:+13014718886,,3"
                  className="flex items-baseline gap-2 text-lg font-semibold leading-tight hover:text-blue-100"
                >
                  301-471-8886
                  <span className="text-xs font-normal text-blue-100">
                    (Ext. 3)
                  </span>
                </a>
                <a
                  href="tel:+13014717223,,2"
                  className="flex items-baseline gap-2 text-lg font-semibold leading-tight hover:text-blue-100"
                >
                  301-471-7223
                  <span className="text-xs font-normal text-blue-100">
                    (Ext. 2)
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/20 text-sm text-blue-100">
                <FaFax className="shrink-0" />
                <span>Fax: 301-552-2424</span>
              </div>

              <a
                href="mailto:info@familyclinic.clinic"
                className="text-blue-100 text-sm md:text-base underline underline-offset-2 hover:text-white"
              >
                info@familyclinic.clinic
              </a>
            </div>
          </div>

        
          <Link
            href="https://www.google.com/maps/search/?api=1&query=7525+GreenWay+Center+Drive,+Greenbelt,+MD+20770"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-6 items-start h-full">
              <div>
                <FiMapPin className="text-3xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-semibold mb-1">
                  Visit our clinic
                </span>
                <span className="text-base md:text-lg">
                  7525 GreenWay Center Drive
                </span>
                <span className="text-sm md:text-base text-blue-100">
                   STE T8, MD 20770
                </span>

                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Get directions
                  <FaInfoCircle className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

       
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-6 items-start">
            <div>
              <FiClock className="text-3xl" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-lg md:text-xl font-semibold mb-1">
                Clinic hours
              </span>
              <div className="space-y-1.5 text-sm md:text-base">
                <div className="flex items-center justify-between gap-4">
                  <span>Monday – Thursday</span>
                  <span className="font-semibold">8:00 AM – 5:00 PM</span>
                </div>
               
                <div className="flex items-center justify-between gap-4">
                  <span>Saturday</span>
                  <span className="font-semibold">8:00 AM – 5:00 PM</span>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility info */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-5 mx-6">
          <FaWheelchair className="mt-0.5 shrink-0 text-xl text-[#1a76d1] md:text-2xl" />
          <div>
            <p className="mb-1 font-semibold text-gray-900">
              Accessible Facility
            </p>
            <p className="text-sm text-gray-600 md:text-base">
              Our clinic is wheelchair accessible and designed to accommodate
              patients with mobility needs. Accessible parking, entranceways,
              and examination areas are available to help ensure a safe and
              comfortable visit for every patient.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
