import React, { useEffect, useState } from 'react';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // if we are loading some items from public folder, then we don't need to write the path, we can only write the file name, and if we put some item in the public folder, then it will never be changed, otherwise it can be changed
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