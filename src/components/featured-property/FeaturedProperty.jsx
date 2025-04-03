import React from "react";
import FeaturedPropertyCard from "./components/FeaturedPropertyCard";
import { FaHouse } from "react-icons/fa6";

const FeaturedProperty = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-custom-teal-blue mb-2">
          Featured Property Listed
        </h2>
        <p className="text-gray-600">Find All Type Of Property</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <FeaturedPropertyCard
          icon={<FaHouse />}
          title="House"
          subtitle="122 Property"
        />
      </div>
    </div>
  );
};

export default FeaturedProperty;
