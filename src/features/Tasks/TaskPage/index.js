import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

function Tasks() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <main>
      <Header title="Task" />

      <Section
        title={task.content}
        body={`Done: ${task.done ? "Yes" : "No"}`}
      />
    </main>
  );
}

export default Tasks;
