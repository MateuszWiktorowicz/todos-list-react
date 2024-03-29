import {useEffect, useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";






function App() {
const [hideDone, setHideDone] = useState(false);
const tasksFromLocaleStorage = localStorage.getItem("tasks");
const [tasks, setTasks] = useState(
  tasksFromLocaleStorage
  ? JSON.parse(tasksFromLocaleStorage)
  : []
)

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);



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

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
       done: true,
      })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks =>
      [...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id +1,
      },
      ]
      )
  };

  return (
    <main className="container">
      <h1>Lista zadań</h1>
      <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
      <Section title="Lista zadań" 
      body={<Buttons 
      tasks={tasks} 
      hideDone={hideDone} 
      toggleHideDone={toggleHideDone} 
      setAllDone={setAllDone}
      
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
