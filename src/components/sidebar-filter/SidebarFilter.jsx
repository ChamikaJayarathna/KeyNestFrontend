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
import apiRequest from "@/lib/apiRequest";

const SidebarFilter = ({ onFilter }) => {
  const [filterData, setFilterData] = useState({});
  const [specificationData, setSpecificationData] = useState({});

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

  const handleFilter = async () => {
    try {
      const filterDataToSend = {
        price: filterData?.price,
        bedroom: filterData?.bedroom,
        bathroom: filterData?.bathroom,
        carSpaces: filterData?.carSpaces,
        condition: filterData?.condition,
        transactionType: filterData?.transactionType,
        propertyTypes: filterData?.propertyTypes,
        filter: {
          outdoorFeatures: filterData?.outdoorFeatures,
          indoorFeatures: filterData?.indoorFeatures,
          climateFeatures: filterData?.climateFeatures,
          accessibilityFeatures: filterData?.accessibilityFeatures,
        },
      };

      const res = await apiRequest.post(
        `/property/filter-property`,
        filterDataToSend
      );
      onFilter(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
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
        <Button onClick={handleFilter}>Apply</Button>
      </div>
    </div>
  );
};

export default SidebarFilter;
