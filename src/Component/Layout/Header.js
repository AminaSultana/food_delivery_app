import React from "react";
import styled from "./Header.module.css";
import image from "./foodimage.jpg";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <React.Fragment>
      <header className={`${styled.header}`}>
        <h1> Meals</h1>
        <Cart/>
      </header>
      <div>
        <img className={`${styled.image}`} src={image} alt="Delicious food!!"/>
      </div>
    </React.Fragment>
  );
};
export default Header;
