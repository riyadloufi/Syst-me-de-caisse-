import React from "react";

const HistorySidebar = () => {
  const receipts = [
    { id: "369528", table: "1", total: "21.00" },
    { id: "369527", table: "10", total: "30.04" },
    { id: "369526", table: "10", total: "92.02" },
    { id: "369525", table: "7", total: "324.07" },
    { id: "369524", table: "7", total: "324.07" },
    { id: "369523", table: "7", total: "324.07" },
    { id: "369522", table: "7", total: "324.07" },
    { id: "369521", table: "7", total: "324.07" },
    { id: "369520", table: "7", total: "324.07" },
    { id: "369519", table: "7", total: "324.07" },
    { id: "369518", table: "7", total: "324.07" },
    { id: "369517", table: "7", total: "324.07" },
    { id: "369516", table: "7", total: "324.07" },
    { id: "369515", table: "7", total: "324.07" },
    { id: "369514", table: "7", total: "324.07" },
    { id: "369513", table: "7", total: "324.07" },
    { id: "369512", table: "7", total: "324.07" },
    { id: "369511", table: "7", total: "324.07" },
    { id: "369510", table: "7", total: "324.07" },
    { id: "369509", table: "7", total: "324.07" },
    { id: "369508", table: "7", total: "324.07" },
    { id: "369507", table: "7", total: "324.07" },
    { id: "369506", table: "7", total: "324.07" },
    { id: "369505", table: "7", total: "324.07" },
    { id: "369504", table: "7", total: "324.07" },

  ];

  return (
      <ul className="list-group list-group-flush receipt-list ">
        {receipts.map((receipt) => (
          <li key={receipt.id} className="list-group-item d-flex justify-content-between">
            <span className="">
              № {receipt.id}, Table {receipt.table}
            </span>
            <span>{receipt.total} DH</span>
          </li>
        ))}
      </ul>
  );
};

export default HistorySidebar;
