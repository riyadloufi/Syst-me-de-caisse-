import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import PrintReservation from "./PrintCmdDetails"; 
import "../App.css";

const HistoryContent = () => {
  const receipt = {
    id: "369528",
    type: "sur-place",
    waiter: "Loubna",
    table: "1",
    customers: "2",
    items: [
      { name: "pizza", quantity: 1, price: "15.00", subtotal: "15.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },
      { name: "cola", quantity: 1, price: "6.00", subtotal: "6.00" },


    ],
    total: "27.00",
    payment: "Espece",
  };
  
  

  const componentRef = useRef();

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=300');
    printWindow.document.write('<html><head><title>Print Receipt</title></head><body id="printHtml">');
    printWindow.document.write(componentRef.current.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };




  return (
    <div className="card historyContent">
      <div ref={componentRef} className="d-none">
          <PrintReservation />
        </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Commande #{receipt.id}</h5>
          <button className="btn btn-success me-2" onClick={handlePrint}><FontAwesomeIcon icon={faPrint} /> Imprimer</button>
        </div>
        
        <table className="my-5 tableHistoryCmdIdentify">
          <tbody>
            <tr>
              <td className="firstTd">type de commande:</td>
              <td className="secondTd">{receipt.type}</td>
            </tr>
            <tr>
              <td className="firstTd">Waiter:</td>
              <td className="secondTd">{receipt.waiter}</td>
            </tr>
            <tr>
              <td className="firstTd">Table :</td>
              <td className="secondTd">{receipt.table}</td>
            </tr>
            <tr>
              <td className="firstTd">Numbre des clients:</td>
              <td className="secondTd">{receipt.customers}</td>
            </tr>
          </tbody>
        </table>
        <table className="table tableHistoryCmdItems">
          <thead>
            <tr>
              <th className="" id="name">Nom</th>
              <th className="text-end" id="qte">Quantité</th>
              <th className="text-end" id="price">Prix</th>
              <th className="text-end" id="sum">Total</th>
            </tr>
          </thead>
          <tbody>
            {receipt.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td className="text-end">{item.quantity}</td>
                <td className="text-end">{item.price} DH</td>
                <td className="text-end">{item.subtotal} DH</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="text-end">
          <p>
            <strong>Total : &nbsp; &nbsp;</strong>{receipt.total} DH
          </p>
          <p>
            <strong>Payment : &nbsp; &nbsp;</strong>{receipt.payment}

          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryContent;



/*const handlePrintRedirect = () => {
    const printWindow = window.open(
      "/printReceipt.html",
      "_blank",
      "width=400,height=600,scrollbars=yes,resizable=no"
    );

    if (printWindow) {
      printWindow.focus(); // Ensure the window is in focus
    }
  };*/
