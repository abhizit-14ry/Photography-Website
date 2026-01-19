import React from "react";
import { navLinks } from "../assets/assets";
const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState('home');

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="text-3xl font-playfair font-bold text-gradient-gold cursor-pointer">
            EVER-AFTER
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-link relative text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

{/* CTA Button */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
