import { useState, useRef } from "react";
import { StyledForm, Button, Input } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="What is there to do?"
        ref={inputRef}
        onChange={(event) => {
          setNewTaskContent(event.target.value);
        }}
      />
      <Button onClick={inputFocus}>Add task</Button>
    </StyledForm>
  );
};

export default Form;
