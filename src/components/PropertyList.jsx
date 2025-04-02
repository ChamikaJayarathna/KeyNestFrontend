import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import apiRequest from "../lib/apiRequest";
import SearchBox from "./SearchBox";

const PropertyList = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);

  useEffect(() => {
    GetAllProperty();
  }, []);

  const GetAllProperty = async () => {
    try {
      const response = await apiRequest.get("/property/get-all-property");
      setPropertyDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchBox />

      <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-40">
        {propertyDetails.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
