import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import apiRequest from "../lib/apiRequest";

const PropertyList = () => {

  const [propertyDetails, setPropertyDetails] = useState([]);

  useEffect(() => {
    GetAllProperty();
  }, []);

  const GetAllProperty = async () => {
    try {
      const response = await apiRequest.get('/property/get-all-property');
      setPropertyDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

      <div className="grid grid-cols-4 gap-32">
        {propertyDetails.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

    </div>
  );
};

export default PropertyList;
