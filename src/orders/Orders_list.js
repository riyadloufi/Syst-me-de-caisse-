import React, {useState, useEffect} from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";
import ParamsListCmds from "../Liste_cmds";

const OrdersPage = () => {

    const [date, setDate] = useState("");
    const [timeStamp, setTimestamp] = useState("");

    useEffect(()=>{
        const updateTime = () => {
            const now = new Date();
            // const day = now.toLocaleDateString();  returns the date in the format of the computer or device used
            const year = now.getFullYear();
            const month = String(now.getMonth()+1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hour = String(now.getHours()).padStart(2, '0');
            const min = String(now.getMinutes()).padStart(2, '0');
            const second = String(now.getSeconds()).padStart(2, '0');
            setTimestamp(hour + ":" + min + ":" + second);
            setDate(day + "/" + month + "/" + year);
        }
        updateTime();
        const timer = setInterval(updateTime, 1000); // timer updates every 1s
        return () => clearInterval(timer);  // if we dont clear the timer, it will continue to run and cause memory leaks
    }, [])


    return (
        <div>
            <Navbar />
            <ParamsListCmds />
            <div className="orders-list main">

                {/* Filter Buttons */}
                <div className="today-date-time">
                    <p className="today-date">Aujourd'hui : {date}</p>
                    <p className="today-time">{timeStamp}</p>
                </div>

                {/* Data Table */}
                <table className="orders-list-table table table-striped">
                    <thead>
                        <tr>
                            <th style={{ width: "15%" }}>Faite à</th>
                            <th style={{ width: "47%" }}>Commande</th>
                            <th style={{ width: "38%" }}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Order Row */}
                        {/* Order Data Row */}
                        <tr
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCmdDetails"
                        aria-expanded="false"
                        aria-controls="collapseCmdDetails">
                            <td>
                                <span className="time">12:16</span>
                            </td>
                            <td>
                                <span className="order-id">
                                    <small className="order-id-type"><FontAwesomeIcon icon={faUtensils} />&nbsp; sur place</small> &gt; #114226, Table 5  
                                </span>
                                <br />
                                <span className="order-description">notes sur la commande</span>
                            </td>
                            <td>
                                <div className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-primary btn-payment">
                                        Payer
                                    </button>
                                    <span className="order-total">1200.00 &nbsp; DH</span>
                                </div>
                            </td>
                        </tr>
                        {/* End Order Data Row */}

                        {/* Order Details Row */}
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
                        {/* End Order Details Row */}
                        {/* End Order Row */}

                        {/* Order Row */}
                        {/* Order Data Row */}
                        <tr
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCmdDetails2"
                        aria-expanded="false"
                        aria-controls="collapseCmdDetails2">
                            <td>
                                <span className="time">16:44</span>
                            </td>
                            <td>
                                <span className="order-id">
                                    <small className="order-id-type"><FontAwesomeIcon icon={faBox}/>&nbsp; emportée</small> &gt; #114226, Table 5
                                </span>
                                <br />
                                <span className="order-description">notes sur la commande</span>
                            </td>
                            <td>
                                <div className="d-flex align-items-center justify-content-between">
                                    <button className="btn btn-primary btn-payment">
                                        Payer
                                    </button>
                                    <span className="order-total">70.00 &nbsp; DH</span>
                                </div>
                            </td>
                        </tr>
                        {/* End Order Data Row */}

                        {/* Order Details Row */}
                        <tr className="collapse " id="collapseCmdDetails2">
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
                                            <td>1</td>
                                            <td>50.00</td>
                                            <td>50.00</td>
                                        </tr>
                                        <tr>
                                            <td>cola</td>
                                            <td>2</td>
                                            <td>10.00</td>
                                            <td>20.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>

                        </tr>
                        {/* End Order Details Row */}
                        {/* End Order Row */}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default OrdersPage;
