import React from "react";
import propertyDetails from "../../Shared/propertyDetails.json";
import IconField from "./components/IconField";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";

const AddProperty = () => {
  return (
    <div className="px-10 md:px-20 my-10">
      <form className="p-10 border rounded-xl mt-10">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {propertyDetails.propertyDetails.map((item, index) => (
              <div key={index}>
                <label className="text-sm flex gap-2 items-center mb-2">
                  <IconField icon={item?.icon} />
                  {item?.label}{" "}
                  {item.required && <span className="text-red-500">*</span>}
                </label>
                {item.fieldType === "text" || item.fieldType === "number" ? (
                  <InputField item={item} />
                ) : item.fieldType === "dropdown" ? (
                  <DropdownField item={item} />
                ) : item.fieldType === "textarea" ? (
                  <TextAreaField item={item} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
