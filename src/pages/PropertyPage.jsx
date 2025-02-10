import React from "react";
import NavBar from "../components/NavBar";
import SidebarFilter from "../components/SidebarFilter";
import PropertyList from "../components/PropertyList";

const PropertyPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex h-[calc(100vh-60px)] pt-[80px]">
        <div className="w-1/4 h-full p-4 overflow-auto mt-5 no-scrollbar">
          <SidebarFilter />
        </div>

        <div className="flex-1 h-full overflow-auto p-4">
          <div className="">
            <PropertyList />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyPage;