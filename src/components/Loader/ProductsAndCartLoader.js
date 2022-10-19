import { getStoreCart } from "../../utilities/fakedb";


export const ProductsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

     const saveCart = getStoreCart();
    const previousCart = [];
   for(const id in saveCart){
    console.log(id)
    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
        const quantity = saveCart[id];
        addedProduct.quantity = quantity ;
        previousCart.push(addedProduct)
    }
   }
   
    return { products: products, previousCart: previousCart };
}