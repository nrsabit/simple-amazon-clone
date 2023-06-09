import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';
import cartProductsLoader from '../../Loaders/cartProductsLoader';

const Products = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const {totalProducts} = useLoaderData()
    const [currentPage, setCurrentPage] = useState(0);
    const [productsPerPage, setproductsPerPage] = useState(9);
    const totalPages = Math.ceil(totalProducts / productsPerPage)
    const pageNumbers = [...Array(totalPages).keys()]
    const productsPerPageOptions = [9, 5, 10, 20]

    const handleProductsPerPage = (event) => {
        const selectedProductsPerPage = parseInt(event.target.value);
        setproductsPerPage(selectedProductsPerPage);
        setCurrentPage(0);
      };


    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${productsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [currentPage, productsPerPage]);
    

    useEffect(() => {
        cartProductsLoader()
        .then(res => setCart(res))
    }, [])

    const handleCartItems = product =>{
        let newCart = [];
        const exists = cart.find(pd => pd.id === product._id);
        if(exists){
            product.quantity = product.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== exists.id);
            newCart = [...remaining, exists];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product._id);
    }

    const clearCartHandler = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <>
        <div className='products-container'>
            <div className='products-section'>
                {
                    products.map(product => <Product key={product._id} product={product} handleCartItems={handleCartItems}></Product>)
                }
            </div>
            <div className='cart-section'>
                <Cart cart={cart} clearCartHandler={clearCartHandler}>
                <Link to="/orders"><button className='btn-checkout'>
                        <span>Review Order</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </button></Link>
                </Cart>
            </div>
        </div>
        <div className='pagination-dropdown'>
            <h4>Show Products: </h4>
            <select value={productsPerPage} onChange={handleProductsPerPage}>
            {productsPerPageOptions.map((option) => (
            <option key={option} value={option}>
                {option} per page
            </option>
            ))}
        </select>
        </div>
        <div className='pagination-buttons'>
                    {pageNumbers.map(number => <button 
                    key={number}
                    className={currentPage === number ? 'active-page' : ''}
                    onClick={() => setCurrentPage(number)}
                    >{number}</button>)}
                </div>
        </>
    );
};

export default Products;


 // if we are loading some items from public folder, then we don't need to write the path, we can only write the file name, and if we put some item in the public folder, then it will never be changed, otherwise it can be changed
 
//  IMPORTANT: we all know that the react is unidirectional, that means we can send send data from parent to child but we can't send data from child to parent, but there is a way, and by using that we can send data from child to parent. and that is: just declare a function in the parent with parameters if needed, and then send that function to the child as parameter (props) then you will find the function in the child element in props (we can send the functions also as props and we can send anything) now you can't edit the props so you will have to store it inside another variable, and in child element now if you call the variable that contains the function, it will call the function from parent element and you can pass parameters in that function if needed, so it will be received in the parent element so like this, we can send data as function's parameters from child to parent. 

// you can't push into useState's parameter which will return the data because that is not immutable, so you will have to copy that into another array and then you can push into that and then just set again into useState by the 2nd parameter function. 