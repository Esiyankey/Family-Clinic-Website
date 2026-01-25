"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="bg-[#1a76d1] py-10 md:py-12 lg:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-white md:flex-row md:justify-between md:text-left">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Call us right away.
          </h2>
          <p className="mt-2 text-sm md:text-base text-blue-100">
            For emergencies, please call{" "}
            <a
              href="tel:911"
              className="font-semibold underline decoration-white/60 underline-offset-2"
            >
              911
            </a>{" "}
            immediately.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="secondary" className="bg-white text-[#1a76d1]">
            <Link href="/contact">Contact us online</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-white/60 bg-transparent text-white hover:bg-white hover:text-[#1a76d1]"
          >
            <a href="/faq">View patient FAQs</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
