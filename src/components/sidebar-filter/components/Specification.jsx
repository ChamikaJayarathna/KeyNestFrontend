import React from "react";
import { Slider } from "@/components/ui/slider";

const Specification = ({ specificationData, handleSpecificationChange }) => {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Price
        </h2>
        <div className="text-xs mb-1">LKR {specificationData.price}</div>
        <Slider
          max={3000000}
          step={1}
          value={specificationData.price}
          onValueChange={(value) => handleSpecificationChange("price", value)}
        />
      </div>

      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Bedrooms
        </h2>
        <div className="text-xs mb-1">{specificationData.bedrooms}</div>
        <Slider
          max={10}
          step={1}
          value={specificationData.bedrooms}
          onValueChange={(value) =>
            handleSpecificationChange("bedrooms", value)
          }
        />
      </div>

      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Bathrooms
        </h2>
        <div className="text-xs mb-1">{specificationData.bathrooms}</div>
        <Slider
          max={10}
          step={1}
          value={specificationData.bathrooms}
          onValueChange={(value) =>
            handleSpecificationChange("bathrooms", value)
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
