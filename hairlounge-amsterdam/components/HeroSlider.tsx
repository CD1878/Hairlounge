import React from 'react';
import { HERO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  return (
    <section className="relative pt-28 h-screen md:h-[90vh] bg-brand-white overflow-hidden">
      {/* 
        Gallery Sample Picks (Hero)
        Desktop: 4-Column Grid
        Mobile: Horizontal Scroll Snap
      */}
      <div className="w-full h-full flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-hide">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-auto h-full relative group cursor-pointer snap-center border-r border-brand-white/20 last:border-r-0 overflow-hidden"
          >
            <a href={slide.link} className="block w-full h-full relative">
              <div className="absolute inset-0 transition-transform duration-[2000ms] ease-out group-hover:scale-110">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay Gradient & Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end pb-12 items-center">
                <h3 className="text-white font-serif text-3xl tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {slide.title}
                </h3>
                <span className="text-white/80 text-xs tracking-[0.3em] uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 bg-white/10 px-4 py-2 hover:bg-white hover:text-black">
                  Discover
                </span>
              </div>
              {/* Always visible title on mobile (since hover doesn't exist) */}
              <div className="absolute bottom-10 left-0 right-0 text-center md:hidden">
                <h3 className="text-white font-serif text-3xl tracking-widest uppercase drop-shadow-lg">
                  {slide.title}
                </h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;