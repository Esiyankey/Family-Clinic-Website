"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLoader } from "react-spinners";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#4891da] text-white"
        >
          {/* Animated pulse background */}
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-white/10 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.5, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Logo / Loader section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-6"
          >
            <DotLoader color="#ffffff" size={70} speedMultiplier={0.8} />
            <div className="text-center mt-6">
              <h1 className="text-4xl font-semibold tracking-wide">
                Family Clinic
              </h1>
              <p className="mt-3 text-lg font-light text-blue-100">
                Your Partner in Health & Wellness
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
