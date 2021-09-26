import React from "react";
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const singer of cart) {
        total = total + singer.Charge;
    }
    return (
        <div>
            <h2><strong>Performer Details:</strong></h2>
            <h3>Total Perfomer: {props.cart.length}</h3>
            <h3>Total Cost: {total}</h3>
        </div>
    );
};

export default Cart;