import Form from "./Form";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { TaskListButtons, ExampleTasksButton } from "./Buttons";
import Search from "./Search";
import TasksList from "../TasksListPage/TaskList";

function TasksListPage() {
  return (
    <main>
      <Header title="Task List" />
      <Section
        title="Add new Task"
        extraHeaderContent={<ExampleTasksButton />}
        body={<Form />}
      />

      <Section title="Search" body={<Search />}></Section>

      <Section
        title="Task list"
        extraHeaderContent={<TaskListButtons />}
        body={<TasksList />}
      />
    </main>
  );
}

export default TasksListPage;
