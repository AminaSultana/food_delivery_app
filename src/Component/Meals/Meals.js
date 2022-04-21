import React from "react";

import RestaurantSummary from "./RestaurantSummary";
import Mealitems from "./Mealitems";

const Meals = () => {
  return (
    <React.Fragment>
      <RestaurantSummary />
      <Mealitems />
    </React.Fragment>
  );
};

export default Meals;
