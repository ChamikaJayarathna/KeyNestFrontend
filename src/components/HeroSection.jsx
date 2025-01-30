import React from 'react';
import backgroundImage from '../assets/Images/background.jpeg';
import SearchCom from './SearchCom';

const HeroSection = () => {
  return (
    <div className='min-h-screen w-full'>
        <div className="absolute inset-0">
            <img src={backgroundImage} alt="backgroundImage" className='h-full w-full object-cover'/>
            <div className="absolute inset-0 bg-gradient-to-b from-custom-teal-blue/100 to-custom-teal-blue/40"></div>
        </div>
        <div className="relative z-10 mx-auto mt-48 max-w-4xl text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Home Description Here</h2>
            <p className="mt-4 text-lg md:text-xl text-white/90">Home Description Here Home Description Here</p>
        </div>
        <div className="mt-6 flex justify-center">
          <SearchCom />
        </div>
    </div>
  );
}

export default HeroSection;