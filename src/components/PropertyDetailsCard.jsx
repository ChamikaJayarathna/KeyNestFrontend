import React, { useEffect, useState } from "react";
import apiRequest from "../lib/apiRequest";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import Specification from "./Specification";

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
      <ImageGallery propertyDetails={propertyDetails} />
      <Specification propertyDetails={propertyDetails} />
    </div>
  );
};

export default PropertyDetailsCard;
