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
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
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
                onClick={() => setOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-lg hover:text-white/80">
              Sign in
            </button>
            <button className="px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-white/90">
              Join
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {open ? (
                <IoClose className="h-7 w-7" />
              ) : (
                <IoMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all ${open ? "block" : "hidden"}`}
        >
          <div className="pt-4 pb-2 border-t border-white/10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-lg hover:bg-white/10 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
            <button className="block w-full text-left px-4 py-3 text-lg hover:bg-white/10">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
