import { useDispatch, useSelector } from "react-redux";
import { Button, Wrapper } from "./styled";
import {
  toggleHideDone,
  markAllDone,
  selectTasks,
  selectHideDone,
  selectAnyUndone,
  fetchExampleTasks,
  deleteAll,
} from "../../tasksSlice";

export const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(fetchExampleTasks());
      }}
    >
      Download example tasks{" "}
    </Button>
  );
};

export const TaskListButtons = () => {
  const hideDone = useSelector(selectHideDone);
  const isAnyUndone = useSelector(selectAnyUndone);
  const { tasks } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length > 0) {
    return (
      <Wrapper>
        <Button
          onClick={() => {
            dispatch(deleteAll());
          }}
        >
          Delete All
        </Button>

        <Button
          onClick={() => {
            dispatch(toggleHideDone());
          }}
        >
          {hideDone ? "Show" : "Hide"} done tasks
        </Button>

        <Button
          disabled={isAnyUndone}
          onClick={() => {
            dispatch(markAllDone());
          }}
        >
          Mark all done
        </Button>
      </Wrapper>
    );
  }
};
