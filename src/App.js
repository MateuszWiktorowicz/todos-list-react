import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "zjeść obiad", done: true },
  { id: 2, content: "przejść na React", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <h1>Lista zadań</h1>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" body={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />

      <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />


    </main>

  );
}

export default App;
