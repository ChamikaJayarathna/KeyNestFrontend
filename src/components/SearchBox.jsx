import React from "react";

const SearchBox = () => {
  return (
    <div>
      <div className="flex justify-end py-5 px-5">
        <div
          className="flex items-center border border-custom-teal-blue rounded-lg overflow-hidden max-w-md"
          style={{ width: "426px", height: "50px" }}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 outline-none"
          />
          <button
            className="bg-black text-white text-base px-6 py-2 font-semibold cursor-pointer"
            style={{ height: "100%" }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
