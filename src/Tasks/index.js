import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        className={`tasks__task ${
          task.done && hideDone === true ? "tasks__task--hide" : ""
        }`}
      >
        <button className="tasks__task--markDoneButton">
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "tasks__task--lineTrough" : ""}`}>
          {task.content}
        </span>
        <button className="tasks__task--removeButton">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
