
import React from "react";

/*
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
];*/

const OrderDetails = () => {

  return (
    <tr className="collapse " id="collapseCmdDetails">
      <td colSpan={4}  >
          <table className="table table-borderless">
              <thead>
                  <tr>
                      <th>Nom</th>
                      <th>Qte</th>
                      <th>P.U</th>
                      <th>Somme</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>pizza</td>
                      <td>2</td>
                      <td>50.00</td>
                      <td>100.00</td>
                  </tr>
              </tbody>
          </table>
      </td>
    </tr>
  );
};

export default OrderDetails;
