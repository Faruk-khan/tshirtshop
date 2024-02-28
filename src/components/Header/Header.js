import React from 'react'
import classes from './Header.module.css'
import { useProductContext } from '../../stored/ProductContext'

const Header = () => {
  const { selectedItems, selectedProducts } = useProductContext()

  // const totalItems = selectedProducts.reduce((total, product) => {
  //   // Add up the quantity of each product in the cart
  //   return total + (product.quantity || 0);
  // }, 0);
  const cartItems = selectedItems.reduce((acc, product) =>{
    const existingProductIndex = acc.findIndex(item => item.id === product.id);
    if(existingProductIndex !== -1){
        acc[existingProductIndex].quantity++;
        acc[existingProductIndex].total += product.price;
    }else{
        acc.push({
            ...product,
            quantity:1,
            total:product.price
        })
    }
    return acc;
},[])
  const total = cartItems.reduce((acc, product) =>{
    return acc + product.quantity
  },0)
  return (
    <>
    <div className={classes.header}> 
        <h1>T-Shirt Store</h1>
        <button className={classes.btn}>
        Cart<span> ({total})</span>   
        </button>
    </div>
    </>
  )
}

export default Header