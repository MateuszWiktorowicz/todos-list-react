import {useState} from "react";
import "./style.css";


const Form = (props) => {

const [newTaskContent, setNewTaskContent] = useState("");
const onFormSubmit = (event) => {
    event.preventDefault();
    props.addNewTask(newTaskContent.trim());
    setNewTaskContent("");
};

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
            value= {newTaskContent}
            placeholder="Wpisz zadanie"
            onChange = {(event) => setNewTaskContent(event.target.value)} 
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>

    );
};

export default Form;