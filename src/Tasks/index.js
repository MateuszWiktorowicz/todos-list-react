
import { List, Item, Content, RemoveButton,ToggleButton } from "./styled";

const Tasks = ({ hideDone, toggleTasksDone, removeTask, tasks }) => (
    <List>
        {tasks.map(task => (
            <Item

                key={task.id}
                hidden={task.done && hideDone}
            >
                <ToggleButton
                    done={task.done}
                    onClick={() => toggleTasksDone(task.id)}
                >
                    ✔
                </ToggleButton>
                <Content
                    done={task.done}
                > {task.content}</Content>
                <RemoveButton
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </RemoveButton>
            </Item >
        ))}
    </List >

);
export default Tasks;