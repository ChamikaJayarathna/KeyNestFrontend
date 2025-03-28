import React, { useState } from "react";
import propertyDetails from "../../Shared/propertyDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Button } from "@/components/ui/button";
import IconField from "./components/IconField";
import Header from "../admin-components/Header";

const AddProperty = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {};

  return (
    <div>
      <Header title={"Add Property"}/>
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Property</h2>
        <form className="p-10 border rounded-xl mt-10" onSubmit={handleSubmit}>
          {/* Property Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {propertyDetails.propertyDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-2 items-center mb-2">
                    <IconField icon={item?.icon} />
                    {item?.label}{" "}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <Button type="submit" className="bg-red-500 hover:bg-red-600">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
