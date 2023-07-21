import { getShoppingCart } from "../../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
    const productData = await fetch('products.json');
    const products = await productData.json();
    const savedCart = getShoppingCart();
    const previousCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);

        if (addedProduct) {
            const quantity = savedCart[id];

            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);


        }

    }

    return { products, previousCart };
};