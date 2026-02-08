import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ServiceCardSlider from './components/ServiceCardSlider';
import ServicesList from './components/ServicesList';
import GalleryIntro from './components/GalleryIntro';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white">
      <Header />
      
      <main>
        {/* 1. Hero / Top Section: Visual-first slider */}
        <HeroSlider />

        {/* 2. Gallery Preview (The Scroller requested from reference code) */}
        {/* This creates the card layout requested from brushhm.com but styled for Hairlounge */}
        <ServiceCardSlider />

        {/* 3. Services (Text-based, Interactive) */}
        <ServicesList />

        {/* 4. Gallery Intro Section */}
        <GalleryIntro />

        {/* 5. Reviews Section */}
        <Reviews />
      </main>

      <Footer />
    </div>
  );
};

export default App;