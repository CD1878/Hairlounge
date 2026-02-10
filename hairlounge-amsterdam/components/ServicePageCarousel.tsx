import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SERVICE_CAROUSEL_ITEMS } from '../constants';

const ServicePageCarousel: React.FC = () => {
    const scrollToService = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 md:py-20 bg-brand-white border-b border-brand-black/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif mb-4">Explore Our Menu</h2>
                    <p className="text-brand-dark/60">Click a service to view details</p>
                </div>

                <div className="relative group px-4 md:px-12">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        loop={true}
                        speed={800}
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
                                slidesPerView: 3,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 4,
                                centeredSlides: false,
                            },
                        }}
                        className="service-page-carousel pb-12 !overflow-visible"
                    >
                        {SERVICE_CAROUSEL_ITEMS.map((item) => (
                            <SwiperSlide key={item.id} className="h-auto">
                                <div
                                    onClick={() => scrollToService(item.id)}
                                    className="flex flex-col items-center text-center cursor-pointer group/card hover:-translate-y-2 transition-transform duration-500"
                                >
                                    {/* Circular Image Container */}
                                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl mb-6 border-4 border-white relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors duration-300"></div>
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-xl md:text-2xl font-serif mb-3 text-brand-black group-hover/card:text-brand-taupe transition-colors">{item.title}</h3>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed max-w-[200px]">
                                        {item.description}
                                    </p>

                                    {/* Arrow Icon */}
                                    <div className="mt-4 opacity-0 transform translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 text-brand-taupe">
                                        <i className="fa-solid fa-arrow-down"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
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
