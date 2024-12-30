import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Style from './Style.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteItemSelected } from '../reduce center/Actions';

function Table({ itemSelected , deleteItemSelected}) {
    const [comment, setComment] = useState('');
    const [quantities, setQuantities] = useState({});
    const [total, setTotal] = useState(0.0);
    const { itemName } = useParams();

    // Initialize quantities for all items
    useEffect(() => {
        const initialQuantities = {};
        itemSelected.forEach(item => {
            initialQuantities[item.id] = 1; // Default quantity is 1 for all items
        });
        setQuantities(initialQuantities);
    }, [itemSelected]);

    // Update total whenever quantities or items change
    useEffect(() => {
        const newTotal = itemSelected.reduce((sum, item) => {
            const quantity = quantities[item.id] || 1;
            return sum + item.price * quantity;
        }, 0);
        setTotal(newTotal);
    }, [quantities, itemSelected]);

    const updateQuantity = (itemId, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: Math.max(1, (prevQuantities[itemId] || 1) + delta) // Ensure quantity is at least 1
        }));
    };

    return (
        <>
            <h1>Liste Commandes</h1>

            <table className={Style.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {itemSelected.map((item) => {
                        const quantity = quantities[item.id] || 1;
                        const subtotal = item.price * quantity;
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <button
                                        className={Style.quantity_button}
                                        onClick={() => updateQuantity(item.id, -1)}
                                    >
                                        -
                                    </button>
                                    {quantity}
                                    <button
                                        className={Style.quantity_button}
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </td>
                                <td>{item.price.toFixed(2)}$</td>
                                <td>{subtotal.toFixed(2)}$</td>
                                <td>
                                    <button className={Style.remove_button} onClick={() =>deleteItemSelected(item)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className={Style.comment_section}>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>

            <div className={Style.totals}>
                <p>
                    <strong>Subtotal:</strong> {total.toFixed(2)}$
                </p>
                <p>
                    <strong>Total (incl. taxes):</strong> {(total/0.95).toFixed(2)}$
                </p>
            </div>

            <Link to={`/pay/${(total/0.95).toFixed(2)}`}>
                <button className={Style.pay_button}>Pay</button>
            </Link>
        </>
    );
}

// Mapping Redux state to component props
const mapStateToProps = (state) => ({
    itemSelected: state.itemSelected || [], // Fallback to an empty array
});
const mapDispatchToProps = (dispatch) => ({
    deleteItemSelected: (item) => dispatch(deleteItemSelected(item)), // Map the action to props
});

export default connect(mapStateToProps ,mapDispatchToProps)(Table);
