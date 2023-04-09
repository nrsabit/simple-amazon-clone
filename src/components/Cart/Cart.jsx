import React, { Children } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, clearCartHandler, children}) => {
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
                <button className='btn-clear-cart' onClick={clearCartHandler}>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    {children}
            </div>
        </div>
    );
};

export default Cart;