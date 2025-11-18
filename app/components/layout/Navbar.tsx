"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insurance and Billing", href: "/insurance-and-billing" },
    { name: "Appointments", href: "/appointments" },
    { name: "Contact", href: "/contact" },
  ];
  const [scrollY, setScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

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
      <div className="lg:flex-row mr-3 flex-col flex lg:justify-between items-end lg:items-center max-w-5/6 lg:mx-auto py-2 lg:py-4">
        <div className="flex items-center gap-2 lg:gap-5">
          <div className="hidden lg:flex gap-2 items-center">
            <ImPhone
              size={15}
              className="fill-current text-[#3385d5]"
              fill="currentColor"
            />
            <span className="text-lg">+1 (555) 123-4567</span>
          </div>
          <div className="flex gap-2 items-center">
            <HiMail size={20} className="text-[#3385d5]" />
            <span className="text-lg">info@familyclinic.com</span>
          </div>
        </div>
        <div>
          <span className="hover:text-[#3385d5] text-lg">admin login</span>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#eeeeee]"></div>

      <div
        className={`bg-white ${
          scrollY > 40 ? "fixed top-0 w-full z-50 shadow-sm" : "relative "
        } `}
      >
        <div className="flex  justify-between items-center  max-w-5/6 mx-auto py-4">
          <div>
            <Image
              src="/images/family_clinic_logo.png"
              width={80}
              height={80}
              alt="logo-here"
            />
          </div>
          <div className="flex gap-12 items-center">
            <div className="hidden   lg:flex gap-12 mr-16">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-normal  transition-ease-in-out "
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden  lg:flex mr-12">
              <Button className="p-7  bg-[#1a76d1] text-white rounded-[3px] text-lg font-semibold">
                Book Appointment
              </Button>
            </div>
          </div>

          <div className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
            <IoMdMenu
              size={24}
              className="fill-current text-[#4891da] mr-2"
              fill="currentColor"
            />
          </div>
          {showMenu && (
            <div className=" absolute top-16 transition-all  z-20 bg-white w-full py-1 justify-start items-start px-8 flex flex-col gap-4 lg:hidden ">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-light  border-b-2 border-transparent hover:border-blue-500 transition "
                >
                  {link.name}
                </a>
              ))}
              <Button className="p-6 bg-[#4891da] rounded-sm w-full text-lg">
                Book Appointment
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
