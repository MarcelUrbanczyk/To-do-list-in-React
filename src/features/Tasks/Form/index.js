import { useState, useRef } from "react";
import { StyledForm, Button, Input } from "./styled";
import { addTask } from "../tasksSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "")
      dispatch(
        addTask({
          content: newTaskContent.trim(),
          done: false,
          id: nanoid(),
        })
      );
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
