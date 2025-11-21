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
      className="relative w-full py-28 md:py-36 from-[#7fbbf6]  to-[#1a76d1]  bg-linear-to-b overflow-hidden"
      style={{
        backgroundImage: `url('/images/clinic_image.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance mb-4">
          {title}
        </h1>
        <nav className="flex justify-center font-semibold items-center gap-2 mb-6 text-white  text-lg md:text-xl ">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:underline transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="text-white opacity-75 font-bold">{">"}</span>
              )}
            </div>
          ))}
        </nav>

      
      </div>
    </div>
  );
}
