import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BootsSection from './components/BootsSection';
import HoodiesBanner from './components/HoodiesBanner';
import HoodiesSection from './components/HoodiesSection';
import HatsBanner from './components/HatsBanner';
import HatsSection from './components/HatsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BootsSection />
        <HoodiesBanner />
        <HoodiesSection />
        <HatsBanner />
        <HatsSection />
      </main>
      <Footer />
    </>
  );
}
