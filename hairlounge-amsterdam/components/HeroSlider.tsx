import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover opacity-80"
          />
          {/* Subtle Overlay to ensure text readability if we add any, or just to mute the image slightly */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* Visual Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              index === currentSlide ? 'w-8 bg-brand-white' : 'w-2 bg-brand-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;