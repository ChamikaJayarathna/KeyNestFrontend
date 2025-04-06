import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./components/ImageGallery";
import PropertyTitle from "./components/PropertyTitle";
import Specification from "./components/Specification";
import Description from "./components/Description";
import apiRequest from "@/lib/apiRequest";
import Map from "./components/Map";
import Header from "../Header";
import Pricing from "./components/Pricing";
import OwnersDetail from "./components/OwnersDetail";

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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="p-10 md:px-20">
        <PropertyTitle propertyDetails={propertyDetails} />
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5">
          <div className="md:col-span-2">
            <ImageGallery propertyDetails={propertyDetails} />
            <Description propertyDetails={propertyDetails} />
          </div>
          <div className="flex flex-col space-y-6">
            <Pricing propertyDetails={propertyDetails} />
            <Specification propertyDetails={propertyDetails} />
            {propertyDetails &&
            propertyDetails.latitude &&
            propertyDetails.longitude ? (
              <Map propertyDetails={propertyDetails} />
            ) : (
              <p>Loading Map...</p>
            )}
            <OwnersDetail listingId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;
