
const Cart = ({cart, clearCart, children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grand = total + shipping + tax;
    return (
        <div>
            <h3>Product summary</h3>
            <p>selected cart: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grand.toFixed(2)}</h4>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            {children}
        </div>
    )
};
export default Cart;