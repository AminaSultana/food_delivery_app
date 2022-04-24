import React, { useContext } from "react";

import classes from "./Mealitem.module.css";
import Form from "./Form";

const Mealitems = (props) => {
  
    return (
      <li className={`${classes.li}`}>
        <div className={`${classes.div}`}>
          <div>
            <h2 className={`${classes.name}`}>{props.name}</h2>
            <h3 className={`${classes.description}`}>{props.description}</h3>
            <h3 className={`${classes.price}`}>{`$ ${props.price}`}</h3>
          </div>
          <div>
            <Form id={props.id} item={props}/>
          </div>
        </div>
      </li>
    );
};

export default Mealitems;
