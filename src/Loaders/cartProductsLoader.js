import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
        for(const id in storedCart){
            const addedItem = products.find(product => product.id === id);
            if(addedItem){
                addedItem.quantity = storedCart[id];
                savedCart.push(addedItem);
            }
        }
        return savedCart;
}

export default cartProductsLoader;