import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-beige pt-20 pb-10" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start lg:items-center">
            <h2 className="font-serif text-2xl tracking-wide mb-4">Hairlounge<br/>Amsterdam</h2>
          </div>

          {/* Column 2: Hours & Address */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-brand-taupe">Visit Us</h3>
            <div className="space-y-4 text-sm text-brand-dark/80">
              <p>
                <strong className="block text-brand-black mb-1">Opening Hours</strong>
                Daily: 10:00 – 19:00
              </p>
              <p>
                <strong className="block text-brand-black mb-1">Address</strong>
                Nieuwezijds Voorburgwal 152B<br/>
                1012 SJ Amsterdam
              </p>
            </div>
          </div>

          {/* Column 3: Booking */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-brand-taupe">Bookings</h3>
            <div className="space-y-4 text-sm text-brand-dark/80">
              <p>
                <strong className="block text-brand-black mb-1">Call or WhatsApp</strong>
                <a href="tel:+31641111732" className="hover:text-brand-taupe transition-colors">+31 6 41111732</a>
              </p>
              <p className="text-xs opacity-70">
                Phone bookings available<br/>09:00 – 18:00
              </p>
            </div>
          </div>

          {/* Column 4: Info */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 text-brand-taupe">Company</h3>
            <div className="space-y-4 text-sm text-brand-dark/80 mb-6">
              <p>KVK: 12345678</p>
              <p>BTW: NL123456789B01</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-brand-dark/20 rounded-full flex items-center justify-center hover:bg-brand-black hover:text-white hover:border-brand-black transition-all duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-brand-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-dark/50">
          <p>&copy; {new Date().getFullYear()} Hairlounge Amsterdam. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-black">Privacy Policy</a>
            <a href="#" className="hover:text-brand-black">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;