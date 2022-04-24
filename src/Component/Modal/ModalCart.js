import React from "react";

import ReactDOM from "react-dom";
import classes from './ModalCart.module.css'

const Backdrop = (props)=>{
  return <div className={classes.backdrop}  onClick={props.onClose}/>
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
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById("modal"))}
      {ReactDOM.createPortal(<Modal>{props.children}</Modal>, document.getElementById("modal"))}      
    </React.Fragment>
  );
}
