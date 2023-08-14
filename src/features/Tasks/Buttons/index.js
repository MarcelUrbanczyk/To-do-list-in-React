import { useDispatch, useSelector } from "react-redux";
import { Button } from "./styled";
import {
  toggleHideDone,
  markAllDone,
  selectTasks,
  selectHideDone,
  selectAnyUndone,
} from "../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isAnyUndone = useSelector(selectAnyUndone);
  const { tasks } = useSelector(selectTasks);

  const dispatch = useDispatch();

  if (tasks.length > 0) {
    return (
      <>
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

export default Buttons;
