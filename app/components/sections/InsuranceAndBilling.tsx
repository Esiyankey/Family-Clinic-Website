import Image from "next/image";
import { BiCheck, BiShield } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { CgClose } from "react-icons/cg";

const plans = [
  {
    icon: <BiShield className="w-12 h-12 text-[#1a76d1] mx-auto" />,
    title: "Insurance Support",
    subtitle: "Accepted Providers",
    price: "",
    items: [
      { text: "Verification of coverage before visits", available: true },
      { text: "Help with claim submission and coordination", available: true },
      
    ],
    button: "View Accepted Plans",
  },
  {
    icon: <BsCreditCard className="w-12 h-12 text-[#1a76d1] mx-auto" />,
    title: "Billing Assistance:",
    subtitle: "Simple & Transparent",
    price: "",
    items: [
      { text: "Payment plans for self-pay patients", available: true },
      { text: "Flexible payment options (cash, card, or insurance)", available: true },
      
    ],
    button: "Contact Billing Office",
  },
 
];

export const InsuranceAndBilling = () => {
  return (
    <section className="my-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-semibold my-2">
            Insurance and Billing
          </h1>
          <Image
            src="/images/section-img.png"
            alt="section image"
            width={50}
            height={50}
            className="my-4"
          />
          <p className="text-[#abaaab] text-center max-w-2xl mx-auto my-2 text-lg lg:text-xl">
            We work with most major insurance providers to make quality healthcare accessible and affordable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-100 rounded-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="mb-4">{plan.icon}</div>
              <h3 className="text-xl md:text-3xl font-semibold text-gray-900 mb-1">
                {plan.title}
              </h3>
              <p className="text-[#1a76d1] mb-6 text-lg md:text-xl">
                {plan.subtitle}
              </p>

              <ul className="space-y-3  text-left w-full">
                {plan.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between  text-gray-700"
                  >
                    <span className="text-sm md:text-base lg:text-xl">
                      {item.text}
                    </span>
                    {item.available ? (
                      <BiCheck className="text-[#1a76d1] w-5 h-5" />
                    ) : (
                      <CgClose className="text-gray-400 w-5 h-5" />
                    )}
                  </li>
                ))}
              </ul>

              <Button className="mt-8 bg-[#4891da] hover:bg-[#1a76d1] text-lg text-white rounded-sm w-full px-6 py-5">
                {plan.button}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
