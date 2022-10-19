
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handlerRemoveItem}) => {
    const {id, name, price, quantity, shipping, img} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <div className='review-info'>
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>shipping: {shipping}</small></p>
                    <span><small>Price: {quantity}</small></span>
                </div>
                <div className='review-btn'>
                    <button onClick={() => handlerRemoveItem(id)} className='delete-btn'>
                        <FontAwesomeIcon className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;