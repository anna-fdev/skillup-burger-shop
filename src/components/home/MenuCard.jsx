import React from "react";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";

const MenuCard = ({ item: { id, title, img, price, delay = 0 } }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={img} alt={title} />

        <h5>₹{price}</h5>

        <p>{title}</p>

        <Popup
          trigger={<button>Add to Cart</button>}
          onOpen={() => {
            dispatch(addItemToCart(id));
          }}
        >
          <div
            style={{
              color: "red",
              transform: "translate(0%,-500%)",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Added to cart!
          </div>
        </Popup>
      </main>
    </motion.div>
  );
};

export default MenuCard;
