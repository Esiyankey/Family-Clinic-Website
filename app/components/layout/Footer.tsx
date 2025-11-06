import { BiHeart, BiMapPin } from "react-icons/bi";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="bg-[#176abc] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-white w-fit">
              About Us
            </h3>
            <p className="text-blue-50 leading-relaxed mb-6">
              At Family Clinic, we are committed to providing exceptional
              healthcare services with a focus on compassion, expertise, and
              innovation. Our dedicated team of medical professionals is here to
              ensure that you and your loved ones receive the highest quality of
              care in a supportive and state-of-the-art environment.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram size={20} />
              </a>
              <a
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <BsTwitterX size={20} />
              </a>
              <a
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-blue-600 transition-colors"
                aria-label="Vimeo"
              >
                <BiHeart size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-white w-fit">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-300">›</span>
                <a href="#" className="hover:text-blue-100 transition-colors">
                  Home
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-300">›</span>
                <a href="#" className="hover:text-blue-100 transition-colors">
                  Services
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-300">›</span>
                <a href="#" className="hover:text-blue-100 transition-colors">
                  About Us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-300">›</span>
                <a href="#" className="hover:text-blue-100 transition-colors">
                  Contact Us
                </a>
              </div>
            </nav>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 pb-3 border-b-2 border-white w-fit">
              Open Hours
            </h3>
            <p className="text-blue-50 leading-relaxed mb-6">
              At Family Clinic, we are dedicated to being available when you
              need us most. Our team is here to provide excellent care during
              our convenient hours of operation.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span className="font-semibold">08:00 AM - 06:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span className="font-semibold">Appointment Only</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="flex items-start gap-3">
              <BiMapPin size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-blue-50">
                  7525 GreenWay Center Drive
                  <br />
                  Greenbelt, MD 20770
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ImPhone size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <a
                  href="tel:"
                  className="text-blue-50 hover:text-white transition-colors"
                >
                  Available upon request
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HiMail size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a
                  href="mailto:info@familyclinic.com"
                  className="text-blue-50 hover:text-white transition-colors"
                >
                  info@familyclinic.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a76d1] text-center py-6 text-sm">
        <p>
          © Copyright 2025 | All Rights Reserved by{" "}
          <a
            href="#"
            className="hover:text-blue-100 transition-colors font-semibold"
          >
            Family Clinic
          </a>
        </p>
      </div>
    </footer>
  );
}
