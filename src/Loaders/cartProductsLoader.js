import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('http://localhost:5000/products');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
        for(const id in storedCart){
            const addedItem = products.find(product => product._id === id);
            if(addedItem){
                addedItem.quantity = storedCart[id];
                savedCart.push(addedItem);
            }
        }
        return savedCart;
}

export default cartProductsLoader;