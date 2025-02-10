import React from 'react';
import { LuHousePlus } from 'react-icons/lu';
import { MdOutlineHolidayVillage, MdOutlineVilla } from 'react-icons/md';
import { PiBuildingOfficeBold } from 'react-icons/pi';
import { RiCameraLensLine } from 'react-icons/ri';
import RealEstateCard from './RealEstateCard';

const PropertyTypes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-custom-teal-blue mb-2">Featured Property Listed</h2>
            <p className="text-gray-600">Find All Type Of Property</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
            <RealEstateCard 
                icon={<LuHousePlus/>}
                title="Family House"
                subtitle="122 Property"
            />

            <RealEstateCard 
                icon={<MdOutlineVilla/>}
                title="House & Villa"
                subtitle="155 Property"
            />

            <RealEstateCard 
                icon={<PiBuildingOfficeBold />}
                title="Apartment"
                subtitle="300 Property"
            />

            <RealEstateCard 
                icon={<RiCameraLensLine />}
                title="Studio"
                subtitle="80 Property"
            />

            <RealEstateCard 
                icon={<MdOutlineHolidayVillage /> }
                title="Villa & Condo"
                subtitle="80 Property"
            />
        </div>
    </div>
  );
}

export default PropertyTypes;