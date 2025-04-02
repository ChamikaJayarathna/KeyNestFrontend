import React from "react";
import { Slider } from "@/components/ui/slider";

const Specification = () => {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Price
        </h2>
        <div className="text-xs mb-1">LKR 10,000 - LKR 3,000,000</div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Bedrooms
        </h2>
        <div className="text-xs mb-1">0 - 10</div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Bathrooms
        </h2>
        <div className="text-xs mb-1">0 - 10</div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="mb-5">
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Car spaces
        </h2>
        <div className="text-xs mb-1">0 - 10</div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </div>
  );
};

export default Specification;
