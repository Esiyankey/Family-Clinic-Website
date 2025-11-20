import Image from "next/image";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  center?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  imageSrc,
  imageAlt = "section image",
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={center ? "flex flex-col items-center" : ""}>
      <h1 className="text-3xl md:text-5xl font-semibold my-6 text-center">
        {title}
      </h1>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={50}
          height={50}
          className="my-4"
        />
      )}
      {subtitle && (
        <p className="text-[#abaaab] text-center max-w-2xl mx-auto my-6 text-lg lg:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
