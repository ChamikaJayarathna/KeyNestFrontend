import React, { useEffect, useState } from "react";
import SidebarFilter from "../components/sidebar-filter/SidebarFilter";
import PropertyList from "../components/PropertyList";
import Header from "@/components/Header";
import apiRequest from "../lib/apiRequest";

const PropertyPage = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);

  useEffect(() => {
    GetAllProperty();
  }, []);

  const GetAllProperty = async () => {
    try {
      const response = await apiRequest.get("/property/get-all-property");
      setPropertyDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterResult = (filteredProperties) => {
    setPropertyDetails(filteredProperties);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <div className="">
          <SidebarFilter onFilter={handleFilterResult} />
        </div>

        <div className="flex-1 p-4">
          <PropertyList propertyDetails={propertyDetails} />
        </div>
      </div>
    </>
  );
};

export default PropertyPage;
