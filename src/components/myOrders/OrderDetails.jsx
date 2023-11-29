import React from "react";

const OrderDetails = () => {
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
            <b>Items Total</b> ₹2132
          </p>
          <p>
            <b>shipping Charges</b> ₹200
          </p>
          <p>
            <b>Tax</b> ₹213
          </p>
          <p>
            <b>Total Amount</b> ₹{2132 + 200 + 213}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <h4>12 * 232</h4>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <h4>10 * 500</h4>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <h4>10 * 1800</h4>
          </div>
          <div>
            <h4>
              <strong>Sub Total</strong>
            </h4>
            <h4>₹{2132 + 200 + 213}</h4>
          </div>
        </article>
      </main>
    </div>
  );
};

export default OrderDetails;
