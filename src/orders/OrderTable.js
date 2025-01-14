import React from "react";

const orders = [
  {
    date: "10 Jun",
    time: "01:16",
    orderId: "#114226",
    table: "Table 5",
    status: "NEW",
    deliveryTime: "4 hours",
    description: "",
    total: "$0.00",
  },
  {
    date: "10 Jun",
    time: "01:16",
    orderId: "#114228",
    table: "Table 5",
    status: "NEW",
    deliveryTime: "4 hours",
    description: "Bread basket",
    total: "$8.00",
  },
  // Add more dummy orders for testing
];

const OrderTable = ({ filter }) => {
  // Filter orders dynamically
  const filteredOrders = orders.filter((order) => {
    if (filter === "today") {
      // Assume "today" filters orders by today's date
      return order.date === "10 Jun";
    }
    return true; // Show all for 'previous'
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Opened at</th>
          <th>Delivery time</th>
          <th>Order</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {filteredOrders.map((order, index) => (
          <tr key={index}>
            <td>
              <span className="date">{order.date}</span>
              <br />
              <span className="time">{order.time}</span>
            </td>
            <td>{order.deliveryTime}</td>
            <td>
              <span className="order-id">
                <i className="fa fa-cutlery"></i> {order.orderId}, {order.table}
              </span>
              <br />
              <span className="order-description">{order.description}</span>
            </td>
            <td>
              <span className="status new">{order.status}</span>
            </td>
            <td>
              <div className="d-flex align-items-center justify-content-between">
                <button className="btn btn-primary btn-payment">
                  Proceed to payment
                </button>
                <span className="order-total">{order.total}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
