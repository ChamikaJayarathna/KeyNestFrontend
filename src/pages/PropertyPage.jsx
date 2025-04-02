import React from "react";
import SidebarFilter from "../components/sidebar-filter/SidebarFilter";
import PropertyList from "../components/PropertyList";
import Header from "@/components/Header";

const PropertyPage = () => {
  return (
    <>
      <Header/>
      <div className="flex">
        <div className="">
          <SidebarFilter />
        </div>

        <div className="flex-1 p-4">
            <PropertyList />
        </div>
      </div>
    </>
  );
};

export default PropertyPage;