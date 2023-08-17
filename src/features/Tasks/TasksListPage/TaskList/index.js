import { List, Task, DeleteButton, MarkDoneButton, Content } from "./styled";
import { Link } from "react-router-dom";
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
          <Content $isDone={task.done}>
            <Link to={`/tasks/${task.id}`}>{task.content}</Link>
          </Content>
          <DeleteButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </DeleteButton>
        </Task>
      ))}
    </List>
  );
};

export default TasksList;
