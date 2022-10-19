import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
const Order = () => {
    const {products, previousCart} = useLoaderData();        //destructuring
    const [cart, setCart] = useState(previousCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    const handlerRemoveItem = (id) => {
        const reamining = cart.filter(product => product.id !== id);
        setCart(reamining);
        removeFromDb(id)
    }
    return (
        <div className='shopContainer'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handlerRemoveItem ={handlerRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>not items please shop <Link to='/'>Please shop</Link> </h2>
                }

            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart ={cart}>
                    <Link to='/shipping'>
                        <button>Process shipping</button>
                    </Link>
                </Cart>
            </div>
        </div> 
    );
};

export default Order;