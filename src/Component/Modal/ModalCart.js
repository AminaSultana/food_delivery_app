import React from "react";

import ReactDOM from "react-dom";
import classes from './ModalCart.module.css'

const Backdrop = ()=>{
  return <div className={classes.backdrop}/>
}
const Modal = (props)=>{
    return (
      <div className={classes.modal}>

        <div className={`${classes.content}`}>
            {props.children}
        </div>
      </ div>
    )
}

export default function ModalCart(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop/>, document.getElementById("modal"))}
        {ReactDOM.createPortal(<Modal>{props.children}</Modal>, document.getElementById("modal"))}      
    </React.Fragment>
  );
}
