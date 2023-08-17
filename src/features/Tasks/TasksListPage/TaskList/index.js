import { List, Task, DeleteButton, MarkDoneButton, Content } from "./styled";
import { StyledLink } from "./styled";
import {
  selectTasks,
  selectHideDone,
  markDone,
  removeTask,
} from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const TasksList = () => {
  const { tasks } = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Task key={task.id} hidden={task.done && hideDone}>
          <MarkDoneButton
            onClick={() => {
              dispatch(markDone(task.id));
            }}
          >
            {task.done ? "✔" : ""}
          </MarkDoneButton>
          <StyledLink isDone={task.done} to={`/tasks/${task.id}`}>
            {task.content}
          </StyledLink>
          <DeleteButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </DeleteButton>
        </Task>
      ))}
    </List>
  );
};

export default TasksList;
