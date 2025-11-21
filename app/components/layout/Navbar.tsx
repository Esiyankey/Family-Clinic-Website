"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaX } from "react-icons/fa6";

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insurance and Billing", href: "/insurance-and-billing" },
    { name: "Appointments", href: "/appointment" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <div className="lg:flex-row mr-3 flex-col flex lg:justify-between items-end lg:items-center lg:max-w-5/6 lg:mx-auto py-1 lg:py-3">
        <div className="flex items-center gap-2 lg:gap-5">
          <div className="hidden lg:flex gap-2 items-center">
            <ImPhone
              size={15}
              className="fill-current text-[#1a76d1]"
              fill="currentColor"
            />
            <span className="text-sm md:text-lg">+1 (555) 123-4567</span>
          </div>
          <div className="flex gap-2 items-center">
            <HiMail size={20} className="text-[#1a76d1]" />
            <span className="text-sm md:text-lg hover:text-[#1a76d1] cursor-pointer">
              info@familyclinic.com
            </span>
          </div>
        </div>
        <div>
          <span className="hover:text-[#1a76d1] text-sm md:text-lg cursor-pointer">
            admin login
          </span>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#eeeeee]"></div>

      <div
        className={`bg-white ${
          scrollY > 40 ? "fixed top-0 w-full z-50 shadow-sm" : "relative "
        } `}
      >
        <div className="flex  justify-between items-center  max-w-5/6 mx-auto   lg:py-2">
          <div>
            <Image
              src="/images/family_clinic_logo.png"
              width={80}
              height={80}
              alt="logo-here"
            />
          </div>
          <div className="flex gap-12 items-center">
            <div className="hidden  lg:flex gap-12 mr-16">
              {links.map((link) => {
                const isActiveLink = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={` ${
                      isActiveLink
                        ? "text-[#1a76d1] border-b-[3px] border-b-blue-600"
                        : ""
                    }  relative inline-block 
      after:content-[''] after:absolute after:left-0 after:bottom-0 
      after:h-[3px] after:w-full 
      after:bg-linear-to-r after:from-blue-500 after:to-blue-600
      after:origin-left after:scale-x-0
      after:transition-transform after:duration-300 
      hover:after:scale-x-100
      focus:after:scale-x-100
    text-lg font-medium hover:text-[#1a76d1] transition-ease-in-out`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <Link href="/appointment" className="hidden  lg:flex mr-12">
              <Button className="p-7  bg-[#1a76d1] text-white rounded-[3px] text-lg font-semibold">
                Book Appointment
              </Button>
            </Link>
          </div>

          <div className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <FaX
                size={15}
                className="fill-current text-[#4891da] mr-2"
                fill="currentColor"
              />
            ) : (
              <IoMdMenu
                size={20}
                className="fill-current text-[#4891da] mr-2"
                fill="currentColor"
              />
            )}
          </div>

          <div
            className={`absolute top-20 left-0 w-full z-20 bg-white 
    overflow-hidden transition-all duration-500 ease-in-out
    ${showMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
    py-4 px-8 flex flex-col gap-4 lg:hidden`}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-light border-transparent transition"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/appointment" className="w-full mt-4">
              <Button className="p-6 bg-[#1a76d1] rounded-sm text-lg">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
