import { Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllDone }) => {
  if (tasks.length > 0) {
    return (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Show" : "Hide"} done tasks
        </Button>

        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={markAllDone}
        >
          Mark all done
        </Button>
      </>
    );
  }
};

export default Buttons;
