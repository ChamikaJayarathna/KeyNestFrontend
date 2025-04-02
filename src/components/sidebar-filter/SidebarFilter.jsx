import React, { useState } from "react";
import filter from "../../Shared/filter.json";
import PropertyTypes from "./components/PropertyTypes";
import OutdoorFeatures from "./components/OutdoorFeatures";
import IndoorFeatures from "./components/IndoorFeatures";
import ClimateFeatures from "./components/ClimateFeatures";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import Specification from "./components/Specification";
import Condition from "./components/Condition";
import SaleMethod from "./components/SaleMethod";

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

      <PropertyTypes filter={filter} handleFilterChange={handleFilterChange} filterData={filterData}/>
      <Specification/>

      {/* <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Land size
        </h2>
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="text-sm text-gray-600 mb-1">Min</div>
            <select className="w-full p-2 border rounded">
              <option>Any</option>
            </select>
          </div>
          <div className="w-1/2">
            <div className="text-sm text-gray-600 mb-1">Max</div>
            <select className="w-full p-2 border rounded">
              <option>Any</option>
            </select>
          </div>
        </div>
      </div> */}

      <Condition filter={filter} handleFilterChange={handleFilterChange} filterData={filterData}/>
      <SaleMethod filter={filter} handleFilterChange={handleFilterChange} filterData={filterData}/>

      {/* <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Sale method
        </h2>
        <div className="flex flex-wrap gap-4">
          {["All", "Auction", "Private treat sale"].map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              <span className="text-sm">{method}</span>
            </label>
          ))}
        </div>
      </div> */}

      <OutdoorFeatures filter={filter} handleFilterChange={handleFilterChange} filterData={filterData}/>
      <IndoorFeatures filter={filter} handleFilterChange={handleFilterChange} filterData={filterData}/>
      <ClimateFeatures filter={filter} handleFilterChange={handleFilterChange} filterData={filterData}/>
      <AccessibilityFeatures filter={filter} handleFilterChange={handleFilterChange} filterData={filterData}/>

      <div className="flex justify-end">
        <button className="bg-black text-white py-2 px-6 rounded text-lg">
          Apply
        </button>
      </div>
    </div>
  );
};

export default SidebarFilter;
