import { List, Task, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Task key={task.id} hidden={task.done && hideDone}>
        <Button
          onClick={() => {
            toggleTaskDone(task.id);
            markDone = { markDone };
          }}
        >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button
          className=" tasks__button--removeButton"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Task>
    ))}
  </List>
);

export default Tasks;
