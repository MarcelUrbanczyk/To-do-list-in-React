import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "zjeść sniadanie", done: true },
  { id: 2, content: "zrobić zadanie domowe", done: true },
];

let hideDoneTasks = false;

function App() {
  return (
    <main>
      <Header />
      <Section 
      title="Add new Task" 
      body={<Form />} 
      />

      <Section
        title="Task list"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
      
    </main>
  );
}

export default App;
