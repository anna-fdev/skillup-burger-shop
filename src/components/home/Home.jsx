import React, { useState } from "react";
import Menu from "./Menu";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuExpand = () => {
    setShowMenu(true);
  };

  return (
    <>
      <main className="home">
        <div>
          <h1>Burger Shop</h1>
          <p>Give yourself a tasty burger</p>
        </div>
        <a href="#menu" onClick={handleMenuExpand}>
          Explore Menu
        </a>
      </main>
      {showMenu && <Menu />}
    </>
  );
};

export default Home;
