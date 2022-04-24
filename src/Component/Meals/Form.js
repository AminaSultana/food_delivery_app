import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Form.module.css";
import Input from "./Input";

const Form = (props) => {
  const addItemCtx = useContext(CartContext);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const quantity = document.getElementById('amount_'+props.id).value
    addItemCtx.addItems({...props.item, quantity: Number(quantity)});
  };

  return (
    
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 0,
        }}
      />
      <button onClick={buttonClickHandler}>+Add</button>
    </form>
  );
};

export default Form;
