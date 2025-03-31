import React from "react";

const Specification = ({ propertyDetails }) => {
  return (
    <div className="p-10 rounded-xl border shadow-md mt-7">
      <h2 className="font-medium text-2xl text-primary">Specification</h2>
      <div>
        <div className="property-feature-row">
          <span className="property-feature-label">Address:</span>
          <span className="property-feature-value">
            {propertyDetails?.address}
          </span>
        </div>
        <div className="property-feature-row">
          <span className="property-feature-label">City:</span>
          <span className="property-feature-value">
            {propertyDetails?.city}
          </span>
        </div>
        <div className="property-feature-row">
          <span className="property-feature-label">Type:</span>
          <span className="property-feature-value">
            {propertyDetails?.type}
          </span>
        </div>
        <div className="property-feature-row">
          <span className="property-feature-label">Property:</span>
          <span className="property-feature-value">
            {propertyDetails?.property}
          </span>
        </div>
        <div className="property-feature-row">
          <span className="property-feature-label">Utilities:</span>
          <span className="property-feature-value">
            {propertyDetails?.utilities}
          </span>
        </div>
        <div className="property-feature-row">
          <span className="property-feature-label">Bedrooms: </span>
          <span className="property-feature-value">
            0{propertyDetails?.bedroom}
          </span>
        </div>
        <div className="property-feature-row">
          <span className="property-feature-label">Bathroom: </span>
          <span className="property-feature-value">
            0{propertyDetails?.bathroom}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Specification;
