import React from "react";
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <p>
          <i>We give attention to genuine feedback.</i> All right reserved
          @burgershop
        </p>
      </section>
      <aside>
        <h4>Follow Us</h4>
        <Link to="https://www.youtube.com" target="_blank">
          <AiFillYoutube />
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <AiFillInstagram />
        </Link>
        <Link to="https://github.com/" target="_blank">
          <AiFillGithub />
        </Link>
      </aside>
    </footer>
  );
};

export default Footer;
