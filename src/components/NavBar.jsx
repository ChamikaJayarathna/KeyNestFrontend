import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";
import { jwtDecode } from "jwt-decode";

const NavBar = () => {
  const [profileDetail, setProfileDetail] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const location = useLocation();
  const { currentUser } = useContext(AuthContext);

  const token = currentUser?.token;
  const isHome = location.pathname === "/";

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/property", text: "Property" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
  ];

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
    if (token) GetProfile();
  }, [token]);

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 bg-transparent mt-2 ${
        isHome ? "text-white" : "text-custom-teal-blue"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col">
            <h1 className="text-3xl font-bold">KeyNest</h1>
            <p className="text-xs opacity-80 hidden lg:block">
              The Property Management Company
            </p>
          </Link>

          <div className="hidden lg:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                  isActive
                    ? isHome
                      ? "bg-white/20 text-white"
                      : "bg-custom-teal-blue text-white"
                    : isHome
                    ? "hover:bg-white/20 hover:text-white"
                    : "hover:bg-gray-200 hover:text-custom-teal-blue"
                }`
              }
            >
              {link.text}
            </NavLink>
            
            ))}
          </div>

          <div className="flex items-center gap-6 relative">
            {!currentUser ? (
              <>
                <Link to="/sign-in">
                  <button className="hidden md:block text-lg hover:text-white/80">
                    Sign in
                  </button>
                </Link>
                <Link to="/sign-up">
                  <button className="px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-white/90">
                    Join
                  </button>
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400"
                >
                  <img
                    src={"./default-profile-avatar.jpg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <ProfileDropdown setShowDropdown={setShowDropdown} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
