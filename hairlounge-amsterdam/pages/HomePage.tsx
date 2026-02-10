import React from 'react';
import Header from '../components/Header';
import ServiceCarousel from '../components/ServiceCarousel';
import SalonizedWidget from '../components/SalonizedWidget';
import ServiceCardSlider from '../components/ServiceCardSlider';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';

const HomePage: React.FC = () => {
    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white">
            <Header />

            <main>
                {/* 1. Services Carousel (Moved to Top) */}
                <ServiceCarousel />

                {/* Salonized Review Widget */}
                <SalonizedWidget />

                {/* 2. Gallery / Portfolio Section (Stacked Images) */}
                <ServiceCardSlider />

                {/* 3. Reviews Section */}
                <Reviews />
            </main>

            <Footer />

            {/* Sticky Mobile Booking Button */}
            <MobileBookingButton />
        </div>
    );
};

export default HomePage;
