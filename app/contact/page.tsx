"use client";

import HeroHeader from "../components/features/HeroHeader";
import ContactForm from "../components/features/ContactForm";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FiClock, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: Record<string, string>) => {
    setIsLoading(true);
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message sent successfully!");
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
    }
  };

  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text" as const,
      placeholder: "Name",
      required: true,
      span: "half" as const,
    },
    {
      name: "email",
      label: "Email",
      type: "email" as const,
      placeholder: "Email",
      required: true,
      span: "half" as const,
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel" as const,
      placeholder: "Phone",
      span: "half" as const,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text" as const,
      placeholder: "Subject",
      span: "half" as const,
    },
    {
      name: "message",
      label: "Your Message",
      type: "textarea" as const,
      placeholder: "Your Message",
      span: "full" as const,
    },
  ];

  return (
    <main>
      <HeroHeader
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "contact" }]}
      />
      <ContactForm
        title="Contact Us"
        description="If you have any questions, please feel free to contact us."
        fields={formFields}
        buttonText="Send"
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-12 items-center">
            <div>
              <FaPhone className="text-3xl" />
            </div>
            <div className="flex flex-col text-xl">
              <span className="text-2xl font-semibold">0256778060</span>
              <span>info@company.com</span>
            </div>
          </div>
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-12 items-center">
            <div>
              <FiMapPin className="text-3xl" />
            </div>
            <div className="flex flex-col text-xl">
              <span className="text-2xl font-semibold">0256778060</span>
              <span>info@company.com</span>
            </div>
          </div>
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-12 items-center">
            <div>
              <FiClock className="text-3xl" />
            </div>
            <div className="flex flex-col text-xl">
              <span className="text-2xl font-semibold">0256778060</span>
              <span>info@company.com</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
