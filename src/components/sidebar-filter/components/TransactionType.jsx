import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const TransactionType = ({ filter, handleFilterChange, filterData }) => {
  return (
    <div>
      <h2 className="text-custom-teal-blue text-base font-bold mb-3">
        Transaction Type
      </h2>
      <div className="flex items-center gap-8">
        {filter.transactionType.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Checkbox
              checked={!!filterData.transactionType?.[item.name]}
              onCheckedChange={(checked) =>
                handleFilterChange("transactionType", item.name, checked)
              }
            />
            <h2>{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionType;
