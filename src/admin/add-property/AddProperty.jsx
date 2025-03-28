import React from 'react';
import propertyDetails from "../../Shared/propertyDetails.json";
import InputField from './components/InputField';
import DropdownField from './components/DropdownField';

const AddProperty = () => {
  return (
    <div>
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Property</h2>
        <form className="p-10 border rounded-xl mt-10">
          {/* Property Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {propertyDetails.propertyDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-2 items-center mb-2">
                    {item?.label}{" "}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? 
                    <InputField item={item} /> 
                    : item.fieldType === "dropdown" ? 
                    <DropdownField item={item} />
                    : null
                  }
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;