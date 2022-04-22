import React from "react";
import ModalCart from "../Modal/ModalCart";
import classes from "./CartShow.module.css";

export default function Modal() {
  
  return (
    <ModalCart className={`${classes.modal_main}`}>
      
        <h3>Sushi</h3>
        <div className={`${classes.amount}`}>
          <span>Total Amount</span>
          <span>35</span>
        </div>
        <div className={`${classes.button}`}>
          <button className={`${classes.button1}`}>Close</button>
          <button className={`${classes.button2}`}>Order</button>
        </div>
      
    </ModalCart>
  );
}
