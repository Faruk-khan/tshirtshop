import React from 'react'
import classes from './ItemComponent.module.css'

const ItemComponent = (props) => {
        
    const addHandler =()=>{

    }

  return (
    <div className={classes.container}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>Price: {props.price}</p>
        <p className={classes.sizes}>
            Sizes:
            <button>{props.quantityS}</button>
            <button>{props.quantityM}</button>
            <button>{props.quantityL}</button>
        </p>
        <button className={classes.addbtn} onClick={addHandler}>Add Product</button>
    </div>
  )
}

export default ItemComponent