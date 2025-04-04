import React from "react";

const Pricing = ({ propertyDetails }) => {
  return (
    <div className="p-10 rounded-xl border shadow-md">
      <h2>Our Price</h2>
      <h2 className="font-bold text-4xl">
        LKR {propertyDetails?.price.toLocaleString()}
      </h2>
    </div>
  );
};

export default Pricing;
