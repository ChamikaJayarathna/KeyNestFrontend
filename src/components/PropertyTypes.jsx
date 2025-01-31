import React from 'react';
import PropertyCard from './PropertyCard';
import { LuHousePlus } from 'react-icons/lu';
import { MdOutlineHolidayVillage, MdOutlineVilla } from 'react-icons/md';
import { PiBuildingOfficeBold } from 'react-icons/pi';
import { RiCameraLensLine } from 'react-icons/ri';

const PropertyTypes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-custom-teal-blue mb-2">Featured Property Listed</h2>
            <p className="text-gray-600">Find All Type Of Property</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
            <PropertyCard 
                icon={<LuHousePlus/>}
                title="Family House"
                subtitle="122 Property"
            />

            <PropertyCard 
                icon={<MdOutlineVilla/>}
                title="House & Villa"
                subtitle="155 Property"
            />

            <PropertyCard 
                icon={<PiBuildingOfficeBold />}
                title="Apartment"
                subtitle="300 Property"
            />

            <PropertyCard 
                icon={<RiCameraLensLine />}
                title="Office & Studio"
                subtitle="80 Property"
            />

            <PropertyCard 
                icon={<MdOutlineHolidayVillage /> }
                title="Villa & Condo"
                subtitle="80 Property"
            />
        </div>
    </div>
  );
}

export default PropertyTypes;