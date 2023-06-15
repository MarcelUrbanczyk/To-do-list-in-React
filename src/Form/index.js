import "./style.css";

const Form = () => (
  <form className="form">
    <input className="form__input" placeholder="What is there to do?" />
    <button type="button" className="form__button">
      Add task
    </button>
  </form>
);

export default Form;
