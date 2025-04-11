import React from "react";
import { Textarea } from "@/components/ui/textarea";

const TextAreaField = ({ item, handleInputChange, propertyInfo }) => {
  return (
    <div>
      <Textarea
        onChange={(e) => handleInputChange(item.name, e.target.value)}
        required={item.required}
        defaultValue={propertyInfo?.[item.name]}
      />
    </div>
  );
};

export default TextAreaField;
