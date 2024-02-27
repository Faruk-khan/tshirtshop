import React,{createContext, useState} from "react";

const ItemContext = createContext()

const CartProvider = (props) =>{
    const[items, setItems] = useState([]);

    const addItem = (item) =>{
        setItems([...items, item]);
    }

    return(
        <ItemContext.Provider>
            {props.children}
        </ItemContext.Provider>
    )
}
export default CartProvider;