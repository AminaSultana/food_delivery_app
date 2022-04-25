import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addItemToCartHandler = (item) => {
    setTotalCost(cartContext.totalAmount + item.quantity * item.price);
    const itemIdx = items.findIndex((i) => {
      return i.id === item.id;
    });
    const existingItem = items[itemIdx];
    let updatedItem;
    let updatedItems;
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity,
      };
      updatedItems = [...items];
      updatedItems[itemIdx] = updatedItem;
      setItems(updatedItems);
      return;
    }
    setItems([...items, item]);
  };

  const removeItemHandler = (id) => {
    const itemIdx = items.findIndex(item=>{
      return (item.id===id)
    })
    let existingItem = items[itemIdx];
    let updatedItems;
    const newAmount = cartContext.totalAmount - existingItem.price
    setTotalCost(newAmount);
    if(existingItem.quantity>1){
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1
      }
      updatedItems = [...items]
      updatedItems[itemIdx] = updatedItem
      setItems(updatedItems)
      return;
    }
    else{
      updatedItems = items.filter((item)=>{return item.id !== id})
      setItems(updatedItems)
    }
  };

  const cartContext = {
    listOfItems: items,
    totalAmount: totalCost,
    cartValue: 0,
    addItems: addItemToCartHandler,
    removeItems: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
