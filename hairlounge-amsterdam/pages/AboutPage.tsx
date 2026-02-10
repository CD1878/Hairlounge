import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white bg-brand-white">
            <Header />

            <main>
                {/* 1. Hero / Title Section */}
                <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1600&q=80"
                        alt="Hairlounge Salon Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide">Our Story</h1>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-24">

                    {/* Philosophy Section */}
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                        <div className="order-2 md:order-1">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80"
                                    alt="Stylist working"
                                    className="rounded-sm shadow-2xl relative z-10"
                                />
                                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-taupe/20 -z-0"></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-brand-black">More Than Just Hair</h2>
                            <p className="text-brand-dark/70 text-lg leading-relaxed mb-6 font-sans">
                                Founded in the heart of Amsterdam, Hairlounge was born from a desire to create a sanctuary where luxury meets comfort.
                                We believe that a haircut is not just a service—it's an experience that should leave you feeling refreshed and empowered.
                            </p>
                            <p className="text-brand-dark/70 text-lg leading-relaxed font-sans">
                                Our philosophy is simple: listen, create, and care. We take the time to understand your unique style and needs,
                                using only the finest sustainable products to ensure your hair stays healthy and vibrant.
                            </p>
                        </div>
                    </div>

                    {/* Team Section */}
                    <section className="text-center mb-12">
                        <span className="bg-brand-taupe/10 text-brand-taupe px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase">The Talent</span>
                        <h2 className="text-4xl md:text-6xl font-serif mt-6 mb-8">Meet The Team</h2>
                        <p className="max-w-xl mx-auto text-brand-dark/60 mb-16">
                            The creative minds behind your new look. Dedicated, passionate, and expert in their craft.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                            {[
                                { name: 'Sarah', role: 'Master Stylist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80' },
                                { name: 'Michael', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
                                { name: 'Emma', role: 'Color Specialist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' }
                            ].map((member, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-[2.5rem] mb-6 bg-gray-100 aspect-[3/4]">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-serif text-brand-black mb-1">{member.name}</h3>
                                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-taupe">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="bg-brand-black text-white p-12 md:p-24 text-center rounded-sm mt-20">
                        <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready for a Change?</h2>
                        <a href="https://www.treatwell.nl/kapsalon/hairlounge-amsterdam/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-brand-black px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-brand-taupe hover:text-white transition-all duration-300">
                            Book Your Appointment
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
            <MobileBookingButton />
        </div>
    );
};

export default AboutPage;
