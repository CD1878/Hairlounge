import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { HERO_SLIDES } from '../constants';

const ServiceCarousel: React.FC = () => {
    return (
        <section className="bg-brand-white pt-24 pb-0 md:pt-28 md:pb-0 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 relative">

                {/* Desktop Navigation Buttons (Absolute, on sides) */}
                <div className="swiper-button-prev-custom hidden md:flex absolute -left-5 top-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-xl cursor-pointer hover:bg-brand-black hover:text-white transition-all duration-300 group -translate-y-1/2">
                    <i className="fa-solid fa-chevron-left text-sm group-hover:-translate-x-0.5 transition-transform"></i>
                </div>
                <div className="swiper-button-next-custom hidden md:flex absolute -right-5 top-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-xl cursor-pointer hover:bg-brand-black hover:text-white transition-all duration-300 group -translate-y-1/2">
                    <i className="fa-solid fa-chevron-right text-sm group-hover:translate-x-0.5 transition-transform"></i>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={false}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        }
                    }}
                    className="service-carousel"
                    style={{ overflow: 'visible' }}
                >
                    {HERO_SLIDES.map((slide, index) => (
                        <SwiperSlide key={`${slide.id}-${index}`} className="relative group cursor-pointer rounded-sm overflow-hidden">
                            <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden">
                                <a href={slide.link} className="block w-full h-full">
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-12 z-20 px-6 transition-transform duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-white font-serif tracking-widest uppercase mb-6 text-xl md:text-2xl lg:text-3xl drop-shadow-lg text-center leading-tight">
                                            {slide.title}
                                        </h3>

                                        <div className="inline-flex items-center justify-center border border-white/80 px-8 py-3 text-white text-[10px] md:text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-brand-black transition-all duration-300 backdrop-blur-[2px]">
                                            Discover More
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ServiceCarousel;
