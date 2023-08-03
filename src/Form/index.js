import { useState } from "react";
import { StyledForm, Button, Input } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="What is there to do?"
        onChange={(event) => {
          setNewTaskContent(event.target.value);
        }}
      />
      <Button>Add task</Button>
    </StyledForm>
  );
};

export default Form;
