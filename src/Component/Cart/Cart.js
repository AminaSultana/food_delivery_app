import React, { useState } from "react";

import Image from "./cart.jpg";
import classes from "./cart.module.css";
import CartShow from './CartShow'

const Cart = () => {
  const [cartValue, setCartValue] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const buttonClickHandler = () => {
    console.log("cart button");
    setOpenCart(true);
  };
  return (
    <React.Fragment>
      <button className={`${classes.button}`} onClick={buttonClickHandler}>
        <span>
          <img src={Image} alt="cart" width="50" />
        </span>
        <span className={`${classes.span}`}>Your Cart</span>
        <span className={`${classes.cart_value}`}>{cartValue}</span>
      </button>
      {openCart && <CartShow/>}
    </React.Fragment>
  );
};

export default Cart;
