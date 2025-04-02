import React from 'react';

const Specification = () => {
  return (
    <div>
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
    </div>
  );
}

export default Specification;