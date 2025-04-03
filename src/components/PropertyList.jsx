import React from "react";
import PropertyCard from "./PropertyCard";
import SearchBox from "./SearchBox";

const PropertyList = ({ propertyDetails }) => {
  return (
    <div>
      <SearchBox />

      <div className="px-8 grid grid-cols-1 md:grid-cols-4 gap-45">
        {propertyDetails.length > 0 ? (
          propertyDetails.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
