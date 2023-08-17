import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },

  reducers: {
    addTask: ({ tasks }, { payload: newTask }) => {
      tasks.push(newTask);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    markAllDone: (state) => {
      state.tasks = state.tasks.map((task) => ({
        ...task,
        done: true,
      }));
    },
    markDone: ({ tasks }, { payload: id }) => {
      const index = tasks.findIndex((task) => task.id === id);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: id }) => {
      const index = tasks.findIndex((task) => task.id === id);
      tasks.splice(index, 1);
    },
  },
});

export const selectTasks = (state) => state.tasks;

export const selectHideDone = (state) => selectTasks(state).hideDone;
export const selectAnyUndone = (state) =>
  selectTasks(state).tasks.every(({ done }) => done);

export const getTaskById = (state, id) =>
  selectTasks(state).tasks.find((task) => task.id === id);

export const { addTask, toggleHideDone, markAllDone, markDone, removeTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
