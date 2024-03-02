import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const selectProduct = (product) => {
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      product,
    ]);
  };
  const addToCart = (products) => {
    // You can add any additional logic here before adding the product to the cart
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, products]);
  };

  const increaseQuantity = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const decreaseQuantity = (item) => {
    setSelectedItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );
      if (itemIndex !== -1 && prevItems[itemIndex].quantity > 1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity - 1,
          total: updatedItems[itemIndex].total - updatedItems[itemIndex].price,
        };
        return updatedItems;
      }
      return prevItems;
    });
  };
  return (
    <ProductContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
        selectProduct,
        addToCart,
        selectedItems,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
