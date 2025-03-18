import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

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
      const response = await apiRequest.get("/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfileDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) GetProfile();
  }, [token]);

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 bg-transparent ${
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

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                    isActive ? "bg-white/10" : "hover:bg-white/10"
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
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
                  className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden"
                >
                  <img
                    src={"./default-profile-avatar.jpg"}
                    className="w-full h-full object-cover"
                  />
                </button>
                {showDropdown && (
                  <ProfileDropdown setShowDropdown={setShowDropdown} />
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
