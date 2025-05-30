import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-custom-navyBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-white font-bold text-2xl tracking-tight">
                Startup<span className="text-custom-skyBlue">Coach</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              India's first platform dedicated to helping early-stage startups
              overcome critical challenges between seed and Series A funding.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-custom-navyBlue hover:bg-custom-skyBlue rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Success Stories", "Blog"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                "Startup Guide",
                "Mentorship",
                "Funding Resources",
                "Case Studies",
                "Privacy Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-custom-skyBlue mr-3 mt-1" />
                <span className="text-gray-300">
                  Sec - 22, Rohini, Delhi - 110086
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-custom-skyBlue mr-3" />
                <span className="text-gray-300">+91 87007-36093</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-custom-skyBlue mr-3" />
                <span className="text-gray-300">hello@startupcoaching.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#141F60] text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} StartupCoaching.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
