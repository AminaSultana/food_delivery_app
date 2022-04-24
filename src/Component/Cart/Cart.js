import React, { useState, useContext } from "react";

import Image from "./cart.jpg";
import classes from "./cart.module.css";
import CartShow from './CartShow'
import CartContext from "../../store/cart-context";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  let quantity = 0;
  cartContext.listOfItems.forEach((item)=>{
    quantity += item.quantity;
  })

  const cartOpenHandler = () => {
    console.log("cart button");
    setOpenCart(true);
  };

  const cartCloseHandler=()=>{
    setOpenCart(false);
  }

  return (
    <React.Fragment>
      <button className={`${classes.button}`} onClick={cartOpenHandler}>
        <span>
          <img src={Image} alt="cart" width="50" />
        </span>
        <span className={`${classes.span}`}>Your Cart</span>
        <span className={`${classes.cart_value}`}>{quantity}</span>
      </button>
      {openCart && <CartShow onClose={cartCloseHandler}/>}

    </React.Fragment>
  );
};

export default Cart;
