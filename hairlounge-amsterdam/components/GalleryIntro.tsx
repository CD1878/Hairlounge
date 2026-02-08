import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const GalleryIntro: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">OUR GALLERY</h2>
            <p className="text-brand-dark/80 font-sans leading-relaxed mb-8 max-w-md">
              Our gallery shows results from real clients, so you can see our style, our quality, and what you can expect when you visit us. Haircuts, color, balayage, highlights, and treatments, all done at Hairlounge Amsterdam.
            </p>
            <button className="bg-brand-black text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-brand-taupe transition-colors duration-300">
              View Gallery Page
            </button>
          </div>

          {/* Staggered Images */}
          <div className="order-1 lg:order-2 relative h-[600px] w-full">
            <div className="absolute top-0 right-0 w-2/3 aspect-[3/4] z-10">
              <img 
                src={GALLERY_IMAGES[0]} 
                alt="Hair result 1" 
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 aspect-[3/4] z-20 -translate-y-12">
              <img 
                src={GALLERY_IMAGES[1]} 
                alt="Hair result 2" 
                className="w-full h-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryIntro;