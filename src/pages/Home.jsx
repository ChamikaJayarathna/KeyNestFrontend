import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import FeaturedProperty from "@/components/featured-property/FeaturedProperty";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-auto scroll-smooth">
      <Header/>
      <section className="h-screen w-full">
        <HeroSection />
      </section>
      <section className="h-screen w-full">
        <FeaturedProperty />
      </section>
      <section className="h-screen w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
