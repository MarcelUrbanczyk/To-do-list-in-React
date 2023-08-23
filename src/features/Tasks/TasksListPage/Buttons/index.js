import { useDispatch, useSelector } from "react-redux";
import { Button, ErrorButton, Wrapper } from "./styled";
import {
  toggleHideDone,
  markAllDone,
  selectTasks,
  selectTasksState,
  selectHideDone,
  selectAnyUndone,
  fetchExampleTasks,
  deleteAll,
} from "../../tasksSlice";

export const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector(selectTasksState);
  if (tasksState === "error")
    return (
      <ErrorButton
        onClick={() => {
          dispatch(fetchExampleTasks());
        }}
      >
        Error, try again later
      </ErrorButton>
    );

  return (
    <Button
      disabled={tasksState === "loading"}
      $failure={tasksState === "error"}
      onClick={() => {
        dispatch(fetchExampleTasks());
      }}
    >
      {tasksState === "idle" || tasksState === "success"
        ? "Download example tasks"
        : "Loading..."}
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
      <>
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
      </>
    );
  }
};
