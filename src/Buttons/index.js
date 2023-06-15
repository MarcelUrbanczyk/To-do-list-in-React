import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
  if (tasks.length > 0) {
    return (
      <>
        <button className="buttons__button">
          {hideDoneTasks ? "Show" : "Hide"} done tasks
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
