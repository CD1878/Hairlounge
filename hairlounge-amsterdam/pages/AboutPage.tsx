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
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/30 backdrop-blur-sm px-10 py-6 rounded-2xl shadow-2xl border border-white/10">
                            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide">Our Story</h1>
                        </div>
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
                                    className="rounded-[20px] shadow-2xl relative z-10"
                                />
                                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-taupe/20 -z-0"></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-brand-black">About Us</h2>
                            <p className="text-brand-dark/70 text-lg leading-relaxed mb-6 font-sans">
                                We are a modern salon in the heart of Amsterdam, offering quality work, relaxed experience, and results that satisfy. We work with modern, versatile techniques and place strong emphasis on keeping your hair healthy.
                            </p>
                            <p className="text-brand-dark/70 text-lg leading-relaxed mb-6 font-sans">
                                Every appointment starts with a conversation. We listen, give clear advice, and work with you to achieve a result that suits your hair and your lifestyle.
                            </p>
                            <p className="text-brand-dark/70 text-lg leading-relaxed mb-8 font-sans">
                                Whether you’re coming in for maintaining your style or for a complete transformation, our goal is simple: you leave feeling confident and excited about your hair.
                                <br /><br />
                                <strong>No rush. No pressure. Just good hair, done properly.</strong>
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mt-12 bg-gray-50 p-8 rounded-[20px] border border-gray-100">
                                <div>
                                    <h3 className="text-xl font-serif mb-4 text-brand-black">Our Philosophy</h3>
                                    <ul className="space-y-3">
                                        {['Listen Attentively', 'Advise honestly', 'Work precisely'].map((item) => (
                                            <li key={item} className="flex items-center text-brand-dark/80 text-sm tracking-wide uppercase font-medium">
                                                <span className="w-1.5 h-1.5 bg-brand-taupe rounded-full mr-3"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif mb-4 text-brand-black">What You Can Expect</h3>
                                    <ul className="space-y-3">
                                        {['Welcoming, relaxed atmosphere', 'Clear communication', 'Transparent service structure', 'Attention to detail', 'Result you feel confident about'].map((item) => (
                                            <li key={item} className="flex items-center text-brand-dark/80 text-sm tracking-wide uppercase font-medium">
                                                <span className="w-1.5 h-1.5 bg-brand-taupe rounded-full mr-3"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
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
                                    <div className="relative overflow-hidden rounded-[20px] mb-6 bg-gray-100 aspect-[3/4]">
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
