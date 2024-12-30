import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Style from './Pay.module.css'; // Import your CSS module
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';

const PaymentInterface = () => {
  const { Total } = useParams();
  const [subtotal, setSubtotal] = useState((parseInt(Total) / 0.95).toFixed(2));
  const [tips, setTips] = useState('');
  const [total, setTotal] = useState(parseFloat(subtotal));

  useEffect(() => {
    const numericTips = parseFloat(tips) || 0; // Convertir les pourboires en nombre ou utiliser 0
    setTotal(parseFloat(subtotal) + numericTips);
  }, [subtotal, tips]);

  // Gestion des clics des boutons numériques
  const handleNumberClick = (value) => {
    if (value === 'X') {
      setTips(''); // Réinitialiser les pourboires
    } else if (value === '.') {
      if (!tips.includes('.')) {
        setTips((prev) => prev + '.'); // Ajouter un point décimal si non présent
      }
    } else {
      setTips((prev) => prev + value); // Ajouter un chiffre
    }
  };

  return (
    <>
      <Header />
      <div className={Style.pay_container}>
        <div className="container-fluid">
          <div className="row">
            {/* Calculator Section */}
            <div className="col-sm-6">
              <div className={Style.calculator}>
                {['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', 'X'].map((value) => (
                  <button
                    key={value}
                    className={Style.btn}
                    onClick={() => handleNumberClick(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Details Section */}
            <div className="col-sm-6">
              <div className={Style.payCenter}>
                <div className={Style.subtotal}>
                  <span>Subtotal:</span>
                  <span>${parseFloat(subtotal).toFixed(2)}</span>
                </div>

                <div className={Style.tips_section}>
                  <label htmlFor="tips">Tips:</label>
                  <input
                    type="text"
                    id="tips"
                    value={tips}
                    onChange={(e) => setTips(e.target.value.replace(/[^0-9.]/g, ''))} // Autoriser uniquement les chiffres et le point
                  />
                </div>

                <div className={Style.total}>
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className={Style.payment_options}>
                  <div>
                    <input type="radio" id="cash" name="payment" value="Cash" />
                    <label htmlFor="cash">Cash</label>
                  </div>
                  <div>
                    <input type="radio" id="card" name="payment" value="Card" />
                    <label htmlFor="card">Card</label>
                  </div>
                </div>

                <div className={Style.print_receipt}>
                  <label htmlFor="print">Print receipt:</label>
                  <input type="checkbox" id="print" />
                </div>

                <div className={Style.buttons}>
                  <Link to="/home">
                    <button className={Style.close_button}>Close without payment</button>
                  </Link>
                  <button className={Style.pay_button}>Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInterface;
