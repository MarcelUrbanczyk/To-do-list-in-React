import { List, Task, DeleteButton, MarkDoneButton } from "./styled";
import { StyledLink } from "./styled";
import {
  selectHideDone,
  markDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";

const TasksList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
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
          <StyledLink
            isdone={task.done ? "true" : "false"}
            to={`/tasks/${task.id}`}
          >
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
