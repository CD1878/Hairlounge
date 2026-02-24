import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';

const GalleryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Dynamically load the Elfsight script for the Instagram feed
        const script = document.createElement('script');
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup if necessary, though usually fine to leave it
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Portfolio</h1>
                    <p className="text-brand-dark/70 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore our latest work and daily inspiration directly from our Instagram.
                    </p>
                </div>

                {/* Elfsight Instagram Feed Container */}
                <div className="w-full">
                    <div className="elfsight-app-af4a2629-5409-4fa2-aed5-6e3edefa4fe1" data-elfsight-app-lazy></div>
                </div>

                {/* Optional Follow Section */}
                <section className="mt-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-sand/30 rounded-full mb-6 text-brand-black hover:bg-brand-taupe hover:text-white transition-colors cursor-pointer" onClick={() => window.open('https://www.instagram.com/hairloungeamsterdam1/', '_blank')}>
                        <i className="fa-brands fa-instagram text-3xl"></i>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif mb-4">@hairloungeamsterdam1</h2>
                    <p className="text-brand-dark/60 mb-8">Follow us for the latest updates and inspiration.</p>

                    <a
                        href="https://www.instagram.com/hairloungeamsterdam1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-black text-white px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-brand-taupe transition-colors"
                    >
                        Follow on Instagram
                    </a>
                </section>
            </main>
            <Footer />
            <MobileBookingButton />
        </div>
    );
};

export default GalleryPage;
