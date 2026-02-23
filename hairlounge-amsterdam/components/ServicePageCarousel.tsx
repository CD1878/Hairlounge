import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SERVICE_CAROUSEL_ITEMS } from '../constants';

const ServicePageCarousel: React.FC = () => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const hoveredIdRef = useRef<string | null>('signature-packages');

    useEffect(() => {
        if (!swiperRef.current) return;

        const handleCardClickNative = (id: string) => {
            hoveredIdRef.current = id;
            updateVisuals();

            const accordionElement = document.getElementById(id);
            if (accordionElement) {
                const header = accordionElement.querySelector('.cursor-pointer') as HTMLElement;
                const bodyDiv = accordionElement.lastElementChild;
                const isClosed = bodyDiv && bodyDiv.classList.contains('max-h-0');

                if (isClosed && header) {
                    // Start opening the accordion header visually natively
                    header.click();
                } else {
                    // Scroll directly natively
                    const headerOffset = 100;
                    const elementPosition = accordionElement.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - headerOffset,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const handleClick = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            const id = target.getAttribute('data-service-id');
            if (id) handleCardClickNative(id);
        };

        const handleEnter = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            const id = target.getAttribute('data-service-id');
            if (id) {
                hoveredIdRef.current = id;
                updateVisuals();
            }
        };

        const updateVisuals = () => {
            const cards = swiperRef.current?.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;

            cards?.forEach(card => {
                const id = card.getAttribute('data-service-id');
                const isHovered = hoveredIdRef.current === id;
                const isDimmed = hoveredIdRef.current !== null && !isHovered;

                // Wrap the card scale & dim
                if (isHovered) {
                    card.classList.remove('scale-90', 'opacity-40', 'blur-[1px]', 'scale-100');
                    card.classList.add('scale-110', 'opacity-100', 'z-10');
                } else if (isDimmed) {
                    card.classList.remove('scale-110', 'z-10', 'scale-100', 'opacity-100');
                    card.classList.add('scale-90', 'opacity-40', 'blur-[1px]');
                } else {
                    card.classList.remove('scale-110', 'z-10', 'scale-90', 'opacity-40', 'blur-[1px]');
                    card.classList.add('scale-100', 'opacity-100');
                }

                // Text Dropdown
                const textContainer = card.querySelector('.service-text-container');
                if (textContainer) {
                    if (isHovered) {
                        textContainer.classList.remove('max-h-0', 'opacity-0', 'mt-0');
                        textContainer.classList.add('max-h-48', 'opacity-100', 'mt-1');
                    } else {
                        textContainer.classList.remove('max-h-48', 'opacity-100', 'mt-1');
                        textContainer.classList.add('max-h-0', 'opacity-0', 'mt-0');
                    }
                }

                // Arrow indicator
                const arrowIcon = card.querySelector('.service-arrow');
                if (arrowIcon) {
                    if (isHovered) {
                        arrowIcon.classList.remove('opacity-0', 'translate-y-2');
                        arrowIcon.classList.add('opacity-100', 'translate-y-0');
                    } else {
                        arrowIcon.classList.remove('opacity-100', 'translate-y-0');
                        arrowIcon.classList.add('opacity-0', 'translate-y-2');
                    }
                }
            });
        };

        const attachListenersToClones = () => {
            // Attach securely to ALL slides to bypass React virtual DOM disconnections
            const cards = swiperRef.current?.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;
            cards?.forEach(card => {
                card.removeEventListener('click', handleClick);
                card.removeEventListener('mouseenter', handleEnter);

                card.addEventListener('click', handleClick);
                card.addEventListener('mouseenter', handleEnter);
            });
            updateVisuals();
        };

        const timeout = setTimeout(attachListenersToClones, 500);

        const observer = new MutationObserver((mutations) => {
            attachListenersToClones();
        });

        const swiperContainer = swiperRef.current.querySelector('.swiper-wrapper');
        if (swiperContainer) {
            observer.observe(swiperContainer, { childList: true });
        }

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
            const cards = swiperRef.current?.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;
            cards?.forEach(card => {
                card.removeEventListener('click', handleClick);
                card.removeEventListener('mouseenter', handleEnter);
            });
        };
    }, []);

    return (
        <section className="py-12 md:py-20 bg-brand-white border-b border-brand-black/5" id="explore-menu">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif mb-4">Explore Our Menu</h2>
                    <p className="text-brand-dark/60">Click a service to view details</p>
                </div>

                <div className="relative group px-4 md:px-12" ref={swiperRef}>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        loop={true}
                        speed={800}
                        onSlideChange={(swiper) => {
                            // Update via direct CSS, not React state
                            const currentItem = SERVICE_CAROUSEL_ITEMS[swiper.realIndex];
                            if (currentItem) {
                                hoveredIdRef.current = currentItem.id;
                                // Need to trigger updateVisuals here, but we can't easily access the inner function
                                // Instead, we dispatch a custom event or just let the Swiper loop do its thing.
                                // Actually, since we only use realIndex for centering, let's just use DOM:
                                const el = swiper.slides[swiper.activeIndex]?.querySelector('.service-card') as HTMLElement;
                                if (el) {
                                    const id = el.getAttribute('data-service-id');
                                    if (id) {
                                        hoveredIdRef.current = id;
                                        // The easiest hack to run updateVisuals is dispatching a mouseenter to self
                                        el.dispatchEvent(new Event('mouseenter'));
                                    }
                                }
                            }
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-svc',
                            prevEl: '.swiper-button-prev-svc',
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.2,
                                centeredSlides: false,
                            },
                            768: {
                                slidesPerView: 3.2,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 4.2,
                                centeredSlides: false,
                            },
                        }}
                        className="service-page-carousel pb-12 !overflow-visible"
                    >
                        {SERVICE_CAROUSEL_ITEMS.map((item) => {
                            // Note: dynamic React classes are removed. State is handled completely
                            // bypass by the useEffect DOM update above to guarantee clones update identically.

                            return (
                                <SwiperSlide key={item.id} className="h-auto">
                                    <div
                                        data-service-id={item.id}
                                        className="service-card flex flex-col items-center text-center cursor-pointer group/card transition-all duration-500 ease-out scale-100 opacity-100"
                                    >
                                        {/* Circular Image Container */}
                                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-[20px] overflow-hidden shadow-xl mb-6 border-4 border-white relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors duration-300"></div>
                                        </div>

                                        {/* Text */}
                                        <h3 className="text-xl md:text-2xl font-serif mb-2 text-brand-black group-hover/card:text-brand-taupe transition-colors">{item.title}</h3>

                                        <div className="service-text-container overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 mt-0">
                                            <p className="text-sm text-brand-dark/60 leading-relaxed max-w-[200px]">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Arrow Icon */}
                                        <div className="service-arrow mt-2 transform transition-all duration-300 text-brand-taupe opacity-0 translate-y-2">
                                            <i className="fa-solid fa-arrow-down"></i>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Custom Nav Buttons */}
                    <div className="swiper-button-prev-svc absolute top-1/2 -left-4 md:-left-8 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white border border-brand-black/10 rounded-full cursor-pointer hover:bg-brand-black hover:text-white transition-all shadow-md text-brand-black">
                        <i className="fa-solid fa-chevron-left text-sm md:text-base"></i>
                    </div>
                    <div className="swiper-button-next-svc absolute top-1/2 -right-4 md:-right-8 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white border border-brand-black/10 rounded-full cursor-pointer hover:bg-brand-black hover:text-white transition-all shadow-md text-brand-black">
                        <i className="fa-solid fa-chevron-right text-sm md:text-base"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicePageCarousel;
