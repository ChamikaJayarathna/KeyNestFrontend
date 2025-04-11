import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const AccessibilityFeatures = ({ filter, handleFilterChange, filterData }) => {
  return (
    <div>
      <h2 className="text-custom-teal-blue text-base font-bold mb-2">
        Accessibility Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {filter.accessibilityFeatures.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Checkbox
              checked={!!filterData.accessibilityFeatures?.[item.name]}
              onCheckedChange={(checked) =>
                handleFilterChange("accessibilityFeatures", item.name, checked)
              }
            />
            <h2>{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessibilityFeatures;
