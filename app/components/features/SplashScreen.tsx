"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only show on first visit in this tab
    const seen = sessionStorage.getItem("fc-splash-seen");
    if (seen) return;

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("fc-splash-seen", "1");
    }, 900); // shorter, snappier

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a76d1]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4 px-6 text-center text-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/70">
              <span className="text-2xl font-semibold">FC</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
                Family Clinic
              </h1>
              <p className="mt-2 text-sm md:text-base text-blue-50">
                Your partner in family health & wellness
              </p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blue-100">
              <span className="inline-block h-1 w-1 rounded-full bg-blue-100" />
              <span>Loading your experience</span>
              <span className="inline-block h-1 w-1 rounded-full bg-blue-100" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
