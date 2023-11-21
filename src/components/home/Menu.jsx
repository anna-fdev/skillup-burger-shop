import React from "react";
import MenuCard from "./MenuCard";

import burgerImg1 from "../../assets/burger1.png";
import burgerImg2 from "../../assets/burger2.png";
import burgerImg3 from "../../assets/burger3.png";

const Menu = () => {
  const menuItems = [
    {
      itemNum: 1,
      burgerSrc: burgerImg1,
      price: 200,
      title: "CHEESE BURGER",
      handler: 1,
      delay: 0,
    },
    {
      itemNum: 2,
      burgerSrc: burgerImg2,
      price: 500,
      title: "VEG CHEESE BURGER",
      handler: 2,
      delay: 0,
    },
    {
      itemNum: 3,
      burgerSrc: burgerImg3,
      price: 1800,
      title: "CHEESE BURGER WITH FRENCH FRIES",
      handler: 3,
      delay: 0,
    },
  ];
  return (
    <div id="menu">
      <h1>Menu</h1>
      <div>
        {menuItems.map((item) => (
          <MenuCard
            key={item.itemNum}
            title={item.title}
            itemNum={item.itemNum}
            burgerSrc={item.burgerSrc}
            delay={item.delay}
            handler={item.handler}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
