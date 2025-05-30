import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <span className="text-custom-navyBlue font-bold text-2xl tracking-tight">
            STARTUP<span className="text-custom-skyBlue"> COACH</span>
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {["home", "about", "faq", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-custom-black hover:text-custom-skyBlue transition-colors font-medium capitalize cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-custom-navyBlue hover:text-custom-skyBlue transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-2 shadow-inner">
          {["home", "about", "faq", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left py-3 text-custom-black hover:text-custom-skyBluetransition-colors font-medium capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
