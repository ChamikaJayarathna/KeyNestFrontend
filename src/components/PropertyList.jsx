import React from "react";
import PropertyCard from "./PropertyCard";
import SearchBox from "./SearchBox";

const PropertyList = ({ propertyDetails }) => {
  return (
    <div className="px-25 py-4">
      <SearchBox />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {propertyDetails.length > 0 ? (
          propertyDetails.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No properties found
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
