import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name, price, img, ratings, seller} = props.product;
    const handleCartItems = props.handleCartItems;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className="product-title">{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='seller'>Manufecturer: {seller}</p>
                <p className="rating">Ratting: {ratings} Star</p>
            </div>
            <button className='btn-add-cart' onClick={() => handleCartItems(props.product)}>Add to Cart
            <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product; 