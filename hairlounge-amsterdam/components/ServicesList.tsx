import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TEXT_SERVICES } from '../constants';

const ServicesList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-brand-sand/30" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-black tracking-tight mb-6">Our Services</h2>
          <div className="h-px w-24 bg-brand-taupe mx-auto"></div>
        </div>

        <div className="bg-brand-white p-8 md:p-12 shadow-soft rounded-[20px] border border-gray-100 mb-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-brand-black mb-6">The Hairlounge Approach</h3>
          <p className="text-brand-dark/80 font-sans text-lg leading-relaxed mb-8">
            Every service begins with listening. We take time to understand what you want, how you wear your hair day to day, and what will work best long term.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-dark/70 font-bold tracking-widest uppercase">
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-taupe rounded-full mr-3"></span> Wash Included</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-taupe rounded-full mr-3"></span> Blowdry Finish</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-taupe rounded-full mr-3"></span> Consultation</span>
          </div>
        </div>



        {/* Global Booking Button below grid */}
        <div className="mt-16 text-center">
          <a
            href="https://widget.treatwell.nl/salon/hairlounge-amsterdam-1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-black text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-brand-taupe transition-colors duration-300 shadow-xl"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;