import React, { useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

const ImageGallery = ({ propertyDetails }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col items-start">
      <div className="animate-fade-in w-full">
        <div className="relative mb-4 rounded-xl overflow-hidden">
          <AspectRatio ratio={4 / 3} className="relative w-full">
            <img
              src={propertyDetails?.images?.[selectedImage]}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </AspectRatio>
        </div>
        <div className="flex gap-2 mb-6 overflow-x-auto py-2">
          {propertyDetails?.images?.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`thumbnail cursor-pointer flex-shrink-0 w-20 h-16 rounded-md overflow-hidden transition-all duration-200 ${
                index === selectedImage
                  ? "ring-2 ring-realEstate-primary"
                  : "ring-1 ring-gray-200"
              }`}
            >
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
