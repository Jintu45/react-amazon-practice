import React from 'react';

import './Product.css'
const Product = ({product, addhandlerClick}) => {
    // const {product, addhandlerClick} = props; 
   const {name, price, img, ratings, seller} = product;
    return (
        <div className='product'>
           <img className='shows-img' src={img} alt=''></img>
           <h2 style={{padding:"10px", margin:"15px 0px"}}>{name}</h2>
           <div className='product-info'>
                <h4>price: {price}</h4>
                <p>saller: {seller}</p>
                <p>ratting: {ratings}</p>
           </div>
           <button onClick={() => addhandlerClick(product)} className='btn'>Add To Cart</button>
        </div>
    );
};
export default Product;