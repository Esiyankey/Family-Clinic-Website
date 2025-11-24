"use client";

import HeroHeader from "../components/features/HeroHeader";
import ContactForm from "../components/features/ContactForm";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FiClock, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

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
        description="Have a question about appointments, billing, or our services? Send us a message and our team will get back to you as soon as possible."
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
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-semibold mb-1">
                Call or email us
              </span>
              <a
                href="tel:+2407908309"
                className="text-2xl font-semibold leading-tight"
              >
                +240-790-8309
              </a>
              <a
                href="mailto:info@familyclinic.clinic"
                className="text-blue-100 mt-1 text-sm md:text-base"
              >
                info@familyclinic.clinic
              </a>
            </div>
          </div>

          {/* Address / Map */}
          <Link
            href="https://www.google.com/maps/search/?api=1&query=7525+Greenway+Center+Drive,+Greenbelt,+MD+20770"
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
                  7525 Greenway Center Drive
                </span>
                <span className="text-sm md:text-base text-blue-100">
                  Greenbelt, MD 20770
                </span>

                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Get directions
                  <FaInfoCircle className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Hours */}
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-6 items-start">
            <div>
              <FiClock className="text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-semibold mb-1">
                Clinic hours
              </span>
              <span className="text-sm md:text-base text-blue-100">
                Monday – Thursday: 8 AM – 6 PM
              </span>
              <span className="text-sm md:text-base text-blue-100">
                Friday – Saturday: By appointment
              </span>
              <span className="text-xs md:text-sm text-blue-100 mt-2">
                Closed on Sundays and public holidays.
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
