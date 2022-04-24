import React from "react";

import classes from "./cartitem.module.css";

const Cartitem = (props) => {
  return (
    <li className={classes.li}>
      <div>
        <span>{props.name}</span>
        <span
          className={classes.quantity}
        >{` Quantity: ${props.quantity}`}</span>
      </div>
      <span>{`$${(props.price * props.quantity).toFixed(2)}`}</span>
    </li>
  );
};

export default Cartitem;
