import React, { useState } from "react";
import filter from "../../Shared/filter.json";
import PropertyTypes from "./components/PropertyTypes";
import OutdoorFeatures from "./components/OutdoorFeatures";
import IndoorFeatures from "./components/IndoorFeatures";
import ClimateFeatures from "./components/ClimateFeatures";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import Specification from "./components/Specification";
import Condition from "./components/Condition";
import TransactionType from "./components/TransactionType";
import { Button } from "../ui/button";

const SidebarFilter = ({ filterProperty }) => {
  const [filterData, setFilterData] = useState({});
  const [specificationData, setSpecificationData] = useState({
    price: [0],
    bedrooms: [0],
    bathrooms: [0],
    carSpaces: [0],
  });

  const handleFilterChange = (category, name, isChecked) => {
    setFilterData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [name]: isChecked,
      },
    }));
  };

  const handleSpecificationChange = (key, value) => {
    setSpecificationData((prev) => ({
      ...prev,
      [key]: value,
    }));

    setFilterData((prevData) => ({
      ...prevData,
      specifications: {
        ...prevData.specifications,
        [key]: value,
      },
    }));
  };

  return (
    <div className="p-6 space-y-6 border-r-3 h-screen overflow-y-auto sticky top-0 no-scrollbar">
      <TransactionType
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      />

      <PropertyTypes
        filter={filter}
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      />

      <Specification
        specificationData={specificationData}
        handleSpecificationChange={handleSpecificationChange}
      />

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
        <Button onClick={() => filterProperty(filterData)}>Apply</Button>
      </div>
    </div>
  );
};

export default SidebarFilter;
