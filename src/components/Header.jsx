import React from "react";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="flex justify-between items-center shadow-sm p-4 relative">
      <div className="flex items-center gap-2 ml-5">
        <img src="./logo.svg" width={40} height={40} />
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
      <div className="flex mr-5">
        <Link to={"/sign-in"}>
          <Button>Join</Button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
