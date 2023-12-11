import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItemAmount,
  selectItemTotalPrice,
} from "../../store/cartSlice";
import { selectMenuItemsInCart } from "../../store/menuSlice";
import { TAX, SHIPPING } from "../../constants/constants";

const CartItem = ({ menuItem: { title, img, id } }) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>

      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            dispatch(addItemToCart(id));
          }}
        >
          +
        </button>
        <input type="number" readOnly value={items[id] || 0} />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(removeItemFromCart(id))}
        >
          -
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const itemsInCart = useSelector(selectMenuItemsInCart);
  const totalPrice = useSelector(selectItemTotalPrice);
  const cartItemAmount = useSelector(selectCartItemAmount);

  if (!cartItemAmount) {
    return (
      <section className="cart">
        <main>
          <p style={{ textAlign: "center" }}>Your cart is empty!</p>
        </main>
      </section>
    );
  }

  return (
    <section className="cart">
      <main>
        {itemsInCart.map((item) => (
          <CartItem key={item.id} menuItem={item} />
        ))}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{totalPrice}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{totalPrice * TAX}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{SHIPPING}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{totalPrice + totalPrice * TAX + SHIPPING}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
