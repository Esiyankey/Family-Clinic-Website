"use client";

import { FiClock, FiCheckCircle, FiPhone } from "react-icons/fi";
import { useEffect } from "react";
import HeroHeader from "../components/features/HeroHeader";

export default function AppointmentsPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <HeroHeader
        title="Book Your Appointment"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "appointments" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Book Online Easily
                </h2>
                <p className="text-gray-600 mb-6">
                  Book your visit through our simple Calendly-powered scheduler:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#1a76d1] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Choose your service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#1a76d1] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Select preferred date and time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#1a76d1] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Receive instant confirmation
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What Youll Need
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1a76d1] font-semibold">•</span>
                    <span>Name</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1a76d1] font-semibold">•</span>
                    <span>Phone number</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1a76d1] font-semibold">•</span>
                    <span>Email address</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1a76d1] font-semibold">•</span>
                    <span>Reason for visit</span>
                  </li>
                </ul>
              </div>

              {/* Office Hours Section */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex gap-3 mb-4">
                  <FiClock className="text-[#1a76d1] text-xl shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-medium text-gray-900">
                      Monday – Thursday
                    </p>
                    <p className="text-sm">8 AM – 6 PM (Walk-ins welcome)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Friday – Saturday
                    </p>
                    <p className="text-sm">By appointment</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Have questions? Feel free to call us during office hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/d/cthm-fkf-dkz"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-8 items-start">
            <div>
              <FiPhone className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold mb-1">Call Us</span>
              <span className="text-blue-100">
                Have questions? Call us during office hours
              </span>
            </div>
          </div>
          <div className="flex gap-4 bg-[#1a76d1] text-white rounded-xl p-8 items-start">
            <div>
              <FiCheckCircle className="text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold mb-1">
                Instant Confirmation
              </span>
              <span className="text-blue-100">
                Receive confirmation details via email instantly
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
