import React, { useRef } from 'react';
import { SERVICE_SLIDER_ITEMS } from '../constants';

const ServiceCardSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Approx card width
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative group" id="services-preview">
      {/* Container settings based on reference styling logic */}
      <div className="max-w-[160rem] mx-auto px-4 md:px-20">
        
        {/* Navigation Arrows (Custom implementation of the Swiper arrows) */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-transparent hover:border-stone-400 hover:bg-brand-taupe hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
          aria-label="Previous slide"
        >
          <svg width="16" height="9" viewBox="0 0 16 9" fill="none" className="transform rotate-90">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 1.38462L14.5455 0L8 6.23077L1.45455 0L0 1.38462L8 9L16 1.38462Z" fill="currentColor"></path>
          </svg>
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-transparent hover:border-stone-400 hover:bg-brand-taupe hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex"
          aria-label="Next slide"
        >
           <svg width="16" height="9" viewBox="0 0 16 9" fill="none" className="transform -rotate-90">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 1.38462L14.5455 0L8 6.23077L1.45455 0L0 1.38462L8 9L16 1.38462Z" fill="currentColor"></path>
          </svg>
        </button>

        {/* Scroller Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 no-scrollbar snap-x snap-mandatory pb-8"
        >
          {SERVICE_SLIDER_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[85vw] md:w-[30vw] lg:w-[22vw] relative snap-center group/card cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-none md:rounded-sm">
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                
                {/* Content Overlay - mimicking the reference structure */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 items-start">
                  <h3 className="text-white text-2xl md:text-3xl font-serif font-medium tracking-wide mb-4 transform translate-y-0 transition-transform duration-300">
                    {item.title.toUpperCase()}
                  </h3>
                  <a 
                    href={item.link}
                    className="inline-block px-8 py-3 border border-white text-white text-xs tracking-widest uppercase hover:bg-brand-taupe hover:border-brand-taupe transition-colors duration-300"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSlider;