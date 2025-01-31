import React from 'react';
import HeroSection from '../components/HeroSection';
import PropertyTypes from '../components/PropertyTypes';

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-auto scroll-smooth">
      <section className="h-screen w-full">
        <HeroSection />
      </section>
      <section className="h-screen w-full">
        <PropertyTypes />
      </section>
    </div>
  );
}

export default Home;