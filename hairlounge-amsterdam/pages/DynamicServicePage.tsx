import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';
import ServicePageCarousel from '../components/ServicePageCarousel';
import { TEXT_SERVICES } from '../constants';

const DynamicServicePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Scroll to section on mount and when id changes
    useEffect(() => {
        // Use timeout to ensure DOM is updated after route change
        setTimeout(() => {
            const element = document.getElementById('service-details');
            if (element) {
                const headerOffset = 140; // Gives a bit of breathing room below the header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo(0, 0);
            }
        }, 100);
    }, [id]);

    // Find the specific service data based on the URL parameter
    const serviceData = TEXT_SERVICES.find(s => s.id === id);

    // If the service doesn't exist, redirect back to the main services page
    if (!serviceData) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white bg-brand-white">
            <Header />

            <main className="pt-20 md:pt-32 pb-20">
                {/* 1. Global Carousel on Top */}
                <ServicePageCarousel />

                {/* 2. Specific Service Details */}
                <section id="service-details" className="py-16 md:py-24 max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6 text-brand-black">{serviceData.title}</h1>
                        <p className="text-brand-dark/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap">
                            {serviceData.overview}
                        </p>
                    </div>

                    <div className="space-y-12">
                        {serviceData.options.map((option, idx) => (
                            <div key={idx} className="bg-white p-8 md:p-12 rounded-[20px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-2xl md:text-3xl font-serif text-brand-black mb-4">{option.name}</h3>
                                <p className="text-brand-dark/70 text-lg leading-relaxed mb-8">
                                    {option.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 gap-y-10">
                                    {option.included && option.included.length > 0 && (
                                        <div>
                                            <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-brand-taupe mb-4">Included</h4>
                                            <ul className="space-y-3">
                                                {option.included.map((item, i) => (
                                                    <li key={i} className="flex items-start text-brand-dark/80 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-brand-taupe rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {option.idealFor && option.idealFor.length > 0 && (
                                        <div>
                                            <h4 className="text-xs tracking-[0.2em] font-bold uppercase text-brand-taupe mb-4">Ideal For</h4>
                                            <ul className="space-y-3">
                                                {option.idealFor.map((item, i) => (
                                                    <li key={i} className="flex items-start text-brand-dark/80 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <a
                            href="https://widget.treatwell.nl/salon/hairlounge-amsterdam-1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-black text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-brand-taupe transition-all duration-300 shadow-xl"
                        >
                            Book Your Appointment
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
            <MobileBookingButton />
        </div>
    );
};

export default DynamicServicePage;
