import { GoTriangleRight } from "react-icons/go";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function HeroHeader({ title, breadcrumbs }: HeroHeaderProps) {
  return (
    <div
      className="relative w-full py-24 md:py-32 bg-linear-to-b from-[#7fbbf6] to-[#1a76d1] overflow-hidden"
      style={{
        backgroundImage: `url('/images/clinic_image.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/45" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-3 md:mb-4">
          {title}
        </h1>
        <nav className="flex justify-center font-semibold items-center gap-2 mb-3 md:mb-4 text-white text-sm md:text-base">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:underline underline-offset-2 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="opacity-90">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="text-white opacity-80 font-bold">
                  <GoTriangleRight />
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
