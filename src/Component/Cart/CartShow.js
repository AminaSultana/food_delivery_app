import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import ModalCart from "../Modal/ModalCart";
import Cartitem from "./cartitem";
import classes from "./CartShow.module.css";

export default function CartShow(props) {
  const cartContext = useContext(CartContext);
  const items = cartContext.listOfItems.map((item)=>{
    return (
      <Cartitem 
      key={item.id}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      />
    )
  })

  return (
    <ModalCart className={`${classes.modal_main}`} onClose={props.onClose}>
      <ul>
        {items}
      </ul>
      <div className={`${classes.amount}`}>
        <span>Total Amount</span>
        <span>{cartContext.totalAmount}</span>
      </div>
      <div className={`${classes.button}`}>
        <button className={`${classes.button1}`} onClick={props.onClose}>
          Close
        </button>
        <button className={`${classes.button2}`}>Order</button>
      </div>
    </ModalCart>
  );
}
