import React from "react";
import { Separator } from "@/components/ui/separator";

const PropertyItem = ({ property }) => {
  return (
    <div className="rounded-xl bg-white border hover:shadow-md cursor-pointer">
        <h2 className="absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white">
            {property?.type}
        </h2>
      <img
        src={property?.images[0]}
        width={"100%"}
        height={250}
        className="rounded-t-xl h-[180px] object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">{property?.title}</h2>
        <Separator />
      </div>
    </div>
  );
};

export default PropertyItem;
