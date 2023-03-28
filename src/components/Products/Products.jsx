import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleCartItems = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='products-container'>
            <div className='products-section'>
                {
                    products.map(product => <Product key={product.id} product={product} handleCartItems={handleCartItems}></Product>)
                }
            </div>
            <div className='cart-section'>
                <h3>Order Summary</h3>
                <p>Total Cart Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;


 // if we are loading some items from public folder, then we don't need to write the path, we can only write the file name, and if we put some item in the public folder, then it will never be changed, otherwise it can be changed
 
//  IMPORTANT: we all know that the react is unidirectional, that means we can send send data from parent to child but we can't send data from child to parent, but there is a way, and by using that we can send data from child to parent. and that is: just declare a function in the parent with parameters if needed, and then send that function to the child as parameter (props) then you will find the function in the child element in props (we can send the functions also as props and we can send anything) now you can't edit the props so you will have to store it inside another variable, and in child element now if you call the variable that contains the function, it will call the function from parent element and you can pass parameters in that function if needed, so it will be received in the parent element so like this, we can send data as function's parameters from child to parent. 

// you can't push into useState's parameter which will return the data because that is not immutable, so you will have to copy that into another array and then you can push into that and then just set again into useState by the 2nd parameter function. 