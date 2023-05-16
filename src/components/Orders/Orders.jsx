import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Orders.css'
import ReviewItem from '../RevieItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const removeItemFromCartHandler = id => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    const clearCartHandler = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='products-container'>
            <div className='orders-section'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        removeItemFromCartHandler={removeItemFromCartHandler}
                    >
                    </ReviewItem>)
                }
            </div>
            <div className='cart-section'>
                <Cart cart={cart} clearCartHandler={clearCartHandler}>
                    <Link to="/checkout"><button className='btn-checkout'>
                        <span>Proceed Checkout</span>
                        <FontAwesomeIcon icon={faCreditCard} />
                        </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;




// if you want to send different data from different elements to a different component then 
// simply write that element inside the component when you are calling the componenet and inside the 
// component just take another prop called "children" and inside that component just paste this 
// children inside {} that's it, it will receive the data from the component which is visible now. 
// just look at the proceed checkout button. we have used the same button inside the cart component 
// from products and orders page both .