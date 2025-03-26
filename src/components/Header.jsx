import React, { useContext, useState } from "react";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "@/context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { token } = useContext(AuthContext);

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
        <NavLink>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Services
          </li>
        </NavLink>
        <NavLink>
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
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center justify-center"
            >
              <FaUserCircle className="w-9 h-9 text-gray-800" />
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
