import React from "react";
import filter from "../../Shared/filter.json";

const SidebarFilter = () => {
  const propertyTypes = [
    "All",
    "House",
    "Townhouse",
    "Apartment & Unit",
    "Villa",
    "Retirement Living",
    "Land",
    "Acreage",
    "Rural",
    "Block of Unit",
  ];

  const outdoorFeatures = [
    "Swimming pool",
    "Balcony",
    "Garage",
    "Shed",
    "Fully fenced",
    "Undercover parking",
    "Outdoor spa",
    "Tennis court",
    "Outdoor area",
  ];

  const indoorFeatures = [
    "Ensuite",
    "Dishwasher",
    "Built in robes",
    "Broadband",
    "Floorboards",
    "Study",
    "Workshop",
    "Alarm system",
    "Gym",
    "Rumpus room",
  ];

  const climateFeatures = [
    "Heating",
    "Solar panels",
    "Fireplace",
    "Water tank",
    "Air conditioning",
    "High energy efficiency",
    "Solar hot water",
  ];

  const accessibilityFeatures = [
    "Single storey",
    "Step free entry",
    "Wide doorways",
    "Roll in shower",
    "Elevator",
    "Bathroom grab rails",
    "Accessible parking",
  ];

  return (
    <div className="p-6 space-y-6 border-r-3 h-screen overflow-y-auto sticky top-0 no-scrollbar">
      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-3">
          Property Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {propertyTypes.map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded accent-black"
                defaultChecked={type === "All"}
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Price
        </h2>
        <div className="text-xs mb-1">LKR 10,000 - LKR 3,000,000</div>
        <input
          type="range"
          className="w-full appearance-none h-1 bg-black rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
          min="10000"
          max="3000000"
        />
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Bedrooms
        </h2>
        <div className="text-xs mb-1">0 - 10</div>
        <input
          type="range"
          className="w-full appearance-none h-1 bg-black rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
          min="0"
          max="10"
        />
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Bathrooms
        </h2>
        <div className="text-xs mb-1">0 - 10</div>
        <input
          type="range"
          className="w-full appearance-none h-1 bg-black rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
          min="0"
          max="10"
        />
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Car spaces
        </h2>
        <div className="text-xs mb-1">0 - 10</div>
        <input
          type="range"
          className="w-full appearance-none h-1 bg-black rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
          min="0"
          max="10"
        />
      </div>

      <div>
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
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Condition
        </h2>
        <div className="flex gap-4">
          {["All", "New", "Established"].map((condition) => (
            <label key={condition} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              <span className="text-sm">{condition}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
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
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Outdoor features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {outdoorFeatures.map((feature) => (
            <label key={feature} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Indoor features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {indoorFeatures.map((feature) => (
            <label key={feature} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Climate control & energy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {climateFeatures.map((feature) => (
            <label key={feature} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-custom-teal-blue text-base font-bold mb-2">
          Accessibility features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {accessibilityFeatures.map((feature) => (
            <label key={feature} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-black text-white py-2 px-6 rounded text-lg">
          Apply
        </button>
      </div>
    </div>
  );
};

export default SidebarFilter;
