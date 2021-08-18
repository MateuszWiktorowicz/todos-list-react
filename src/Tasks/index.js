import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li className={`list__item ${task.done && props.hideDone ? "list__item--hidden" : ""}`}>
                   <button className={`${task.done ? " list__button--done" : " list__button--undone"}`}>✔
    </button>
   <span className={`${task.done ? "doneTask" : ""}`}> {task.content}</span>
    <button className="list__button--remove">🗑</button>
            </li >
        ))}
    </ul >

);
export default Tasks;