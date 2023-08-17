import Form from "./Form";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Buttons from "./Buttons";
import Search from "./Search";
import TasksList from "../TasksListPage/TaskList";

function Tasks() {
  return (
    <main>
      <Header title="Task List" />
      <Section title="Add new Task" body={<Form />} />

      <Section title="Search" body={<Search />}></Section>

      <Section
        title="Task list"
        extraHeaderContent={<Buttons />}
        body={<TasksList />}
      />
    </main>
  );
}

export default Tasks;
