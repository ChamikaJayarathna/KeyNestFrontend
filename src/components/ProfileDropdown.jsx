import React from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ setShowDropdown }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg overflow-hidden">
      <Link
        to="#"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        Profile
      </Link>
      
      <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;
