import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-white/95 backdrop-blur-md py-4 border-brand-beige shadow-sm' : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors ${isScrolled ? 'text-brand-black' : 'text-white mix-blend-difference'}`}>
            Hairlounge Amsterdam
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm tracking-widest uppercase hover:text-brand-taupe transition-colors ${
                  isScrolled ? 'text-brand-black' : 'text-white mix-blend-difference'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-brand-black text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-brand-taupe transition-colors duration-300">
              Book Appointment
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-brand-black' : 'text-white mix-blend-difference'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ top: '0', height: '100vh' }}>
           <button 
            className="absolute top-6 right-6 p-4 text-brand-black text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
          
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-brand-black hover:text-brand-taupe transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      {/* Mobile Sticky Booking Button (Bottom Right) */}
      <a 
        href="#book"
        className="fixed bottom-6 right-6 z-40 md:hidden bg-brand-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-taupe transition-colors"
        aria-label="Book Appointment"
      >
        <i className="fa-solid fa-calendar-check text-lg"></i>
      </a>
    </>
  );
};

export default Header;