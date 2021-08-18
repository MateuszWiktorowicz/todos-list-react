import {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";





function App() {
const [hideDone, setHideDone] = useState(false);
const [tasks, setTasks] = useState([
  { id: 1, content: "zjeść obiad", done: true },
  { id: 2, content: "przejść na React", done: false },

])

const toggleHideDone = () => {
  setHideDone(hideDone => !hideDone)
};

const removeTask = (id) => {
  setTasks(tasks => tasks.filter(task => task.id !== id))
};

const toggleTasksDone = (id) => {
  setTasks(tasks => tasks.map(task => {
    if (task.id === id) {
      return {...task, done: !task.done};
    }
      return task;

    
  }) )
};
  return (
    <main className="container">
      <h1>Lista zadań</h1>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" 
      body={<Buttons 
      tasks={tasks} 
      hideDone={hideDone} 
      toggleHideDone={toggleHideDone} 
      
      />
    } 
      />

      <Tasks 
      tasks={tasks} 
      hideDone={hideDone} 
      removeTask={removeTask} 
      toggleTasksDone={toggleTasksDone}
      />


    </main>

  );
}

export default App;
