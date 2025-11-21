import { div } from "framer-motion/client";
import HeroHeader from "../components/features/HeroHeader";

export default function InsuranceAndBilling() {
  return (
    <div>
      <HeroHeader
        title="Insurance & Billing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insurance & Billing" },
        ]}
      />
      <div className="py-24 px-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Insurance & Billing
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl text-center">
          This section is currently under development. Please check back soon
          for detailed information about accepted insurance plans, billing
          procedures, payment options, and pricing.
        </p>

        <div className="mt-10">
          <div className="animate-pulse h-40 w-80 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
