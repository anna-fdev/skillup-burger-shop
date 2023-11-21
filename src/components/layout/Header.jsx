import React from "react";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <>
      <nav>
        <div>
          <svg></svg>
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Shopping Cart</a>
        </div>
        <DropdownMenu />
      </nav>
    </>
  );
};

export default Header;
