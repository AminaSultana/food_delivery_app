import React from "react";

import Header from "./Layout/Header";
import Meals from './Meals/Meals';

const Main = () => {
  return (
    <React.Fragment>
        <Header />
        <Meals/>
    </React.Fragment>
  );
};

export default Main;
