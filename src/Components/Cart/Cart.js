import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total = total + product.price * product.quantity;
        shipping += product.shipping;
    }
    const tax = parseFloat((total * 0.1 + shipping * 0.3).toFixed(2));
    const totalAmount = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <h3>Selected item: {quantity}</h3>
            <p>Price: ${total}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Total Amount: ${(totalAmount).toFixed(2)}</h5>
        </div>
    );
};

export default Cart;