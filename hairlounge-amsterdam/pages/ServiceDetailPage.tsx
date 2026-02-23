import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';

interface ServiceDetailProps {
    title: string;
    description: string;
    image: string;
    treatments: { name: string; price?: string; desc: string }[];
}

const ServiceDetailPage: React.FC<ServiceDetailProps> = ({ title, description, image, treatments }) => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white">
            <Header />

            <main>
                {/* Hero / Header Image */}
                <div className="relative h-[60vh] overflow-hidden rounded-b-[20px]">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/30 backdrop-blur-sm px-10 py-6 rounded-2xl shadow-2xl border border-white/10 max-w-4xl mx-4 text-center">
                            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wide">{title}</h1>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <section className="bg-brand-white py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xl font-serif leading-relaxed text-center mb-16 text-brand-dark/80">
                            {description}
                        </p>

                        <div className="space-y-12">
                            {treatments.map((t, idx) => (
                                <div key={idx} className="border-b border-brand-dark/10 pb-8 last:border-0 relative group">
                                    <div className="flex justify-between items-baseline mb-3">
                                        <h3 className="text-2xl font-serif text-brand-black">{t.name}</h3>
                                        {t.price && <span className="text-lg font-sans text-brand-taupe">{t.price}</span>}
                                    </div>
                                    <p className="text-brand-dark/60 font-sans leading-relaxed max-w-2xl">
                                        {t.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <a href="https://www.treatwell.nl/kapsalon/hairlounge-amsterdam/" target="_blank" rel="noopener noreferrer"
                                className="inline-block bg-brand-black text-white px-10 py-4 text-sm tracking-[0.25em] uppercase hover:bg-brand-taupe transition-colors duration-300 shadow-xl">
                                Book Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <MobileBookingButton />
        </div>
    );
};

export default ServiceDetailPage;
