import React from 'react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 transition-colors duration-500" id="footer">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 lg:gap-20 mb-20">

        {/* 1st Column: Logo (Centered Vertically) */}
        <div className="flex flex-col justify-center h-full border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
          <a href="/" className="block hover:opacity-80 transition-opacity">
            <img
              src="/assets/logo/logo-horizontal.png"
              alt="Hairlounge Amsterdam"
              className="h-28 md:h-24 w-auto object-contain mix-blend-screen opacity-90 mx-auto md:mx-0"
            />
          </a>
        </div>

        {/* 2nd Column: Opening Hours & Address */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-taupe mb-8">Visit Us</h3>

          <ul className="space-y-8">
            <li>
              <p className="text-white/60 font-sans mb-1 text-xs uppercase tracking-widest">Opening Hours</p>
              <p className="text-white font-serif text-xl">Daily: 10:00 - 19:00</p>
            </li>

            <li>
              <p className="text-white/60 font-sans mb-1 text-xs uppercase tracking-widest">Address</p>
              <address className="text-white font-sans text-lg leading-relaxed not-italic">
                Nieuwezijds Voorburgwal<br />
                152B, 1012SJ Amsterdam
              </address>
            </li>
          </ul>
        </div>

        {/* 3rd Column: Contact Options */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-taupe mb-8">Get In Touch</h3>
          <div className="flex flex-col space-y-6">

            {/* Call Option */}
            <a
              href="tel:+31202442567"
              className="group flex items-center space-x-4 text-white hover:text-brand-taupe transition-colors"
              aria-label="Call Salon"
            >
              <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-brand-taupe transition-colors">
                <i className="fa-solid fa-phone text-lg"></i>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Call Salon</span>
                <span className="font-serif text-xl">020 244 25 67</span>
              </div>
            </a>

            {/* WhatsApp Option */}
            <a
              href="https://wa.me/31641713035"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 text-white hover:text-brand-taupe transition-colors"
              aria-label="WhatsApp Us"
            >
              <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-brand-taupe transition-colors">
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">WhatsApp</span>
                <span className="font-serif text-xl">+31 64 171 3035</span>
              </div>
            </a>

          </div>
        </div>

        {/* 4th Column: Social Only (Removed KVK) */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-taupe mb-8">Follow Us</h3>

          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-white hover:text-brand-taupe transition-colors group"
              aria-label="Visit our Instagram page"
            >
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-brand-taupe transition-colors">
                <i className="fa-brands fa-instagram text-lg"></i>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} HA. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;