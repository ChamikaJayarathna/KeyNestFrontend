import React, { useState } from "react";
import filter from "../../Shared/filter.json";
import PropertyTypes from "./components/PropertyTypes";
import OutdoorFeatures from "./components/OutdoorFeatures";
import IndoorFeatures from "./components/IndoorFeatures";
import ClimateFeatures from "./components/ClimateFeatures";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import Specification from "./components/Specification";
import Condition from "./components/Condition";
import { Button } from "../ui/button";

const SidebarFilter = () => {
  const [filterData, setFilterData] = useState({});

  const handleFilterChange = (name, isChecked) => {
    setFilterData((prevData) => ({
      ...prevData,
      [name]: isChecked,
    }));
  };

  return (
    <div className="p-6 space-y-6 border-r-3 h-screen overflow-y-auto sticky top-0 no-scrollbar">
      <PropertyTypes
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      />

      <Specification />

      <Condition
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      />

      <OutdoorFeatures
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      />

      <IndoorFeatures
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      />

      <ClimateFeatures
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      />

      <AccessibilityFeatures
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      />

      <div className="flex justify-end">
        <Button>Apply</Button>
      </div>
    </div>
  );
};

export default SidebarFilter;
