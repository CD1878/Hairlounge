import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';

const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white">
            <Header />
            <main className="pt-20 md:pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Get In Touch</h1>
                    <p className="text-brand-dark/70 text-lg md:text-xl max-w-2xl mx-auto">
                        Ready for your next look? Book online or give us a call.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    {/* Contact Info */}
                    <div className="space-y-16">
                        {/* Visit Us */}
                        <div className="relative pl-6 border-l-2 border-brand-taupe/30">
                            <h3 className="font-serif text-3xl mb-6 text-brand-black">Visit Us</h3>
                            <address className="text-lg leading-relaxed text-brand-dark/80 not-italic font-sans">
                                <span className="block mb-1">Nieuwezijds Voorburgwal 152B</span>
                                <span className="block mb-1">1012 SJ Amsterdam</span>
                                <span className="block text-brand-taupe">The Netherlands</span>
                            </address>
                        </div>

                        {/* Opening Hours */}
                        <div className="relative pl-6 border-l-2 border-brand-taupe/30">
                            <h3 className="font-serif text-3xl mb-6 text-brand-black">Opening Hours</h3>
                            <ul className="space-y-4 text-brand-dark/80 font-sans text-lg w-full max-w-[300px]">
                                <li className="grid grid-cols-[100px_1fr] items-center border-b border-gray-100 pb-3">
                                    <span className="font-medium">Daily</span>
                                    <span className="text-brand-black">10:00 - 19:00</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="relative pl-6 border-l-2 border-brand-taupe/30">
                            <h3 className="font-serif text-3xl mb-6 text-brand-black">Contact</h3>
                            <div className="flex flex-col space-y-4 text-lg text-brand-dark/80 font-sans">
                                <div>
                                    <a href="tel:+31641713035" className="flex items-center hover:text-brand-taupe transition-colors group">
                                        <i className="fa-solid fa-phone text-xs mr-4 text-brand-taupe/60 group-hover:text-brand-taupe"></i>
                                        +31 64 171 3035
                                    </a>
                                    <p className="text-sm text-brand-dark/50 mt-1 ml-8">
                                        Phone bookings available between 09:00 – 18:00
                                    </p>
                                </div>
                                <a href="mailto:info@hairlounge-amsterdam.nl" className="flex items-center hover:text-brand-taupe transition-colors group">
                                    <i className="fa-solid fa-envelope text-xs mr-4 text-brand-taupe/60 group-hover:text-brand-taupe"></i>
                                    info@hairlounge-amsterdam.nl
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Simple Form */}
                    <div className="bg-brand-white p-8 md:p-12 shadow-soft rounded-sm">
                        <h3 className="font-serif text-2xl mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-brand-taupe">Name</label>
                                <input type="text" className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-brand-taupe transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-brand-taupe">Email</label>
                                <input type="email" className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-brand-taupe transition-colors" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-brand-taupe">Message</label>
                                <textarea className="w-full bg-white border border-gray-200 p-4 h-32 focus:outline-none focus:border-brand-taupe transition-colors" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-black text-white py-4 text-sm tracking-[0.25em] uppercase hover:bg-brand-taupe transition-colors duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className="mt-20 w-full h-[400px] rounded-[20px] overflow-hidden shadow-soft border border-gray-100">
                    <iframe
                        title="Hairlounge Amsterdam Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.529851631551!2d4.891462015802094!3d52.37305997978643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c11578e937%3A0x1348877546872594!2sNieuwezijds%20Voorburgwal%20152B%2C%201012%20SJ%20Amsterdam!5e0!3m2!1sen!2snl!4v1676660000000!5m2!1sen!2snl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </main>
            <Footer />
            <MobileBookingButton />
        </div>
    );
};

export default ContactPage;
