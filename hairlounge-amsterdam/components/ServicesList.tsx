import React, { useState } from 'react';
import { TEXT_SERVICES } from '../constants';

const ServicesList: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-brand-sand/50" id="services">
      <div className="max-w-5xl mx-auto px-6">

        {/* Intro Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-brand-black tracking-tight">Our Services</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-brand-dark/80 font-sans text-lg md:text-xl leading-relaxed">
              At Hairlounge Amsterdam, every service is chosen with care. Our focus starts and ends with you!
              We listen, offer honest advice, and make sure you leave feeling confident and happy with your hair.
            </p>
            <p className="text-xs md:text-sm text-brand-taupe font-bold uppercase tracking-[0.2em]">
              All services include a hair wash at the start and a standard blowdry at the end.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div
          className="space-y-6"
          onMouseLeave={() => setActiveId(null)}
        >
          {TEXT_SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`relative py-10 px-8 border-b border-brand-dark/5 cursor-pointer transition-all duration-700 ease-out ${activeId && activeId !== service.id
                ? 'opacity-40 blur-[1px] scale-[0.99]'
                : 'opacity-100 scale-100'
                } ${activeId === service.id ? 'bg-white shadow-soft rounded-sm -my-2 z-10 scale-[1.02]' : 'hover:bg-brand-white/20'
                }`}
              onMouseEnter={() => setActiveId(service.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-2xl md:text-4xl font-serif text-brand-black transition-all duration-500 ${activeId === service.id ? 'tracking-wide' : 'tracking-tight'
                  }`}>
                  {service.title}
                </h3>
                {/* Arrow or visual indicator could go here */}
              </div>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${activeId === service.id ? 'max-h-56 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="h-[1px] w-20 bg-brand-taupe mb-6"></div>
                <p className="text-brand-dark/70 font-sans text-lg md:text-xl leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-block bg-brand-black text-brand-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-brand-taupe transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1">
            View Our Complete List of Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;