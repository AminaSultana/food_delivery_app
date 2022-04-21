import classes from "./Mealitem.module.css";
import Form from "./Form";
const Mealitems = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  const meals = DUMMY_MEALS.map((item) => {
    return (
      <li className={`${classes.li}`}>
        <div className={`${classes.div}`}>
          <div>
            <h2 className={`${classes.name}`}>{item.name}</h2>
            <h3 className={`${classes.description}`}>{item.description}</h3>
            <h3 className={`${classes.price}`}>{`$ ${item.price}`}</h3>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </li>
    );
  });
  return <ul className={`${classes.meal_items}`}>{meals}</ul>;
};

export default Mealitems;
