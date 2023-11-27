import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

import founder from "../../assets/skj.jpg";

const About = () => {
  return (
    <div className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>
            This is Burger Shop. The place for the most tasty burgers on the
            entire earth!
          </p>
          <p>
            Explore the various types of food and burgers. Click below to see
            the menu.
          </p>
          <Link to="/">
            <BiSearch />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={founder} alt="" />
              <h3>Nelson</h3>
            </div>
            <p>
              I am Nelson, the founder of Burger Shop. Affiliated to God
              Taste...
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default About;
