import { List, Task, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Task key={task.id} hidden={task.done && hideDone}>
        <Button
          markDone
          onClick={() => {
            toggleTaskDone(task.id);
          }}
        >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button remove onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Task>
    ))}
  </List>
);

export default Tasks;
