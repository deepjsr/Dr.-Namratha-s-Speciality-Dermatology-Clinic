import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ViewTransitions from './components/ViewTransitions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ClinicalDermatology from './pages/ClinicalDermatology';
import CosmeticDermatology from './pages/CosmeticDermatology';
import TrichologyHair from './pages/TrichologyHair';
import SkinProcedures from './pages/SkinProcedures';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { clinic } from './data/site';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <ViewTransitions>
          {(location) => (
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/clinical-dermatology" element={<ClinicalDermatology />} />
              <Route path="/services/cosmetic-dermatology" element={<CosmeticDermatology />} />
              <Route path="/services/hair-treatments" element={<TrichologyHair />} />
              <Route path="/services/skin-procedures" element={<SkinProcedures />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </ViewTransitions>
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${clinic.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat on WhatsApp with ${clinic.name}`}
      >
        <span className="floating-whatsapp__icon">💬</span>
        <span className="floating-whatsapp__text">WhatsApp</span>
      </a>
    </>
  );
}
