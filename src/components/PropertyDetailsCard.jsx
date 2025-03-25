import React, { useEffect, useState } from "react";
import apiRequest from "../lib/apiRequest";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import Specification from "./Specification";
import Description from "./Description";

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
            <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5">
                <div className="">
                    <ImageGallery propertyDetails={propertyDetails} />
                </div>
                <div className="">
                    <Specification propertyDetails={propertyDetails} />
                    <Description propertyDetails={propertyDetails} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default PropertyDetailsCard;
