import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const ServiceCardSlider: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-white overflow-hidden" id="gallery-preview">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Text Side */}
        <div className="text-left md:col-span-5 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-none text-brand-black">Our Gallery</h2>
          <div className="h-1 w-24 bg-brand-taupe mb-8"></div>
          <p className="text-brand-dark/70 font-sans leading-relaxed text-lg mb-10 max-w-lg pr-4">
            Our gallery shows results from real clients, so you can see our style, our quality,
            and what you can expect when you visit us. Haircuts, color, balayage, highlights,
            and treatments, all done at Hairlounge Amsterdam.
          </p>
          <a
            href="/gallery"
            className="inline-flex items-center group text-brand-black hover:text-brand-taupe transition-colors duration-300"
          >
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-bold mr-4">View Full Gallery</span>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:border-brand-taupe group-hover:bg-brand-taupe group-hover:text-white">
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </div>
          </a>
        </div>

        {/* Images Side - Modern Album/Masonry styling */}
        <div className="md:col-span-7 order-1 md:order-2 grid grid-cols-2 gap-4 md:gap-6 relative">

          {/* Main Large Image (Left column) */}
          <div className="col-span-1 row-span-2 h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-[24px] shadow-soft group">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${GALLERY_IMAGES[0]})` }}
            />
          </div>

          {/* Top Right Small Image */}
          <div className="col-span-1 h-[165px] md:h-[238px] lg:h-[288px] overflow-hidden rounded-[24px] shadow-soft group relative top-4 md:top-8">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${GALLERY_IMAGES[1]})` }}
            />
          </div>

          {/* Bottom Right Small Image */}
          <div className="col-span-1 h-[165px] md:h-[238px] lg:h-[288px] overflow-hidden rounded-[24px] shadow-soft group relative top-4 md:top-8">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${GALLERY_IMAGES[2]})` }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceCardSlider;