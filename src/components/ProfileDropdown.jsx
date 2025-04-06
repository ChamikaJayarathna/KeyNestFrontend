import AuthContext from "@/context/AuthContext";
import apiRequest from "@/lib/apiRequest";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProfileDropdown = () => {
  const [profileDetail, setProfileDetail] = useState();
  const { token, removeFromSession } = useContext(AuthContext);

  const handleLogout = () => {
    removeFromSession();
  };

  useEffect(() => {
    GetProfile();
  }, []);

  const GetProfile = async () => {
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;
      const response = await apiRequest.get(`/auth/profile/${userId}`);
      setProfileDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute right-0 mt-1 w-48 bg-white text-black shadow-lg rounded-lg overflow-hidden">
      <Link to="/admin/dashboard" className="block px-6 py-5 hover:bg-gray-100">
        Dashboard
      </Link>

      <hr className="border-t border-gray-300 mx-auto w-[92%]" />

      <Link
        to={`/profile/${profileDetail?._id}`}
        className="block px-6 py-5 hover:bg-gray-100"
      >
        Profile
      </Link>

      <hr className="border-t border-gray-300 mx-auto w-[92%]" />

      <button
        onClick={handleLogout}
        className="block w-full text-left px-6 py-5 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdown;
