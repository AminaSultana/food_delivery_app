import classes from './Form.module.css'

const Form = () => {
  const submitHandler = () => {
    console.log("Added");
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label className={`${classes.label}`}>Amount</label>
        <input type="number" className={`${classes.input}`}></input>
      </div>
      <button type="submit" className={`${classes.button}`}>+Add</button>
    </form>
  );
};

export default Form;
