import React from 'react';
import Header from '../components/Header';
import ServicesList from '../components/ServicesList';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';
import ServicePageCarousel from '../components/ServicePageCarousel';

const ServicesPage: React.FC = () => {
    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white">
            <Header />
            <main className="pt-20 md:pt-32 pb-20">
                <ServicePageCarousel />
                <ServicesList />
            </main>
            <Footer />
            <MobileBookingButton />
        </div>
    );
};

export default ServicesPage;
