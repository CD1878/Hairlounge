import React from 'react';

const MobileBookingButton: React.FC = () => {
    // Always visible on mobile, no scroll check needed per new requirements
    return (
        <a
            href="https://widget.treatwell.nl/salon/hairlounge-amsterdam-1/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 md:hidden bg-brand-black text-white px-6 py-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold border border-brand-black"
            aria-label="Book Appointment"
        >
            Book Now
        </a>
    );
};

export default MobileBookingButton;
