import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';
import { GALLERY_IMAGES } from '../constants';

const GalleryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Optional: Load generic script if one existed
        // functionality for auto-update requires user auth with Instagram
    }, []);

    // Duplicate images to make the gallery look fuller for the demo
    const fullGallery = [...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES];

    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white">
            <Header />
            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Portfolio</h1>
                    <p className="text-brand-dark/70 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore our latest work. From precision cuts to stunning color transformations.
                    </p>
                </div>

                {/* Main Gallery Grid */}
                {/* Main Gallery Grid (Masonry Style) */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mb-32">
                    {fullGallery.map((img, idx) => {
                        // Simulate varying aspect ratios for the "Mosaic" feel
                        const aspectClasses = [
                            'aspect-[3/4]', // Portrait
                            'aspect-square', // Square
                            'aspect-[4/3]', // Landscape
                            'aspect-[3/5]', // Tall Portrait
                        ];
                        const randomAspect = aspectClasses[idx % aspectClasses.length];

                        return (
                            <div key={idx} className={`break-inside-avoid group relative overflow-hidden rounded-[20px] mb-4 ${randomAspect}`}>
                                <img
                                    src={img}
                                    alt={`Gallery image ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Instagram Feed Section */}
                <section className="border-t border-brand-black/5 pt-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-sand/30 rounded-full mb-6 text-brand-black">
                            <i className="fa-brands fa-instagram text-3xl"></i>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif mb-4">@hairloungeamsterdam</h2>
                        <p className="text-brand-dark/60 mb-8">Follow us for the latest updates and inspiration.</p>

                        <a
                            href="https://www.instagram.com/hairloungeamsterdam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-black text-white px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-brand-taupe transition-colors"
                        >
                            Follow on Instagram
                        </a>
                    </div>

                    {/* Widget Container */}
                    <div className="bg-brand-sand/10 p-8 md:p-12 rounded-2xl text-center min-h-[300px] flex flex-col justify-center items-center dashed border-2 border-brand-taupe/20">
                        {/* 
                            TO ACTIVATE AUTO-UPDATE:
                            1. Go to https://behold.so/ (or Elfsight)
                            2. Connect your Instagram account.
                            3. Create a free 'Grid' widget.
                            4. Paste the embed code here.
                         */}

                        <p className="font-serif text-xl md:text-2xl text-brand-dark/40 mb-4 max-w-lg">
                            "To see our live feed here, please connect your Instagram account."
                        </p>
                        <p className="text-xs text-brand-dark/40 uppercase tracking-widest max-w-md mx-auto">
                            (This requires a widget connection due to Instagram privacy policies. You can use free services like Behold.so or Elfsight to generate the code.)
                        </p>

                        {/* 
                            Example Behold.so code:
                            <div data-behold-id="YOUR_ID"></div>
                            <script src="https://w.behold.so/widget.js" type="module"></script>
                         */}
                    </div>
                </section>
            </main>
            <Footer />
            <MobileBookingButton />
        </div>
    );
};

export default GalleryPage;
