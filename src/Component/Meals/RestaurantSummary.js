import React from "react";

import classes from './RestaurantSummary.module.css'

const RestaurantSummary = () => {
  return (
    <React.Fragment>
      <div className={`${classes.summary}`}>
        <h2 className={`${classes.heading}`}>Delicious Food, Delivered To You</h2>
        <h4>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and ofcourse by experienced chefs!
          </p>
        </h4>
      </div>
    </React.Fragment>
  );
};

export default RestaurantSummary;
