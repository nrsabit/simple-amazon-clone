import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart)
    const loadedProducts = await fetch('http://localhost:5000/products-by-id', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(ids)
    });
    const products = await loadedProducts.json();

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