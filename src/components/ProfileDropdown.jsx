import React from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 mt-1 w-48 bg-white text-black shadow-lg rounded-lg overflow-hidden">
      <Link to="/admin/dashboard" className="block px-6 py-5 hover:bg-gray-100">
        Dashboard
      </Link>

      <hr className="border-t border-gray-300 mx-auto w-[92%]" />

      <Link to="#" className="block px-6 py-5 hover:bg-gray-100">
        Profile
      </Link>

      <hr className="border-t border-gray-300 mx-auto w-[92%]" />

      <button className="block w-full text-left px-6 py-5 hover:bg-gray-100">
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;
