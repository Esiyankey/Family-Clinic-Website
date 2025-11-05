"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Variants } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";




const slides = [
  {
    id: 1,
    title: "Welcome to Family Clinic",
    subtitle: "Your trusted partner in health and wellness.",
    description:
      "At Family Clinic, we provide high-quality, compassionate care designed for individuals and families across Maryland. We combine advanced medical technology, expert healthcare professionals, and a patient-centered approach to ensure that every visit is efficient, personalized, and comfortable.",
    image: "/images/hero_image_1.jpg",
  },
  {
    id: 2,
    title: "Your Health, Our Priority",
    subtitle: "From chronic care to annual checkups.",
    description:
      "Whether you’re managing a chronic condition, scheduling your annual physical, or simply focusing on healthy living, our team is here to support you every step of the way.",
    image: "/images/hero_image_4.jpg",
  },
  {
    id: 3,
    title: "Book Your Appointment Today",
    subtitle: "Healthcare made easy.",
    description:
      "Schedule your visit online — just enter your name, date of birth, address, phone number, and ID, then upload your insurance card and choose a date. Receive a confirmation email instantly.",
    image: "/images/hero_image_3.jpg",
  },
];

const cards = [
  {
    category: "Our Services",
    title: "Comprehensive Family Care",
    description:
      "From annual physical exams to chronic condition management and telemedicine, we deliver personalized care for every stage of life.",
    expand: "Learn More",
  },
  {
    category: "Appointments",
    title: "Book Online Easily",
    description:
      "Schedule your visit online by providing your name, date of birth, address, ID, and insurance details. Receive instant confirmation via email.",
    expand: "Book Now",
  },
  {
    category: "Working Hours",
    title: "Open Monday to Thursday",
    description:
      "Walk-ins and appointments available Mon–Thu (8 AM – 6 PM). Fridays and Saturdays are by appointment only. Fully booked on Sundays.",
    expand: "View Hours",
  },
];



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.6 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    // ✅ use cubic-bezier array instead of string for easing
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const buttonContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.2,
    },
  },
};

const buttonItem: Variants = {
  hidden: { opacity: 0, y: -15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="">
      <div className="relative w-full h-[600px] overflow-hidden">
        <div className="relative w-full h-screen overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="relative w-full h-screen shrink-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/50 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center mb-24 z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-gray-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[currentSlide].id}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <motion.h2
                    variants={itemVariants}
                    className="text-lg md:text-xl text-[#1a76d1] mb-2"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>

                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl mb-8 text-gray-700"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div variants={buttonContainer} className="flex flex-col lg:flex-row gap-4">
                    <motion.div variants={buttonItem}>
                      <Button className="p-7 w-full bg-[#1a76d1] text-white rounded-[3px] text-lg font-semibold">
                        Book Appointment
                      </Button>
                    </motion.div>
                    <motion.div variants={buttonItem}>
                      <Button className="p-7 w-full bg-black text-white rounded-[3px] text-lg font-semibold">
                        Learn More
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700"
        >
        <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700"
        >
          <IoIosArrowForward  size={24} />
        </button>
      </div>

     

      <div className="container max-w-7xl mx-auto px-4 -mt-28 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative lg:w-96 bg-[#1a76d1] text-white p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
            >
              {/* Medical Cross Icon in Background */}
              <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="translate-x-8 translate-y-8"
                >
                  <path
                    d="M110 40C110 28.9543 101.046 20 90 20H90C78.9543 20 70 28.9543 70 40V70H40C28.9543 70 20 78.9543 20 90V90C20 101.046 28.9543 110 40 110H70V140C70 151.046 78.9543 160 90 160V160C101.046 160 110 151.046 110 140V110H140C151.046 110 160 101.046 160 90V90C160 78.9543 151.046 70 140 70H110V40Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <p className="text-sm text-blue-100 mb-3 font-medium tracking-wide uppercase">
                  {card.category}
                </p>
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-blue-50 leading-relaxed mb-6">
                  {card.description}
                </p>
                <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all group/btn">
                  <span className="uppercase text-sm tracking-wider">{card.expand}</span>
                  <GoArrowRight  className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
