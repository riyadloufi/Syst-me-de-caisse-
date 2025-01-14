import React from "react";
import '../App.css';

const PrintReservation = () => {

    return (
        <div className="container-fluid printDiv">
            <div>
                <img className="logo mb-2" style={{ width: "70px", display: "flex", justifySelf: "center" }} src="../public/logo192.png" alt="logo" />
                <div className="text-center">
                    <h3>nom de restau</h3>
                    <p>CMC tamesna region RSK Maroc</p>
                    <p><strong>Tél :</strong> 06 06 06 06 06</p>
                    <p><strong>04/01/2025 16:23</strong></p>
                </div>
            </div>

            <hr style={{ borderTop: "1px dashed" }} />


            <table className="receiptTable">
                <tbody>
                    <tr>
                        <td className="thText" style={{ width: '60%', fontWeight: 'bold'}}>Commande #</td>
                        <td className="tdText" style={{ width: '40%;' }}>369528</td>
                    </tr>
                    <tr>
                        <td className="thText" style={{ width: '60%', fontWeight: 'bold'}}>type de commande:</td>
                        <td className="tdText" style={{ width: '40%;' }}>sur-place</td>
                    </tr>
                    <tr>
                        <td className="thText" style={{ width: '60%', fontWeight: 'bold'}}>Waiter:</td>
                        <td className="tdText" style={{ width: '40%;' }}>Loubna</td>
                    </tr>
                    <tr>
                        <td className="thText" style={{ width: '60%', fontWeight: 'bold'}}>Table :</td>
                        <td className="tdText" style={{ width: '40%;' }}>4</td>
                    </tr>
                    <tr>
                        <td className="thText" style={{ width: '60%', fontWeight: 'bold' }}>Numbre des clients:</td>
                        <td className="tdText" style={{ width: '40%;' }}>3</td>
                    </tr>
                </tbody>
            </table>


            <hr style={{ borderTop: '1px dashed' }} />


            <table className="table receiptDetails ">
                <thead className="pb-1">
                    <tr>
                        <th style={{ width: '47%' }}>Nom</th>
                        <th className="text-end" style={{ width: '10%' }}>Qte</th>
                        <th className="text-end" style={{ width: '18%' }}>P.U</th>
                        <th className="text-end" style={{ width: '25%' }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>cake</td>
                        <td className="text-end">2</td>
                        <td className="text-end">30.00 DH</td>
                        <td className="text-end">60.00 DH</td>
                    </tr>

                </tbody>
            </table>
            <hr style={{ borderTop: '1px dashed' }} />
            <div className="text-center">
                <p>
                    <strong>Total à payer : &nbsp;</strong>60.00 DH
                </p>
            </div>
            <hr style={{ borderTop: '1px dashed' }} />
            <div className="text-center">
                <p>BONNE APPETITE</p>
            </div>
        </div>
    );
};

export default PrintReservation;