import React,{useState} from 'react'
import classes from './ItemComponent.module.css'
import { useProductContext } from '../stored/ProductContext';
const ItemComponent = () => {
    const {selectProduct, selectedProducts} = useProductContext();
    const [selectedShirts, setSelectedShirts] = useState([]);

    const shirts = [
        {
          id: 1,
          name: 'Adidas',
          description: 'New Adidas shirt',
          price: 20,
          quantityS: 3,
          quantityM: 5,
          quantityL: 7,
        },
        {
          id: 2,
          name: 'Nike',
          description: 'Nike latest jordan shirt',
          price: 25,
          quantityS: 2,
          quantityM: 4,
          quantityL: 6,
        },
      ];
      const addHandler =(shirt) =>{
        if (!selectedShirts.find((selectedShirt) => selectedShirt.id === shirt.id)){
        setSelectedShirts([...selectedShirts, shirt])
        selectProduct(shirt)
      }else{
        console.log('Product already selected')
      }
      }
      //console.log(selectedProducts)
  return (
    <div className={classes.main}>
        <h1>Shirts</h1>
        {
            shirts.map((shirt) =>(
                <div key={shirt.id} className={classes.item}>
                    <h2>{shirt.name}</h2>
                    <p>{shirt.description}</p>
                    <p>Price: {shirt.price}</p>
                    <p>Sizes :
                        <button className={classes.btn}>S({shirt.quantityS})</button>
                        <button className={classes.btn}>M({shirt.quantityM})</button>
                        <button className={classes.btn}>L({shirt.quantityL})</button>
                    </p>
                    <p></p>
                    <button onClick={() => addHandler(shirt)} className={classes.addBtn}>Add Product</button>
                </div>
                
            ))
        }

    </div>
  )
}

export default ItemComponent