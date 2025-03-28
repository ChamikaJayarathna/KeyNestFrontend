import React, { useContext, useState } from "react";
import propertyDetails from "../../Shared/propertyDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Button } from "@/components/ui/button";
import IconField from "./components/IconField";
import Header from "../admin-components/Header";
import AuthContext from "@/context/AuthContext";
import apiRequest from "@/lib/apiRequest";
import toast, { Toaster } from "react-hot-toast";
import { Separator } from "@/components/ui/separator";
import UploadImages from "./components/UploadImages";

const AddProperty = () => {
  const [formData, setFormData] = useState({});
  const [propertyInfo, setPropertyInfo] = useState();

  const { token } = useContext(AuthContext);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiRequest.post('/property/create-property', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("New property added successfully 👍");
    } catch (error) {
      console.log(error)
    }
  };
  

  return (
    <>
      <Toaster />
      <div>
        <Header title={"Add Property"} />
        <div className="px-10 md:px-20 my-10">
          <h2 className="font-bold text-4xl">Add New Property</h2>
          <form className="p-10 border rounded-xl mt-10" onSubmit={handleSubmit}>
            {/* Property Details */}
            <div>
              <h2 className="font-medium text-xl mb-6">Property Details</h2>
              <div className="grid grid-cols-2 gap-5">
                {propertyDetails.propertyDetails.map((item, index) => (
                  <div
                    key={index}
                    className={item.fieldType === "textarea" ? "col-span-2" : ""}
                  >
                    <label className="text-sm flex gap-2 items-center mb-2">
                      <IconField icon={item?.icon} />
                      {item?.label}{" "}
                      {item.required && <span className="text-red-500">*</span>}
                    </label>
                    {item.fieldType === "text" || item.fieldType === "number" ? (
                      <InputField
                        item={item}
                        value={formData[item.name] || ""}
                        handleInputChange={handleInputChange}
                        propertyInfo={propertyInfo}
                      />
                    ) : item.fieldType === "dropdown" ? (
                      <DropdownField
                        item={item}
                        value={formData[item.name] || ""}
                        handleInputChange={handleInputChange}
                        propertyInfo={propertyInfo}
                      />
                    ) : item.fieldType === "textarea" ? (
                      <div className="grid grid-cols-1">
                        <TextAreaField
                          item={item}
                          value={formData[item.name] || ""}
                          handleInputChange={handleInputChange}
                          propertyInfo={propertyInfo}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Property Images */}
            <UploadImages/>

            <div className="mt-10 flex justify-end">
              <Button type="submit" className="bg-red-500 hover:bg-red-600">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
