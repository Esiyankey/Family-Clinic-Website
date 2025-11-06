import { Button } from "@/components/ui/button";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const ContactSection = () => {
  return (
    <section className="bg-[#4891da] ">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl max-w-3xl text-center font-bold my-4 text-white">
          Do you need Emergency Medical Care? Call @{" "}
        </h1>
        <p className="text-lg md:text-xl text-center my-4 font-semibold text-white max-w-2xl ">
          If you or a loved one requires urgent medical care, our team is ready
          to assist you 24/7. Call us immediately for expert help.
        </p>
        <div className="my-6 flex gap-4">
          <Button className="bg-white text-[#1a76d1] hover:border hover:border-white hover:bg-[#1a76d1] hover:text-white p-6 rounded-sm text-base font-semibold">
            Contact Now
          </Button>
          <Button className="border border-white bg-transparent text-white p-6 rounded-sm text-base font-semibold">
            Learn More
            <BsArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
