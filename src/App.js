import { useTasks } from "./useTasks";
import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    tasks,
    setTasks,
    addNewTask,
    toggleTaskDone,
    markAllDone,
    removeTask,
  } = useTasks();

  return (
    <main>
      <Header />
      <Section title="Add new Task" body={<Form addNewTask={addNewTask} />} />

      <Section
        title="Task list"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllDone={markAllDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
            setTasks={setTasks}
          />
        }
      />
    </main>
  );
}

export default App;
