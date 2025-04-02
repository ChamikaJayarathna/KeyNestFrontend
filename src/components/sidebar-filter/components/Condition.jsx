import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Condition = ({ filter, handleFilterChange, filterData }) => {
  return (
    <div>
      <h2 className="text-custom-teal-blue text-base font-bold mb-3">
        Condition
      </h2>
      <div className="flex items-center gap-8">
        {filter.condition.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Checkbox
              checked={!!filterData[item.name]}
              onCheckedChange={(checked) =>
                handleFilterChange(item.name, checked)
              }
            />
            <h2>{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Condition;
