
import { Div, Button } from "./styled";

const Buttons = ({toggleHideDone, setAllDone, tasks, hideDone }) => {
    if (tasks.length === 0) {


        return null
    }

    return (
        <Div>
            <Button onClick={toggleHideDone} >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
               
                disabled ={tasks.every(({ done }) => done)}
                onClick={() => setAllDone()}
                
            >
                Ukończ wszystkie
            </Button>
        </Div>
    )
};

export default Buttons;