import React from "react";
import PropertyCard from "./PropertyCard";
import { listData } from "../lib/dummydata";

const PropertyList = () => {
  return (
    <div>
      <div className="flex justify-end mr-25">
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

      <div className="mt-15 grid grid-cols-3 gap-3">
        {listData.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

    </div>
  );
};

export default PropertyList;
