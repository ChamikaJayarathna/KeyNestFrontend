import React from 'react';
import HeroSection from '../components/HeroSection';
import PropertyTypes from '../components/PropertyTypes';

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-auto scroll-smooth">
      <section className="h-screen w-full">
        <HeroSection />
      </section>
      <section className="h-screen w-full flex justify-center items-center bg-gray-100">
        <PropertyTypes />
      </section>
    </div>
  );
}

export default Home;