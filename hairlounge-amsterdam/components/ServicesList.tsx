import React, { useState } from 'react';
import { TEXT_SERVICES } from '../constants';

const ServicesList: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 bg-brand-beige" id="services">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">OUR SERVICES</h2>
          <p className="text-brand-dark/70 font-sans max-w-2xl mx-auto leading-relaxed">
            At Hairlounge Amsterdam, every service is chosen with care. Our focus starts and ends with you. 
            We listen, offer honest advice, and make sure you leave feeling confident.
            <br/><span className="text-xs opacity-60 mt-2 block uppercase tracking-wider">All services include a hair wash and signature blowdry.</span>
          </p>
        </div>

        <div className="space-y-2">
          {TEXT_SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative py-6 border-b border-brand-dark/10 cursor-pointer group transition-all duration-500"
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="flex justify-between items-baseline transition-all duration-300">
                <h3 className={`text-2xl md:text-3xl font-serif transition-all duration-300 ${
                  activeId && activeId !== service.id ? 'opacity-40 blur-[1px]' : 'opacity-100'
                } ${activeId === service.id ? 'translate-x-4' : ''}`}>
                  {service.title}
                </h3>
                <span className={`text-sm text-brand-taupe font-medium transition-opacity duration-300 ${
                   activeId && activeId !== service.id ? 'opacity-40' : 'opacity-100'
                }`}>
                  {service.price}
                </span>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeId === service.id ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-brand-dark/70 font-sans leading-relaxed max-w-xl pl-4 border-l-2 border-brand-taupe">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#booking" className="inline-block border-b border-brand-black pb-1 text-sm tracking-widest hover:text-brand-taupe hover:border-brand-taupe transition-colors">
            VIEW COMPLETE PRICE LIST →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;