import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div className="w-[305px] h-[360px] max-w-sm bg-gray-50 rounded-2xl shadow-lg overflow-hidden mt-10">
      <img
        src={property?.images[0]}
        className="w-full h-[190px] object-cover"
      />

      <div className="flex gap-3 items-center p-3">
        <span
          className={`text-sm font-semibold px-3 py-1 border flex items-center ${
            property?.type === "Rent"
              ? "bg-yellow-100 text-yellow-500"
              : property?.type === "Buy"
              ? "bg-green-100 text-green-600"
              : property?.type === "Sell"
              ? "bg-red-100 text-red-500"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {property?.type === "Rent"
            ? "For Rent"
            : property?.type === "Buy"
            ? "Buy"
            : property?.type === "Sell"
            ? "Sell"
            : ""}
        </span>

        <span className="bg-gray-100 text-gray-600 text-sm font-semibold px-3 py-1 border ml-[-1px]">
          {property?.property?.charAt(0).toUpperCase() +
            property?.property?.slice(1)}
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

      <hr className="border-t border-gray-300 mx-auto w-[92%]" />

      <div className="flex items-center justify-between px-3 py-3">
        <span className="text-base font-bold text-custom-teal-blue">
          <span className="font-bold">
            LKR {property?.price.toLocaleString()}
          </span>
        </span>
        <h2
          className="text-primary text-sm flex gap-2 items-center cursor-pointer"
          onClick={() => navigate(`/property-details/${property?._id}`)}
        >
          View Details
          <MdOpenInNew />
        </h2>
      </div>
    </div>
  );
};

export default PropertyCard;
