import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  return (
    <div>
      <div className="flex justify-end">
        <div
          className="flex items-center border border-custom-teal-blue rounded-lg overflow-hidden max-w-md"
          style={{ width: "426px", height: "50px" }}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 outline-none"
          />
          <button
            className="bg-black text-white text-base px-6 py-2 font-semibold"
            style={{ height: "100%" }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-5">
        <PropertyCard />
      </div>

    </div>
  );
};

export default PropertyList;
