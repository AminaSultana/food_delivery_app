import React from "react";

import classes from "./cartitem.module.css";

const Cartitem = (props) => {  

  return (
    <li className={classes.li}>
      <div className={classes.main}>
        <span>
          <div className={classes.name}>{props.name}</div>
          <div >
            <span className={classes.price}>{`$${props.price}`}</span>
            {`x${props.quantity}`}
          </div>
        </span>
        <span >
          <button className={classes.remove} onClick={props.onRemove}>-</button>
          <button className={classes.add}>+</button>
        </span>
      </div>
    </li>
  );
};

export default Cartitem;
