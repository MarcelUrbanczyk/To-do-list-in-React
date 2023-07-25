import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__task ${
          task.done && hideDone === true ? "tasks__task--hide" : ""
        }`}
      >
        <button
          onClick={() => {
            toggleTaskDone(task.id);
          }}
          className="tasks__task--markDoneButton"
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "tasks__task--lineTrough" : ""}`}>
          {task.content}
        </span>
        <button
          className="tasks__task--removeButton"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
