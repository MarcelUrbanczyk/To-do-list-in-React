import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";


const tasks = [
  { id: 1, content: "zjeść sniadanie", done: true },
  { id: 2, content: "zrobić zadanie domowe", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () =>{
    setHideDone(hideDone => !hideDone)
  }
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
          <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />
        }
        body={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
      />
      
    </main>
  );
}

export default App;
