import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    color: white;
    background-color: hsl(180, 100%, 25%);
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: hsl(180, 100%, 30%);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }

`;

const StyledForm = styled.form`
    padding: 10px;
    margin: 10px 0 0 0;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;


    @media(max-width: 767px) {
     grid-template-columns: 1fr;
    }
    
`;


const Form = (props) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm  onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                placeholder="Wpisz zadanie"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>

    );
};

export default Form;