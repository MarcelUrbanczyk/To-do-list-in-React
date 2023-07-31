import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };
  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        value={newTaskContent}
        className="form__input"
        placeholder="What is there to do?"
        onChange={(event) => {
          setNewTaskContent(event.target.value);
        }}
      />
      <button className="form__button">Add task</button>
    </form>
  );
};

export default Form;
