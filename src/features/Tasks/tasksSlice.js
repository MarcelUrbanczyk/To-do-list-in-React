import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    state: "idle",
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
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.state = "success";
      state.tasks = tasks;
    },
    fetchExampleTasksLoading: (state) => {
      state.state = "loading";
    },
    fetchExampleTasksError: (state) => {
      state.state = "error";
    },
    fetchExampleTasks: () => {},

    deleteAll: ({ tasks }) => {
      tasks.splice(0, tasks.length);
    },
  },
});

export const selectTasks = (state) => state.tasks;

export const selectHideDone = (state) => selectTasks(state).hideDone;
export const selectAnyUndone = (state) =>
  selectTasks(state).tasks.every(({ done }) => done);
export const selectTasksState = (state) => selectTasks(state).state;
export const selectTasksByQuery = (state, query) => {
  if (!query || query.trim() === "") {
    return state.tasks.tasks;
  }

  return selectTasks(state).tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export const getTaskById = (state, id) =>
  selectTasks(state).tasks.find((task) => task.id === id);

export const {
  addTask,
  toggleHideDone,
  markAllDone,
  markDone,
  removeTask,
  fetchExampleTasksLoading,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
  fetchExampleTasks,
  setTasks,
  deleteAll,
} = tasksSlice.actions;

export default tasksSlice.reducer;
