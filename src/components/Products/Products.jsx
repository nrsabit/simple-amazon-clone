import React, { useEffect, useState } from 'react';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div className='products-container'>
            <div className='products-section'>
                <h2>Products will come here: {products.length}</h2>
            </div>
            <div className='cart-section'>
                <h3>The Cart will be applied here</h3>
            </div>
        </div>
    );
};

export default Products;