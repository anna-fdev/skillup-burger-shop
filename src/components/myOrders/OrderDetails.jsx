import React from "react";
import { TAX, SHIPPING } from "../../constants/constants";
import { useSelector } from "react-redux";
import { selectCartItems, selectItemTotalPrice } from "../../store/cartSlice";
import { selectMenuItemsInCart } from "../../store/menuSlice";

const OrderDetails = () => {
  const totalPrice = useSelector(selectItemTotalPrice);
  const itemsInCart = useSelector(selectMenuItemsInCart);
  const cartItems = useSelector(selectCartItems);

  const orderAmount = totalPrice + totalPrice * TAX + SHIPPING;

  return (
    <div className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b> Some Address
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b> Some Name
          </p>
          <p>
            <b>Phone</b> 123456789
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b> Processing
          </p>
          <p>
            <b>Placed at</b> 20:00:01
          </p>
          <p>
            <b>Delivered at</b> 21:00:59
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b> COD
          </p>
          <p>
            <b>Reference</b> #763485769345
          </p>
          <p>
            <b>Paid at</b> 21:05:00
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b> ₹{totalPrice}
          </p>
          <p>
            <b>Shipping Charges</b> ₹{SHIPPING}
          </p>
          <p>
            <b>Tax</b> ₹{totalPrice * TAX}
          </p>
          <p>
            <b>Total Amount</b> ₹{orderAmount}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          {itemsInCart.map((item) => {
            return (
              <div key={item.id}>
                <h4>{item.title}</h4>
                <h4>{`${cartItems[item.id]} * ${item.price}`}</h4>
              </div>
            );
          })}

          <div>
            <h4>
              <strong>Sub Total</strong>
            </h4>
            <h4>₹{orderAmount}</h4>
          </div>
        </article>
      </main>
    </div>
  );
};

export default OrderDetails;
