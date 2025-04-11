import apiRequest from "@/lib/apiRequest";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import PropertyCard from "./PropertyCard";

const MostSearchedProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);

  const GetAllProperty = async () => {
    try {
      const response = await apiRequest.get("/property/get-all-property");
      setPropertyDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllProperty();
  }, []);

  return (
    <div className="mx-24 hidden md:block">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Most Searched Property
      </h2>
      <Carousel>
        <CarouselContent>
          {propertyDetails.map((property, index) => (
            <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <PropertyCard property={property} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchedProperty;
