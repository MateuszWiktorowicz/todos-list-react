import {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "zjeść obiad", done: true },
  { id: 2, content: "przejść na React", done: true },
];



function App() {
const [hideDone, setHideDone] = useState(false);

const toggleHideDone = () => {
  setHideDone(hideDone => !hideDone)
};

  return (
    <main className="container">
      <h1>Lista zadań</h1>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" 
      body={<Buttons 
      tasks={tasks} 
      hideDone={hideDone} 
      toggleHideDone={toggleHideDone} />} 
      />

      <Tasks tasks={tasks} hideDone={hideDone} />


    </main>

  );
}

export default App;
