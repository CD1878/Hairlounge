import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SERVICE_CAROUSEL_ITEMS } from '../constants';

const ServiceCarousel: React.FC = () => {
    const swiperRef = useRef<HTMLDivElement>(null);

    // Fix for Swiper loop + React events:
    // When Swiper clones slides for loop mode (`.swiper-slide-duplicate`),
    // the duplicated <a> tags often lose their click functionality or router context.
    // Also, complex CSS `group-hover` sometimes behaves weirdly on cloned nodes depending
    // on how hydration happens. We attach native event listeners to clones to ensure clicks work.
    // Clean up all the manual hover logic since we're using static styling and CSS now.
    useEffect(() => {
        if (!swiperRef.current) return;

        const handleDuplicateClick = (e: MouseEvent) => {
            e.preventDefault();
            const target = e.currentTarget as HTMLElement;
            const link = target.querySelector('a');
            if (link) {
                const href = link.getAttribute('href');
                if (href) {
                    window.location.href = href;
                }
            }
        };

        // Sometimes tailwind group-hover struggles on clones if dynamically created, 
        // to be absolutely safe we can force hover states via JS class toggling on clones.
        const handleEnter = (e: MouseEvent) => {
            const el = e.currentTarget as HTMLElement;
            el.classList.add('force-hover');

            const img = el.querySelector('img');
            if (img) img.style.transform = 'scale(1.1)';

            const overlay = el.querySelector('.bg-gradient-to-t');
            if (overlay) (overlay as HTMLElement).style.opacity = '1';

            const content = el.querySelector('.pb-10');
            if (content) (content as HTMLElement).style.transform = 'translateY(-0.5rem)';

            const btn = el.querySelector('.inline-flex');
            if (btn) {
                (btn as HTMLElement).style.backgroundColor = 'white';
                (btn as HTMLElement).style.color = '#1f1b1a'; // brand-black
            }
        };

        const handleLeave = (e: MouseEvent) => {
            const el = e.currentTarget as HTMLElement;
            el.classList.remove('force-hover');

            const img = el.querySelector('img');
            if (img) img.style.transform = '';

            const overlay = el.querySelector('.bg-gradient-to-t');
            if (overlay) (overlay as HTMLElement).style.opacity = '';

            const content = el.querySelector('.pb-10');
            if (content) (content as HTMLElement).style.transform = '';

            const btn = el.querySelector('.inline-flex');
            if (btn) {
                (btn as HTMLElement).style.backgroundColor = '';
                (btn as HTMLElement).style.color = '';
            }
        };

        const attachListeners = () => {
            // Attach to only duplicate slides to fix the "dead" click and hover issues
            const clones = swiperRef.current?.querySelectorAll('.swiper-slide-duplicate') as NodeListOf<HTMLElement>;
            clones?.forEach(clone => {
                clone.removeEventListener('click', handleDuplicateClick);
                clone.removeEventListener('mouseenter', handleEnter);
                clone.removeEventListener('mouseleave', handleLeave);

                clone.addEventListener('click', handleDuplicateClick);
                clone.addEventListener('mouseenter', handleEnter);
                clone.addEventListener('mouseleave', handleLeave);
            });
        };

        const timeout = setTimeout(attachListeners, 500);

        const observer = new MutationObserver(() => attachListeners());
        const swiperContainer = swiperRef.current.querySelector('.swiper-wrapper');
        if (swiperContainer) {
            observer.observe(swiperContainer, { childList: true });
        }

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
            const clones = swiperRef.current?.querySelectorAll('.swiper-slide-duplicate') as NodeListOf<HTMLElement>;
            clones?.forEach(clone => {
                clone.removeEventListener('click', handleDuplicateClick);
                clone.removeEventListener('mouseenter', handleEnter);
                clone.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <section className="bg-brand-white pt-32 pb-0 md:pt-40 md:pb-0 overflow-x-hidden" ref={swiperRef}>
            {/* Constrained container for navigation buttons so they align with page content */}
            <div className="w-full max-w-7xl mx-auto px-6 relative h-0">
                {/* Desktop Navigation Buttons (Absolute, on sides) */}
                <div className="swiper-button-prev-custom hidden md:flex absolute -left-5 top-[225px] md:top-[250px] z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-xl cursor-pointer hover:bg-brand-black hover:text-white transition-all duration-300 group -translate-y-1/2">
                    <i className="fa-solid fa-chevron-left text-sm group-hover:-translate-x-0.5 transition-transform"></i>
                </div>
                <div className="swiper-button-next-custom hidden md:flex absolute -right-5 top-[225px] md:top-[250px] z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-xl cursor-pointer hover:bg-brand-black hover:text-white transition-all duration-300 group -translate-y-1/2">
                    <i className="fa-solid fa-chevron-right text-sm group-hover:translate-x-0.5 transition-transform"></i>
                </div>
            </div>

            {/* Full-width Swiper */}
            <div className="w-full">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.4}
                    centeredSlides={true}
                    loop={true}
                    speed={800}
                    loopedSlides={6}
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
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4.2,
                            spaceBetween: 24,
                        }
                    }}
                    className="service-carousel"
                    style={{ overflow: 'visible' }}
                >
                    {[...SERVICE_CAROUSEL_ITEMS, ...SERVICE_CAROUSEL_ITEMS].map((slide, index) => (
                        <SwiperSlide key={`${slide.id}-${index}`} className="relative group cursor-pointer rounded-[20px] overflow-hidden opacity-40 scale-90 [&.swiper-slide-active]:opacity-100 [&.swiper-slide-active]:scale-100 transition-all duration-700">
                            <a href={`/services#${slide.id}`} className="block w-full h-full group">
                                <div className="relative w-full h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-[20px]">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay Gradient (Bottom Only) */}
                                    <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

                                    {/* Content inside image (Title only) */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-8 z-20 px-4 md:px-8 transition-transform duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-white font-serif tracking-widest uppercase mb-0 text-lg md:text-2xl lg:text-3xl drop-shadow-lg text-center leading-tight">
                                            {slide.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description below image */}
                                <div className="mt-4 md:mt-6 px-2 md:px-4 transition-all duration-500">
                                    <p className="text-brand-black/80 text-[14px] md:text-base text-center leading-relaxed font-light mx-auto max-w-[280px]">
                                        {slide.description}
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ServiceCarousel;
