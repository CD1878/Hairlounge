import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/services/female-cuts" element={
          <ServiceDetailPage
            title="Female Cuts"
            image="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=80"
            description="Precision haircuts tailored to your lifestyle and face shape. Whether you want a trim or a complete transformation, we ensure you leave feeling confident."
            treatments={[
              { name: "Wash, Cut & Blowdry", desc: "The full experience. Includes a relaxing wash, a precision cut, and a professional blowdry finish." },
              { name: "Restyle Cut", desc: "Thinking of a big change? We take extra time to consult and create a completely new look for you." },
              { name: "Fringe Trim", desc: "Keep your bangs looking sharp between appointments." }
            ]}
          />
        } />

        <Route path="/services/color" element={
          <ServiceDetailPage
            title="Female Color"
            image="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1600&q=80"
            description="From subtle highlights to bold transformations. We use premium products to protect your hair's health while achieving the perfect shade."
            treatments={[
              { name: "Full Head Highlights", desc: "Brighten up your entire look with full head highlights for maximum impact." },
              { name: "Balayage", desc: "Hand-painted technique for a natural, sun-kissed look with softer regrowth." },
              { name: "Root Touch-up", desc: "Cover greys or maintain your base color." },
              { name: "Toner / Gloss", desc: "Refresh your color and add shine in between major appointments." }
            ]}
          />
        } />

        <Route path="/services/treatments" element={
          <ServiceDetailPage
            title="Treatments"
            image="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80"
            description="Restore health and shine to your hair. Our treatments are designed to repair damage, add moisture, and improve manageability."
            treatments={[
              { name: "Olaplex Architecture", desc: "The ultimate repair treatment to rebuild broken bonds in the hair." },
              { name: "Hydration Mask", desc: "Deep conditioning for dry, thirsty hair." },
              { name: "Scalp Treatment", desc: "Soothing care for a healthy scalp foundation." }
            ]}
          />
        } />

        <Route path="/services/men" element={
          <ServiceDetailPage
            title="Men"
            image="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80"
            description="Sharp cuts and grooming for the modern man. Relax in our chair and enjoy a professional service."
            treatments={[
              { name: "Men's Cut", desc: "Classic or modern cuts, finished with styling." },
              { name: "Clipper Cut", desc: "One grade all over for a clean, sharp look." },
              { name: "Beard Trim", desc: "Shape and tidy your beard to perfection." }
            ]}
          />
        } />

        <Route path="/services/barber" element={
          <ServiceDetailPage
            title="Barber"
            image="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80"
            description="Expert grooming for men. From classic cuts to skin fades and beard trims."
            treatments={[
              { name: "Men's Cut", desc: "Consultation, wash, cut, and style." },
              { name: "Skin Fade", desc: "Precision fade with foil finish." },
              { name: "Beard Trim", desc: "Shape up and trim with razor lining." }
            ]}
          />
        } />

        <Route path="/services/packages" element={
          <ServiceDetailPage
            title="Signature Packages"
            image="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1600&q=80"
            description="Indulge in our curated packages for the ultimate hair transformation."
            treatments={[
              { name: "Cut & Color Refresh", desc: "Root touch-up, cut, and blowdry." },
              { name: "Blonde Ambition", desc: "Half head highlights, toner, treatment, cut, and blowdry." },
              { name: "Total Transformation", desc: "Full color change, treatment, and restyle cut." }
            ]}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;