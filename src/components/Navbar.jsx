import React from "react";
import { navLinks } from "../assets/assets";
import { FaBars, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (link) => {
    setActiveLink(link);
    scrollToSection(link);
  };

  return (
    <div className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <div className="text-3xl font-playfair font-bold text-gradient-gold cursor-pointer">
            EVER-AFTER
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-link relative text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer ${activeLink === link.id ? "active" : ""}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-gold text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-gold/30 transition duration-300 cursor-pointer"
            >
              Book a Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-charcoal">
            {isMobileMenuOpen ? (
              <FaXmark
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-xl"
              />
            ) : (
              <FaBars
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-xl"
              />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden mt-4 pb-4`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  scrollToSection(link.id);
                }}
                className="text-charcoal hover:text-gold font-medium text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="bg-gradient-gold text-white px-6 py-3 rounded-full font-medium text-center mt-2"
            >
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
