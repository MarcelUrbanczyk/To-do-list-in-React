export const saveAtLocalStorage = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("tasks")) || [];
