import React, { useState } from "react";
import SidebarFilter from "../components/sidebar-filter/SidebarFilter";
import PropertyList from "../components/PropertyList";
import Header from "@/components/Header";
import apiRequest from "@/lib/apiRequest";

const PropertyPage = () => {

  const [filterResult, setFilterResult] = useState();

  const filterProperty = async (filterData) => {
    try {
      const response = await apiRequest.get("/property/filter-property", filterData);
      setFilterResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header/>
      <div className="flex">
        <div className="">
          <SidebarFilter filterProperty={filterProperty} />
        </div>

        <div className="flex-1 p-4">
            <PropertyList filterResult={filterResult} />
        </div>
      </div>
    </>
  );
};

export default PropertyPage;