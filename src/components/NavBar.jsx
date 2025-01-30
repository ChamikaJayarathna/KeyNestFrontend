import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/property", text: "Property" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-5 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white p-2 rounded-md hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {open ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center lg:justify-start lg:flex-initial">
            <Link to="/" className="flex flex-col items-center lg:items-start">
              <h1 className="text-2xl md:text-3xl font-bold">KeyNest</h1>
              <p className="text-xs opacity-90 hidden lg:block">
                The Property Management Company
              </p>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8 font-medium mx-4">
          {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors ${
                    isActive ? "bg-white/10" : ""
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block hover:text-white/80 transition-colors">
              Sign in
            </button>
            <button className="px-6 py-2 bg-white text-custom-navy-blue rounded-md hover:bg-white/90 transition-colors">
              Join
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors ${
                    isActive ? "bg-white/10" : ""
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
            <button className="md:hidden block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
