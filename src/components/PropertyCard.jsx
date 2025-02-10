import React from 'react';
import { FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const PropertyCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
    {/* Image Section */}
    <div className="relative">
      <img
        src="https://source.unsplash.com/400x250/?apartment,modern"
        alt="Apartment"
        className="w-full h-56 object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="p-4">
      {/* For Sale Badge */}
      <span className="inline-block bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-lg">
        For Sell
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mt-2">The Property Name</h3>

      {/* Location */}
      <p className="flex items-center text-gray-500 text-sm mt-1">
        <FaMapMarkerAlt className="mr-1" /> 001, Name Road, City
      </p>

      {/* Tags */}
      <p className="text-gray-400 text-sm mt-1">#apartment #urban</p>
    </div>

    {/* Footer Section */}
    <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
      {/* Price */}
      <span className="text-lg font-bold text-gray-800">
        LKR 102,000 <span className="text-sm text-gray-500">/Sqft</span>
      </span>

      {/* Extra Icons */}
      <div className="flex items-center space-x-3">
        {/* Parking Icon */}
        <div className="flex items-center text-gray-400 text-sm">
          <FaCar className="mr-1" /> 03
        </div>

        {/* Plus Icon */}
        <button className="w-8 h-8 bg-teal-600 text-white flex items-center justify-center rounded-full shadow-md">
          <IoMdAdd size={20} />
        </button>
      </div>
    </div>
  </div>
  );
}

export default PropertyCard;