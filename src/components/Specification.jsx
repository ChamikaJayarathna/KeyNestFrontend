import React from "react";

const Specification = ({ propertyDetails }) => {
  return (
    <div>
      <h2>{propertyDetails?.title}</h2>
      <div>
        <div className="property-feature-row">
          <span className="property-feature-label">Address:</span>
          <span className="property-feature-value">
            {propertyDetails?.address}
          </span>
        </div>
        <div className="property-feature-row">
          <span className="property-feature-label">Bedrooms:</span>
          <span className="property-feature-value">
            {propertyDetails?.bedroom}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Specification;
