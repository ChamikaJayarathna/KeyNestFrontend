import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const OutdoorFeatures = ({ filter, handleFilterChange, filterData }) => {
  return (
    <div>
      <h2 className="text-custom-teal-blue text-base font-bold mb-2">
        Outdoor Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {filter.outdoorFeatures.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Checkbox
              checked={!!filterData.outdoorFeatures?.[item.name]}
              onCheckedChange={(checked) =>
                handleFilterChange("outdoorFeatures", item.name, checked)
              }
            />
            <h2>{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutdoorFeatures;
