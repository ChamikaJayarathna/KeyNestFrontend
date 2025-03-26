import React from "react";
import backgroundImage from "../assets/Images/background.jpeg";
import SearchCom from "./SearchCom";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* <NavBar /> */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="backgroundImage"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-custom-teal-blue/100 to-custom-teal-blue/40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Home Description Here
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Home Description Here Home Description Here
        </p>

        <div className="mt-8 w-full max-w-3xl">
          <SearchCom />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
