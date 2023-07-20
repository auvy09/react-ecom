import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Order summary</h2>
            <h3>Selected item: {cart.length}</h3>
        </div>
    );
};

export default Cart;