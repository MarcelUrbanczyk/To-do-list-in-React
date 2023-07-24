import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => {
  if (tasks.length > 0) {
    return (
      <>
        <button onClick={toggleHideDone} className="buttons__button">
          {hideDone ? "Show" : "Hide"} done tasks
        </button>

        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Mark all done
        </button>
      </>
    );
  }
};

export default Buttons;
