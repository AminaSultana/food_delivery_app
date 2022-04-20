import React, { useState } from "react";
import Image from "./cart.jpg";
import classes from "./cart.module.css";

const Cart = () => {
  const [cartValue, setCartValue] = useState(0);
  const buttonClickHandler = () => {
    console.log("cart button");
  };
  return (
    <React.Fragment>
      <button className={`${classes.button}`} onClick={buttonClickHandler}>
        <span>
          <img src={Image} alt="cart" width="50" />
        </span>
        <span className={`${classes.span}`}>
          Your Cart
        </span>
        <span className={`${classes.span}`}>
          {cartValue}
        </span>
      </button>
    </React.Fragment>
  );
};

export default Cart;
