import Link from "next/link";
import { BiMapPin } from "react-icons/bi";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { FaFax } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Insurance and Billing", link: "/insurance-and-billing" },
    // { name: "Appointments", link: "/appointment" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <footer className="bg-[#176abc] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className=" text-xl mb-4 pb-3 border-b-2 border-white w-fit">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {navLinks.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-blue-300">›</span>
                  <Link
                    href={item.link}
                    className="hover:text-blue-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>


          <div>
              <h3 className=" text-xl mb-4 pb-3 border-b-2 border-white w-fit">
              Follow Us
            </h3>
            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <BsTwitterX size={20} />
              </Link>
            </div>
          </div>

          
          <div>
            <h3 className=" text-xl mb-4 pb-3 border-b-2 border-white w-fit">
              Contact Info
            </h3>

            <div className="space-y-6 text-blue-50">
              <div className="flex items-start gap-3">
                <BiMapPin size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1 text-white">Address</p>
                  <p>
                    7525 GreenWay Center Drive
                    <br />
                    STE T8, MD 20770
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ImPhone size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1 text-white">
                    Office Numbers
                  </p>
                  <div className="space-y-0.5">
                    <Link
                      href="tel:+13014710678,,1"
                      className="block hover:text-white transition-colors"
                    >
                      301-471-0678{" "}
                      <span className="text-blue-200">(Ext. 1)</span>
                    </Link>
                    <Link
                      href="tel:+13014718886,,3"
                      className="block hover:text-white transition-colors"
                    >
                      301-471-8886{" "}
                      <span className="text-blue-200">(Ext. 3)</span>
                    </Link>
                    <Link
                      href="tel:+13014717223,,2"
                      className="block hover:text-white transition-colors"
                    >
                      301-471-7223{" "}
                      <span className="text-blue-200">(Ext. 2)</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaFax size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1 text-white">Fax</p>
                  <p>301-552-2424</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiMail size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1 text-white">Email</p>
                  <Link
                    href="mailto:info@familyclinic.clinic"
                    className="hover:text-white transition-colors"
                  >
                    info@familyclinic.clinic
                  </Link>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="bg-[#1a76d1] text-center py-6 text-sm">
        <p>
          © 2025 Family Clinic. All Rights Reserved. Website by{" "}
          <span className="font-semibold hover:text-blue-100 transition-colors">
            Votex365
          </span>
        </p>
      </div>
    </footer>
  );
}
