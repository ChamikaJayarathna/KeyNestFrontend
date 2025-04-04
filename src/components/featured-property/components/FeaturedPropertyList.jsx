import React, { useEffect, useState } from "react";
import apiRequest from "@/lib/apiRequest";
import PropertyCard from "@/components/PropertyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedPropertyList = ({ title }) => {
  const [property, setProperty] = useState([]);

  const FeaturedProperty = async () => {
    try {
      const res = await apiRequest.post("/property/filter-property-type", {
        property: title,
      });
      setProperty(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (title) {
      FeaturedProperty();
    }
  }, [title]);

  return (
    <div className="mt-10 mx-10 hidden md:block">
      <Carousel>
        <CarouselContent>
          {property.map((property, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
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

export default FeaturedPropertyList;
