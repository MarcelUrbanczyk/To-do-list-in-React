import Form from "./Form";
import Header from "../../common/Header";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Buttons from "./Buttons";

function Tasks() {
  return (
    <main>
      <Header />
      <Section title="Add new Task" body={<Form />} />

      <Section
        title="Task list"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </main>
  );
}

export default Tasks;
