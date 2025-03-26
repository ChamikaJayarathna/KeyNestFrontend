import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./components/ImageGallery";
import PropertyTitle from "./components/PropertyTitle";
import Specification from "./components/Specification";
import Description from "./components/Description";
import apiRequest from "@/lib/apiRequest";
import Map from "./components/Map";

const PropertyDetailsCard = () => {
  const [propertyDetails, setPropertyDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    GetPropertyDetails();
  }, []);

  const GetPropertyDetails = async () => {
    try {
      const response = await apiRequest.get(
        `/property/get-single-property/${id}`
      );
      setPropertyDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="p-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10 gap-5">
          <div className="">
            <ImageGallery propertyDetails={propertyDetails} />
          </div>
          <div className="">
            <PropertyTitle propertyDetails={propertyDetails} />
            <Specification propertyDetails={propertyDetails} />
            <Description propertyDetails={propertyDetails} />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;
