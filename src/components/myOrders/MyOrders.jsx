import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const orders = [
    {
      id: 1,
      status: "processing",
      itemQty: 23,
      amount: "₹2132",
      paymentMeth: "COD",
      action: <AiOutlineEye />,
    },
    {
      id: 2,
      status: "processing",
      itemQty: 3,
      amount: "₹202",
      paymentMeth: "COD",
      action: <AiOutlineEye />,
    },
    {
      id: 3,
      status: "processing",
      itemQty: 10,
      amount: "₹1000",
      paymentMeth: "COD",
      action: <AiOutlineEye />,
    },
    {
      id: 4,
      status: "processing",
      itemQty: 30,
      amount: "₹3500",
      paymentMeth: "COD",
      action: <AiOutlineEye />,
    },
  ];

  return (
    <section className="tableClass">
      <main>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.status}</td>
                  <td>{order.itemQty}</td>
                  <td>{order.amount}</td>
                  <td>{order.paymentMeth}</td>
                  <td>
                    <Link to={`/order/${order.id}`}>{order.action}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default MyOrders;
