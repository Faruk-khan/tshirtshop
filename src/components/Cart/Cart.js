import React,{useState} from 'react'
import classes from './Cart.module.css'
import { useProductContext } from '../../stored/ProductContext'

const Cart = () => {
    const {selectedItems,increaseQuantity, decreaseQuantity} = useProductContext();
    const [cartItm, setCartItm] = useState(selectedItems);

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
    
    const totalAmount = cartItems.reduce((total, item) => total + item.total, 0);

   const handleItemIncrease = (item) => {
    increaseQuantity({...item,amount:1})
   }
   const handleItemDecrease =(id) =>{
    decreaseQuantity(id)
   }
   console.log(cartItems)
  return (
    <div className={classes.cart}> 
    <h1>Cart</h1>
       <ul>
                {cartItems.map((item, index) => (
                    <li key={index} className={classes['cart-item']}>
                            <h2>{item.name}</h2>
                            <div className={classes.summary}>
                                <span className={classes.price}>Price: {item.price}</span>
                                <span className={classes.amount}>{item.price} x {item.quantity}</span>
                                <span>Total: {item.total}</span>
                            </div>
                       
                        <div className={classes.actions}>
                            <button onClick={() => handleItemDecrease(item.id)}>−</button> {/* Decrease quantity */}
                            <button onClick={() => handleItemIncrease(item.id)}>+</button> {/* Increase quantity */}
                        </div>
                    </li>
                ))}
            </ul>
            <div className={classes['total-amount']}>
                Total Amount: {totalAmount}
            </div>
            <div >
                <button className={classes.actnBtn}>Cancel</button>
                <button className={classes.actnBtn}>Order</button>
            </div>
    </div>
  )
}

export default Cart;