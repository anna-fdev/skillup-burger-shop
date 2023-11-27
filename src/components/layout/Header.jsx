import React from "react";
import DropdownMenu from "./DropdownMenu";
import { GiHamburger } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <div>
          <NavLink to={"/"}>
            <GiHamburger />
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"contact"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to={"about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to={"cart"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Shopping Cart
          </NavLink>
        </div>
        <DropdownMenu />
      </nav>
    </>
  );
};

export default Header;
