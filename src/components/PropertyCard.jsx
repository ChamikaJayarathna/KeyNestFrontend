import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const PropertyCard = ({ property }) => {
  return (
    <div className="w-[305px] h-[360px] max-w-sm bg-gray-50 rounded-2xl shadow-lg overflow-hidden mt-10">
      <img
        src={property?.images[0]}
        className="w-full h-[190px] object-cover"
      />

      <div className="flex gap-3 items-center p-3">
        <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 border flex items-center">
          {property?.type}
        </span>
        <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 border ml-[-1px]">
          {property?.property}
        </span>
      </div>

      <div className="flex justify-between items-start pb-2 pl-4 pr-5">
        <div>
          <h3 className="text-base font-bold text-black">{property?.title}</h3>
          <p className="flex items-center text-gray-500 text-sm mt-1">
            <FaMapMarkerAlt className="mr-1 text-gray-400" />
            {property?.address}
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-300 mx-auto w-[92%]"/>

      <div className="flex items-center justify-between px-3 py-3">
        <span className="text-base font-bold text-custom-teal-blue">
          <span className="font-bold">LKR {property?.price}</span>
          <span className="text-sm text-gray-500 font-normal"> /Sqft</span>
        </span>
        <h2 className="text-primary text-sm flex gap-2 items-center">
          View Details
          <MdOpenInNew />
        </h2>
      </div>
    </div>
  );
};

export default PropertyCard;
