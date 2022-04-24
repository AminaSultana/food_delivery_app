import React from "react";

import RestaurantSummary from "./RestaurantSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <RestaurantSummary />
      <AvailableMeals/>
    </React.Fragment>
  );
};

export default Meals;
