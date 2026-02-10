import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const ServiceCardSlider: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-brand-white overflow-hidden" id="gallery-preview">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Text Side */}
        <div className="text-left md:pr-12 order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-none text-brand-black">Our Gallery</h2>
          <div className="h-1 w-24 bg-brand-taupe mb-8"></div>
          <p className="text-brand-dark/70 font-sans leading-relaxed text-lg md:text-xl mb-12 max-w-lg">
            Our gallery shows results from real clients, so you can see our style, our quality,
            and what you can expect when you visit us. Haircuts, color, balayage, highlights,
            and treatments, all done at Hairlounge Amsterdam.
          </p>
          <a
            href="/gallery"
            className="inline-block border-b border-brand-black pb-2 text-sm tracking-[0.25em] uppercase hover:text-brand-taupe hover:border-brand-taupe transition-all duration-300"
          >
            View Our Gallery Page
          </a>
        </div>

        {/* Images Side - "Stacked" styling */}
        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center order-1 md:order-2">
          {GALLERY_IMAGES.slice(0, 3).map((img, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-out transform hover:scale-105 hover:z-30 cursor-pointer shadow-2xl ${index === 0 ? 'z-10 rotate-[-8deg] -translate-x-12 w-64 md:w-80 h-80 md:h-[28rem] object-cover bg-gray-200' :
                index === 1 ? 'z-20 rotate-[3deg] translate-x-2 -translate-y-4 w-72 md:w-96 h-96 md:h-[32rem] object-cover bg-gray-300' :
                  'z-0 rotate-[12deg] translate-x-20 md:translate-x-32 translate-y-8 w-60 md:w-80 h-72 md:h-[26rem] object-cover bg-gray-100' // index 2
                }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceCardSlider;