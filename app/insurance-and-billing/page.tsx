"use client";

import { FiCreditCard, FiHelpCircle, FiShield } from "react-icons/fi";
import HeroHeader from "../components/features/HeroHeader";

export default function InsuranceAndBillingPage() {
  return (
    <main>
      <HeroHeader
        title="Insurance & Billing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insurance & Billing" },
        ]}
      />

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent & Patient-Friendly Billing
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            We understand that healthcare billing can be confusing. Our goal is
            to make it simple, clear, and stress-free. We accept all insurance
            plans, and our team will verify your benefits before your visit to
            ensure you fully understand coverage and any out-of-pocket costs.
          </p>
        </div>

        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {/* INSURANCE */}
          <div className="p-8 rounded-2xl border border-blue-100 bg-blue-50">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white shadow">
                <FiShield className="text-[#1a76d1] text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Insurance Plans We Accept
              </h3>
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-4">
              We accept all insurance plans. Our team verifies your insurance
              coverage  to ensure a smooth and stress-free experience.
            </p>

            <p className="mt-4 text-sm text-gray-600 italic">
              Not sure if your insurance covers your visit? Contact us — we’re
              happy to help.
            </p>
          </div>

          {/* PAYMENT OPTIONS */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 shadow">
                <FiCreditCard className="text-[#1a76d1] text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Payment Options
              </h3>
            </div>
            <ul className="text-sm md:text-base text-gray-700 space-y-2">
              <li>• Cash & Debit/Credit Cards</li>
              <li>• Health Savings Account (HSA)</li>
              <li>• Flexible Spending Account (FSA)</li>
              <li>• Mobile / Digital Payments</li>
              <li>• Interest-free payment plans for eligible balances</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              All charges are discussed with you before leaving the clinic.
            </p>
          </div>
        </div>

        {/* FAQ / EXTRA DETAILS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* How Billing Works */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              How Billing Works
            </h3>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>
                <strong className="text-[#1a76d1]">1. Insurance Verification:</strong>{" "}
                We verify your benefits to confirm your
                coverage.
              </li>
              <li>
                <strong className="text-[#1a76d1]">2. Copay Collection:</strong>{" "}
                If your insurance requires a copay, it will be collected at check-in.
              </li>
              <li>
                <strong className="text-[#1a76d1]">3. Claim Submission:</strong>{" "}
                We submit your insurance claim on your behalf.
              </li>
              <li>
                <strong className="text-[#1a76d1]">4. Billing Statement:</strong>{" "}
                If insurance does not fully cover your visit, you will receive a
                simple, itemized statement for any remaining balance.
              </li>
            </ul>
          </div>

          {/* Common Questions */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Common Questions
            </h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <FiHelpCircle className="text-[#1a76d1] text-lg mt-1" />
                <span>
                  <strong>Do I need a referral?</strong>
                  Some insurance plans require referrals for specialist visits.
                  Our team can help check this for you.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiHelpCircle className="text-[#1a76d1] text-lg mt-1" />
                <span>
                  <strong>What if I don’t have insurance?</strong>
                  We offer discounted self-pay pricing and flexible payment
                  plans to make care affordable.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiHelpCircle className="text-[#1a76d1] text-lg mt-1" />
                <span>
                  <strong>Can I request an estimate?</strong>
                  Yes — we provide cost estimates before your visit so you know
                  what to expect.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

