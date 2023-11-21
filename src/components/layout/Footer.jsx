import React from "react";
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";

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
        <a href="#">
          <AiFillYoutube />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
