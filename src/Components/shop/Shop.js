import React, { useEffect, useState } from 'react';

import './Shop.css';
import Product from '../product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

    const [cart, setCart] = useState([]);
    const products = useLoaderData();
    useEffect(() => {

        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];

                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);


    }, [products])
    const addToCart = (product) => {
        let newCart = [];
        const exists = cart.find(prod => prod.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(prod => prod.id !== product.id);
            exists.quantity += 1;
            newCart = [...rest, exists];

        }

        setCart(newCart);
        addToDb(product.id);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}></Product>)


                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;