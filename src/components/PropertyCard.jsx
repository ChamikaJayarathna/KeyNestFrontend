import React from "react";
import { FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const PropertyCard = () => {
  return (
    <div className="w-[305px] h-[380px] max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Apartment"
          className="w-full h-[190px] object-cover"
        />
      </div>

      <div className="">
        <span className="inline-block bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-lg">
          For Sell
        </span>

        <button className="w-8 h-8 bg-teal-600 text-white flex items-center justify-center rounded-full shadow-md">
          <IoMdAdd size={20} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mt-2">
          The Property Name
        </h3>

        <p className="flex items-center text-gray-500 text-sm mt-1">
          <FaMapMarkerAlt className="mr-1" /> 001, Name Road, City
        </p>

        <p className="text-gray-400 text-sm mt-1">#apartment #urban</p>
      </div>

      {/* card footer */}
      <div className="w-full h-[49px] px-4 bg-red-600 flex justify-between items-center">

        <span className="text-lg font-bold text-gray-800">
          LKR 102,000 <span className="text-sm text-gray-500">/Sqft</span>
        </span>
        <span className="text-lg font-bold text-gray-800">Apartment</span>
      </div>
    </div>
  );
};

export default PropertyCard;
