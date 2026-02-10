import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 bg-brand-white/95 backdrop-blur-md h-20 md:h-28 shadow-soft transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <div className="z-50 flex items-center">
            <a href="/">
              <img
                src="/assets/logo/logo-horizontal.png"
                alt="Hairlounge Amsterdam"
                className="h-10 md:h-24 w-auto object-contain mix-blend-screen transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest uppercase text-brand-black hover:text-brand-taupe transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://widget.treatwell.nl/salon/hairlounge-amsterdam-1/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-taupe text-white px-8 py-3 text-xs tracking-[0.2em] uppercase rounded-full hover:bg-brand-black transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-brand-black z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Right-Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#F4F1EA] z-[70] shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button Positioned Top-Right */}
          <div className="flex justify-end items-center h-20 -mt-6">
            {/* Matches Header height approx for alignment or just visual spacing */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-brand-black focus:outline-none"
            >
              <i className="fa-solid fa-times text-3xl"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-0 mt-4 overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-sans tracking-[0.2em] uppercase text-brand-black hover:text-brand-taupe transition-colors py-5 border-b border-brand-black/10 text-left pl-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Book Button at Bottom Container */}
          <div className="mt-auto pb-8 pt-6">
            <a
              href="https://widget.treatwell.nl/salon/hairlounge-amsterdam-1/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand-black text-white px-6 py-4 text-xs tracking-[0.2em] uppercase text-center rounded-sm hover:bg-brand-taupe transition-colors shadow-lg"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;