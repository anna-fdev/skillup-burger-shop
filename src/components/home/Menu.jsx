import React from "react";
import MenuCard from "./MenuCard";

import { useSelector } from "react-redux";

const Menu = () => {
  const menuItems = useSelector((state) => state.menu.items);
  return (
    <div id="menu">
      <h1>Menu</h1>
      <div>
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
