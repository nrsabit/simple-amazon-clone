import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const item of cart){
        total = total + item.price * item.quantity;
        shipping = shipping + item.shipping;
        quantity = quantity + item.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-container'>
            <h5 className='cart-heading'>Order Summary</h5>
            <div className='cart-details'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total.toFixed(2)}</p>
                <p>Total Shipping Charge: ${shipping.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
        </div>
    );
};

export default Cart;