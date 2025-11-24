"use client";

import { BiShield, BiCreditCard } from "react-icons/bi";
import { GoXCircle, GoCheckCircle } from "react-icons/go";

const plans = [
  {
    title: "Insurance support",
    icon: <BiShield className="h-10 w-10 text-[#1a76d1]" />,
    items: [
      "We verify benefits before your visit whenever possible.",
      "Most major insurance plans accepted.",
      "We help explain coverage and estimated out-of-pocket costs.",
    ],
  },
  {
    title: "Flexible billing options",
    icon: <BiCreditCard className="h-10 w-10 text-[#1a76d1]" />,
    items: [
      "Transparent pricing for common visits and procedures.",
      "Interest-free payment plans for eligible balances.",
      "Secure online and in-clinic payment options.",
    ],
  },
];

export function InsuranceAndBilling() {
  return (
    <section
      id="insurance"
      className="bg-white py-14 md:py-16 lg:py-20 border-t border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl text-center mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1a76d1]">
            Insurance & billing
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
            Simple, transparent billing for your family’s care.
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            We want finances to be the least stressful part of your visit. Our
            team will walk you through insurance coverage, co-pays and payment
            options before you leave the clinic.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((plan, idx) => (
            <div
              key={plan.title}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  {plan.icon}
                </div>
                <h3 className="text-lg font-semibold">{plan.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <GoCheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl text-xs md:text-sm text-slate-500 mx-auto text-center">
          <p>
            If your insurance plan is not listed or you have questions about
            coverage, our front desk team will gladly review your options
            before scheduling or at check-in.
          </p>
        </div>
      </div>
    </section>
  );
}
