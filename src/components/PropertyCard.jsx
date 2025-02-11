import React from "react";
import { BiSolidCarGarage } from "react-icons/bi";
import { FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const PropertyCard = ({ property }) => {
  return (
    <div className="w-[305px] h-[380px] max-w-sm bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={property.img}
          alt="Apartment"
          className="w-full h-[190px] object-cover"
        />
      </div>

      <div className="flex justify-between items-center p-3">
        <span className="inline-block bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 border">
          For Sell
        </span>

        <button className="w-8 h-8 bg-custom-teal-blue text-white flex items-center justify-center rounded-full shadow-md">
          <IoMdAdd size={20} />
        </button>
      </div>

      <div className="flex justify-between items-start pb-2 pl-4 pr-5">
        <div>
          <h3 className="text-base font-bold text-black">The Property Name</h3>
          <p className="flex items-center text-gray-500 text-sm mt-1">
            <FaMapMarkerAlt className="mr-1 text-gray-400" />
            001, Name Road, City
          </p>
          <p className="text-gray-400 text-sm mt-1">#apartment #urban</p>
        </div>

        <div className="flex items-center text-gray-400 text-sm">
          <BiSolidCarGarage className="text-xl mr-1" />
          <span>03</span>
        </div>
      </div>

      <div className="w-full h-[49px] px-4 bg-white flex justify-between items-center">
        <span className="text-base font-bold text-custom-teal-blue">
          <span className="font-bold">LKR 102,000</span>
          <span className="text-sm text-gray-500 font-normal"> /Sqft</span>
        </span>

        <span className="text-lg font-bold text-black">Apartment</span>
      </div>
    </div>
  );
};

export default PropertyCard;
