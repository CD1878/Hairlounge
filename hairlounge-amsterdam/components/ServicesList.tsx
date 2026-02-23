import React, { useState } from 'react';
import { TEXT_SERVICES } from '../constants';

const ServicesList: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-brand-sand/30" id="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-black tracking-tight mb-6">Our Services</h2>
          <div className="h-px w-24 bg-brand-taupe mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 relative items-start">

          {/* Left Column: Sticky Info Block */}
          <div className="lg:sticky lg:top-32 space-y-8 bg-brand-white p-8 md:p-12 shadow-soft rounded-[20px] border border-gray-100">
            <h3 className="text-2xl font-serif text-brand-black mb-6">The Hairlounge Approach</h3>
            <p className="text-brand-dark/80 font-sans text-lg leading-relaxed">
              Every service begins with listening. We take time to understand what you want, how you wear your hair day to day, and what will work best long term.
            </p>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <p className="font-bold text-sm tracking-widest uppercase text-brand-taupe">All services include:</p>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-dark/80 text-base">
                  <span className="w-1.5 h-1.5 bg-brand-taupe rounded-full mr-4 flex-shrink-0"></span>
                  Hair wash before we begin
                </li>
                <li className="flex items-center text-brand-dark/80 text-base">
                  <span className="w-1.5 h-1.5 bg-brand-taupe rounded-full mr-4 flex-shrink-0"></span>
                  Finishing blowdry and styling
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                A short consultation is included with all transformation services such as colour, lightening, and packages.
              </p>
              <p className="text-brand-dark/70 text-sm leading-relaxed pb-4">
                If you would like extra time to discuss ideas or plan a bigger change, extended consultation time is available in the booking menu.
              </p>

              <a href="https://www.treatwell.nl/kapsalon/hairlounge-amsterdam/" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-brand-black text-brand-white px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-brand-taupe transition-all duration-300">
                Book Now
              </a>
            </div>
          </div>

          {/* Right Column: Services Accordion */}
          <div className="space-y-6">
            {TEXT_SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`relative py-8 md:py-10 px-6 md:px-10 border-b border-brand-dark/5 transition-all duration-500 ease-out bg-white rounded-[20px] ${activeId === service.id
                    ? 'shadow-xl -my-2 z-10 border border-brand-taupe/20'
                    : 'shadow-sm hover:shadow-md hover:-translate-y-1'
                  }`}
              >
                {/* Accordion Header */}
                <div
                  className="flex justify-between items-center cursor-pointer group"
                  onClick={() => setActiveId(activeId === service.id ? null : service.id)}
                >
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-black group-hover:text-brand-taupe transition-colors">
                    {service.title}
                  </h3>
                  <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${activeId === service.id ? 'bg-brand-black border-brand-black text-white rotate-180' : 'bg-transparent text-gray-400 group-hover:border-brand-taupe group-hover:text-brand-taupe'}`}>
                    <i className="fa-solid fa-chevron-down text-sm"></i>
                  </div>
                </div>

                {/* Accordion Body */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === service.id ? 'max-h-[2500px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
                    }`}
                >
                  {/* Overview */}
                  <div className="mb-10 pb-8 border-b border-gray-100">
                    <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-brand-taupe mb-4">Overview</h4>
                    <p className="text-brand-dark/80 font-sans text-lg leading-relaxed whitespace-pre-wrap">
                      {service.overview}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-12">
                    <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-brand-taupe mb-6 -mt-4">Options Include</h4>
                    {service.options.map((option, idx) => (
                      <div key={idx} className="bg-brand-white/50 p-6 md:p-8 rounded-[16px] border border-gray-50">
                        <h5 className="text-xl md:text-2xl font-serif text-brand-black mb-3">{option.name}</h5>
                        <p className="text-brand-dark/70 font-sans text-base md:text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                          {option.description}
                        </p>

                        {/* Included services (if any) */}
                        {option.included && option.included.length > 0 && (
                          <div className="mb-6 pt-6 border-t border-brand-taupe/10">
                            <h6 className="text-[10px] tracking-widest uppercase font-bold text-brand-taupe mb-3">Services Included</h6>
                            <ul className="space-y-2">
                              {option.included.map((item, idxi) => (
                                <li key={idxi} className="flex items-start text-sm text-brand-dark/80">
                                  <i className="fa-solid fa-check text-brand-taupe mt-1 mr-3 text-[10px]"></i>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Ideal For */}
                        {option.idealFor && option.idealFor.length > 0 && (
                          <div className="pt-6 border-t border-brand-taupe/10">
                            <h6 className="text-[10px] tracking-widest uppercase font-bold text-brand-taupe mb-3">Ideal For</h6>
                            <ul className="grid sm:grid-cols-2 gap-3">
                              {option.idealFor.map((ideal, idxi) => (
                                <li key={idxi} className="flex items-start text-sm text-brand-dark/80">
                                  <span className="w-1.5 h-1.5 bg-brand-taupe/50 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                  <span>{ideal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesList;