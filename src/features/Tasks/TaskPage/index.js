import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Strong } from "./styled";

function Tasks() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <main>
      <Header title="Task" />

      <Section
        title={task ? task.content : "Sorry, task not found"}
        body={task ? <Strong>Done: {task.done ? "Yes" : "No"}</Strong> : ""}
      />
    </main>
  );
}

export default Tasks;
