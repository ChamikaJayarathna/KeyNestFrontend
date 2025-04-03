import React from "react";
import { Slider } from "@/components/ui/slider";

const Specification = ({ specificationData, handleSpecificationChange }) => {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Price
        </h2>
        <div className="text-xs mb-1">LKR {specificationData.price?.toLocaleString() || "0"}</div>
        <Slider
          max={100000}
          step={1}
          value={specificationData.price}
          onValueChange={(value) => handleSpecificationChange("price", value)}
        />
      </div>

      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Bedrooms
        </h2>
        <div className="text-xs mb-1">{specificationData.bedroom}</div>
        <Slider
          max={10}
          step={1}
          value={specificationData.bedroom}
          onValueChange={(value) => handleSpecificationChange("bedroom", value)}
        />
      </div>

      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Bathrooms
        </h2>
        <div className="text-xs mb-1">{specificationData.bathroom}</div>
        <Slider
          max={10}
          step={1}
          value={specificationData.bathroom}
          onValueChange={(value) =>
            handleSpecificationChange("bathroom", value)
          }
        />
      </div>

      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Car Spaces
        </h2>
        <div className="text-xs mb-1">{specificationData.carSpaces}</div>
        <Slider
          max={10}
          step={1}
          value={specificationData.carSpaces}
          onValueChange={(value) =>
            handleSpecificationChange("carSpaces", value)
          }
        />
      </div>
    </div>
  );
};

export default Specification;
