import React from 'react';

const SalonizedWidget: React.FC = () => {
    return (
        <div className="w-full bg-brand-white py-8 md:py-12 flex flex-col items-center justify-center">

            {/* Rating Number */}
            <div className="text-7xl md:text-8xl font-serif text-[#C4A48C] mb-2 leading-none">
                4.7
            </div>

            {/* Stars */}
            <div className="flex space-x-2 text-[#C4A48C] text-xl md:text-2xl mb-3">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
            </div>

            {/* Review Count */}
            <div className="text-stone-500 font-sans text-sm md:text-base tracking-widest uppercase mb-8">
                based on 514 reviews
            </div>

            {/* Footer Row (Logo + Link) */}
            <div className="flex items-center justify-center space-x-8">
                {/* Salonized Logo */}
                <div className="flex items-center text-stone-300 font-sans font-bold text-xl select-none">
                    <span className="font-bold mr-1 text-2xl">S</span> salonized
                </div>

                {/* See All Link */}
                <a
                    href="https://www.google.com/search?q=hairlounge+amsterdam+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-[#C4A48C] text-sm font-sans flex items-center transition-colors"
                >
                    See all <span className="ml-2 text-xs">&gt;</span>
                </a>
            </div>
        </div>
    );
};

export default SalonizedWidget;
