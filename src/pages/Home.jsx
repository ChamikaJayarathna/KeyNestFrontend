import React from "react";
import HeroSection from "../components/HeroSection";
import PropertyTypes from "../components/PropertyTypes";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-auto scroll-smooth">
      <section className="h-screen w-full">
        <HeroSection />
      </section>
      <section className="h-screen w-full">
        <PropertyTypes />
      </section>
      <section className="h-screen w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
