import { Box, Checkbox } from "@mui/material";
import { useToDo, useToDoDispatch, InitialTask } from "./ContextTodo";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import TextField from '@mui/material/TextField';

interface TasksProps{
    isPlan: boolean
}


export default function Tasks({isPlan}: TasksProps){



    const todo = useToDo();
    const dispatch = useToDoDispatch();

    const handleDeleteTask = (task: InitialTask) => {
        dispatch({
            type: 'delete',
            id: task.id, 
        })
    }

    const handleCheckTask = (task: InitialTask) => {
        dispatch({
            type: 'check',
            task: {
                ...task,
                done: !task.done,
            }
            
        })
    }

    

    

    interface TaskProps{
        checked: boolean;
        task: InitialTask
    }

    const Task = ({checked, task}: TaskProps) => {

        const [isEditing, setIsEditing] = useState(false);
        const [text, setText] = useState(task.text);

        const handleChangeTask = (task: InitialTask, e: any) => {

            dispatch({
                type: 'change',
                task: {
                    ...task,
                    text: text,
                }
            })
        }

        const taskStyle = {
            display: "inline-block", 
            marginLeft: '5px',
            cursor: 'pointer',
            fontSize: 'large',
        }

        return(isEditing ? (
            <Box>
                <Checkbox checked={checked} onClick={() => handleCheckTask(task)} size="small" sx={taskStyle}></Checkbox>
                <input value={text} onChange={(e:any) => setText(e.target.value)}></input>
                <DoneIcon onClick = {(e) => {handleChangeTask(task, e);setIsEditing(false)}} fontSize="small" sx={taskStyle}></DoneIcon>
            </Box>

        ) : (
            <Box>
                <Checkbox checked={checked} onClick={() => handleCheckTask(task)} size="small" sx={taskStyle}></Checkbox>
                <TextField multiline variant="standard" sx={taskStyle} value={task.text}></TextField>
                <ModeEditIcon onClick = {() =>  setIsEditing(true)} fontSize="small" sx={taskStyle}></ModeEditIcon>
                <DeleteIcon onClick = { () => handleDeleteTask(task)} fontSize="small" sx={taskStyle}></DeleteIcon>
            </Box>
        ))

        
    }


    if(isPlan && todo.filter((item:InitialTask) => item.done !== true).length > 0){
        return(<Box>
            <Box sx = {{textAlign: "center"}} component={'p'}>{ `ПЛАН(${todo.filter((item:InitialTask) => item.done !== true).length})`}</Box>
            {todo.filter((item:InitialTask) => item.done !== true).map((item: InitialTask) => {
                return(<Task task = {item} key = {item.id} checked = {item.done}></Task>);
            })}
        </Box>);
    }
    else if(!isPlan && todo.filter((item:InitialTask) => item.done !== false).length > 0){
        return(
        <Box>
            <Box sx = {{textAlign: "center"}} component={'p'}>{ `ГОТОВО(${todo.filter((item:InitialTask) => item.done !== false).length})`}</Box>
            {todo.filter((item:InitialTask) => item.done !== false).map((item: InitialTask) => {
                return(<Task task = {item} key = {item.id} checked = {item.done}></Task>);
            })}
        </Box>
        );
    }
    return(<></>);
}