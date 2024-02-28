import React, { useState } from 'react';
import classes from './SelectedItem.module.css';
import { useProductContext } from '../stored/ProductContext';

const SelecctedItem = () => {
    const { selectedProducts, addToCart } = useProductContext();
    const [products, setProducts] = useState(selectedProducts);

    
    // const handleAddToCart = (product, size) => {
    //     const updatedProducts = products.map(item => {
    //         if (item.id === product.id && item.size === size) {
    //             const updatedProduct = {...item};
    //             switch(size) {
    //                 case 'S':
    //                     updatedProduct.quantityS -= 1;
    //                     break;
    //                 case 'M':
    //                     updatedProduct.quantityM -= 1;
    //                     break;
    //                 case 'L':
    //                     updatedProduct.quantityL -= 1;
    //                     break;
    //                 default:
    //                     break;
    //             }
    //             return updatedProduct;
    //         }
    //         return item;
    //     });
    const handleAddToCart = (product, size) => {
        const updatedProduct = { ...product };
        switch (size) {
            case 'S':
                updatedProduct.quantityS -= 1;
                break;
            case 'M':
                updatedProduct.quantityM -= 1;
                break;
            case 'L':
                updatedProduct.quantityL -= 1;
                break;
            default:
                break;
        }
        addToCart(updatedProduct);
       // setProducts(updatedProducts);
       // addToCart(product);
    };

    
        // Update the state with the updated products
        // Call addToCart with the product
   // };
    return (
        <div className={classes.select}>
            <h1>SelectedItem</h1>
            {selectedProducts.map(product => (
                <div className={classes.items} key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <span>
                        BuyS
                        <button onClick={() => handleAddToCart(product, 'S')} disabled={product.quantityS <= 0}>
                            {product.quantityS}
                        </button>
                    </span>
                    <span>
                        Buy M
                        <button onClick={() => handleAddToCart(product, 'M')} disabled={product.quantityM <= 0}>
                            {product.quantityM}
                        </button>
                    </span>
                    <span>
                        BuyL
                        <button onClick={() => handleAddToCart(product, 'L')} disabled={product.quantityL <= 0}>
                            {product.quantityL}
                        </button>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default SelecctedItem;
