import { List, Task, DeleteButton, MarkDoneButton, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Task key={task.id} hidden={task.done && hideDone}>
        <MarkDoneButton
          onClick={() => {
            toggleTaskDone(task.id);
          }}
        >
          {task.done ? "✔" : ""}
        </MarkDoneButton>
        <Content $isDone={task.done}>{task.content}</Content>
        <DeleteButton onClick={() => removeTask(task.id)}>🗑</DeleteButton>
      </Task>
    ))}
  </List>
);

export default Tasks;
