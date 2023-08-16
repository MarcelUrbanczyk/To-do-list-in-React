import Form from "./Form";
import Header from "../../common/Header";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Buttons from "./Buttons";
import Search from "./Search";

function Tasks() {
  return (
    <main>
      <Header />
      <Section title="Add new Task" body={<Form />} />

      <Section title="Search" body={<Search />}></Section>

      <Section
        title="Task list"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </main>
  );
}

export default Tasks;
