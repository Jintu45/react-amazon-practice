
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shoe.css'

const Shoe = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }


    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(()=>{
        const getStore = getStoreCart();
        const saveCart = [];
        for(const id in getStore){
           const addProduct = products.find(product => product.id === id);
           if(addProduct){
            const quantity = getStore[id];
            addProduct.quantity = quantity;
            saveCart.push(addProduct)
           }
        }
        setCart(saveCart)
    },[products]);
    
    const addHandlerClick = (selectedProduct) => {
        console.log(selectedProduct)
        let newCart = []
        const existed = cart.find(product => product.id === selectedProduct.id)
        if(!existed){
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            existed.quantity = existed.quantity + 1;
            newCart = [...rest, selectedProduct]
        }
        setCart(newCart)
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shopContainer'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    addhandlerClick = {addHandlerClick}
                        >
                    </Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart ={clearCart} cart ={cart}>
                    <Link to='/order'>
                        <button>review Order</button> 
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shoe;