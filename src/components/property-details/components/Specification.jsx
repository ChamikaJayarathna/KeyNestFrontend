import React from "react";
import PropertySpecification from "@/Shared/PropertySpecification";
import IconField from "@/admin/add-property/components/IconField";

const Specification = ({ propertyDetails }) => {
  return (
    <div className="p-10 rounded-xl border shadow-md">
      <h2 className="font-medium text-2xl text-primary mb-5">Specification</h2>
      {propertyDetails && Array.isArray(PropertySpecification) ? (
        PropertySpecification.map((item, index) => (
          <div key={index} className="flex gap-2 items-center mb-3">
            <IconField icon={item?.icon} />
            <span>{item?.label}:</span>
            <span>{propertyDetails?.[item?.name]}</span>
          </div>
        ))
      ) : (
        <div className="w-full h-[500px] rounded-xl bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default Specification;
