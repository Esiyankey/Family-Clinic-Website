

"use client";

import React, { useRef } from "react";
import { FaAmbulance } from "react-icons/fa";
import { IoBodySharp } from "react-icons/io5";
import { LuPipette } from "react-icons/lu";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/app/components/features/SectionHeader";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-center items-center mx-4"
    >
      <div className="w-32 h-32 rounded-full flex justify-center items-center hover:border-4 border-2 border-gray-300 hover:border-[#1a76d1] bg-white transition-all">
        {icon}
      </div>
      <div className="text-center mt-10">
        <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export const FamilyHealthCare: React.FC = () => {
  const services = [
    {
      icon: <IoBodySharp size={60} className="text-[#1a76d1]" />,
      title: "Annual Physical Examination",
      description:
        "Routine annual exams focus on prevention and early detection.",
    },
    {
      icon: <FaAmbulance size={60} className="text-[#1a76d1]" />,
      title: "Chronic Condition Management",
      description:
        "We provide long-term management plans for many chronic conditions.",
    },
    {
      icon: <LuPipette size={60} className="text-[#1a76d1]" />,
      title: "Laboratory Services",
      description:
        "Our lab provides reliable and efficient testing for diagnostics and screenings.",
    },
  ];

  return (
    <section className="bg-white mt-32 px-6">
      <SectionHeader
        title="Comprehensive Family HealthCare"
        subtitle={`Our team is dedicated to providing exceptional, compassionate care for
        you and your loved ones. Whether you need emergency attention,
        medication support, or ongoing treatment, Family Clinic ensures your
        well-being is always our top priority.`}
        imageSrc="/images/section-img.png"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mt-20 gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: false }}
          transition={{ staggerChildren: 0.25 }} 
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
