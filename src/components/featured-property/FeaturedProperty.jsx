import React, { useState } from "react";
import FeaturedPropertyCard from "./components/FeaturedPropertyCard";
import FeaturedData from "@/Shared/FeaturedData";
import FeaturedPropertyList from "./components/FeaturedPropertyList";

const FeaturedProperty = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    FeaturedData[0]?.name || null
  );

  const handleCardClick = (title) => {
    setSelectedPropertyType(title);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-custom-teal-blue mb-2">
          Featured Property Listed
        </h2>
        <p className="text-gray-600">Find All Type Of Property</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {FeaturedData.map((feature, index) => (
          <FeaturedPropertyCard
            key={index}
            title={feature.name}
            icon={feature.icon}
            onClick={() => handleCardClick(feature.name)}
            selected={selectedPropertyType === feature.name}
          />
        ))}
      </div>

      {selectedPropertyType && (
        <FeaturedPropertyList title={selectedPropertyType} />
      )}
    </div>
  );
};

export default FeaturedProperty;
