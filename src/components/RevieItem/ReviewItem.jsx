import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, removeItemFromCartHandler}) => {
    const {id, name, img, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='item-details'>
                <p className='item-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => removeItemFromCartHandler(id)} className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;