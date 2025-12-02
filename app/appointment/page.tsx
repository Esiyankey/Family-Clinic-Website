"use client";

import { FiClock, FiCheckCircle, FiPhone } from "react-icons/fi";
import { useEffect } from "react";
import HeroHeader from "../components/features/HeroHeader";

const AppointmentsPage = () =>{
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <HeroHeader
        title="Book Your Appointment"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Appointments" },
        ]}
      />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT INFO PANELS */}
          <div className="space-y-8 lg:col-span-1">
            {/* BOOK ONLINE */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Book Online in Minutes
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Schedule your visit easily through our Calendly-powered online
                booking system:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#1a76d1] mt-1 shrink-0" />
                  <span className="text-gray-700 text-base md:text-lg">
                    Choose your service type
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#1a76d1] mt-1 shrink-0" />
                  <span className="text-gray-700 text-base md:text-lg">
                    Select a date and time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#1a76d1] mt-1 shrink-0" />
                  <span className="text-gray-700 text-base md:text-lg">
                    Receive instant confirmation
                  </span>
                </li>
              </ul>
            </div>

            {/* REQUIREMENTS */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                What You’ll Need
              </h3>
              <ul className="space-y-2 text-gray-700 text-base md:text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-[#1a76d1] font-semibold">•</span>
                  Full Name
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1a76d1] font-semibold">•</span>
                  Phone Number
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1a76d1] font-semibold">•</span>
                  Email Address
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1a76d1] font-semibold">•</span>
                  Reason for Visit
                </li>
              </ul>
            </div>

            {/* OFFICE HOURS */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="text-[#1a76d1] text-xl" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Office Hours
                </h3>
              </div>

              <div className="space-y-4 text-gray-700 text-base md:text-lg">
                <div>
                  <p className="font-medium text-gray-900">
                    Monday – Thursday
                  </p>
                  <p className="text-sm md:text-base">
                    8 AM – 6 PM (Walk-ins welcome)
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    Friday – Saturday
                  </p>
                  <p className="text-sm md:text-base">By appointment only</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm md:text-base">
                    For  questions, reach out during office hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CALENDLY */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/d/cthm-fkf-dkz"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER info cards */}
      <div className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-8 items-start">
            <FiPhone className="text-2xl shrink-0" />
            <div>
              <p className="text-lg md:text-xl font-semibold">Call Us</p>
              <p className="text-blue-100 text-sm md:text-base">
                Have questions about your appointment?
              </p>
            </div>
          </div>

          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-8 items-start">
            <FiCheckCircle className="text-2xl shrink-0" />
            <div>
              <p className="text-lg md:text-xl font-semibold">
                Instant Confirmation
              </p>
              <p className="text-blue-100 text-sm md:text-base">
                Get your booking details immediately after scheduling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppointmentsPage;