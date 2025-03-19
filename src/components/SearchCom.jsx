import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { LuImagePlus } from "react-icons/lu";
import { PiSlidersHorizontal } from "react-icons/pi";
import FileUpload from "./FileUpload";
import { useNavigate } from "react-router-dom";

const SearchCom = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [isFileUploadVisible, setIsFileUploadVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const fileUploadRef = useRef(null);
  const navigate = useNavigate();

  const tabs = ["Buy", "Rent", "Sold"];

  const handleImageClick = () => {
    setIsFileUploadVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fileUploadRef.current &&
        !fileUploadRef.current.contains(event.target)
      ) {
        setIsFileUploadVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-custom-navy-blue/60 p-4 rounded-xl backdrop-blur-sm">
      <div className="flex gap-6 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2
                ${
                  activeTab === tab
                    ? "border-white text-white"
                    : "border-transparent text-gray-300 hover:text-white"
                }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 rounded-lg p-2">
        <div className="flex items-center w-full relative bg-black/30 rounded-lg px-3 py-3">
          <CiSearch className="text-gray-400 w-5 h-5 absolute left-3" />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none pl-10 pr-4 text-white placeholder-gray-400"
          />
          <button
            onClick={handleImageClick}
            className="absolute right-3 text-white"
          >
            <LuImagePlus className="w-5 h-5" />
          </button>

          {isFileUploadVisible && (
            <div
              ref={fileUploadRef}
              className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg z-10"
            >
              <FileUpload />
            </div>
          )}
        </div>

        <button className="flex items-center gap-2 bg-black/30 border border-white/50 rounded-lg px-4 py-3 text-white hover:bg-black/40 transition-colors">
          <PiSlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>

        <button onClick={handleSearch} className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchCom;
