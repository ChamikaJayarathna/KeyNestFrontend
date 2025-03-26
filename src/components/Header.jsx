import React, { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "@/context/AuthContext";
import apiRequest from "@/lib/apiRequest";
import ProfileDropdown from "./ProfileDropdown";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [profileDetail, setProfileDetail] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const { token } = useContext(AuthContext);

  const GetProfile = async () => {
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;

      const response = await apiRequest.get(`/auth/profile/${userId}`);
      const data = response.data;
      setProfileDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      GetProfile();
    }
  }, [token]);

  return (
    <section className="flex justify-between items-center shadow-sm p-4 relative">
      <div className="flex items-center gap-2 ml-5">
        <img src="./logo.svg" width={40} height={40} alt="Logo" />
      </div>
      <ul className="hidden md:flex gap-16 ml-25">
        <NavLink to={"/"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
        </NavLink>
        <NavLink to={"/property"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Property
          </li>
        </NavLink>
        <NavLink to={"/services"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Services
          </li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Contact
          </li>
        </NavLink>
      </ul>
      <div className="relative mr-5">
        {!token ? (
          <Link to={"/sign-in"}>
            <Button>Join</Button>
          </Link>
        ) : (
          <div className="relative">
            <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
              <img
                src={profileDetail?.profile_img}
                className="w-13 h-13 object-cover rounded-full border-3 border-gray-300"
                alt="Profile"
              />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-white text-black shadow-lg rounded-lg z-50">
                <ProfileDropdown />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
