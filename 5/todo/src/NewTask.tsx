import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useToDo, useToDoDispatch } from './ContextTodo';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';






export default function NewTask(){
    const [taskText, setTaskText] = useState('');

    const dispatch = useToDoDispatch();
    const tasks = useToDo();


    const handleAddTask = (e: any, taskName: string) => {
        e.preventDefault();
        console.log(tasks);
        dispatch({
            type: 'add',
            taskName: taskName,
            id: Math.floor(Math.random() *100),//потом поменять когда реализую удаление задач
        })
    }


    return(
        <Box onSubmit={(e)=>handleAddTask(e, taskText)} component={'form'} sx={{}}>
        <Box component={'p'} sx={{fontSize: '12px'}}>Имя новой задачи</Box>
        <TextField
            sx={{width: '426px'}}
            variant="standard"
            value={taskText}
            onChange={(e)=>setTaskText(e.target.value)}
        />
        <Button type='submit' sx={{
            position: 'absulute',
            left: '420px',
            top: '-30px',
            width: '14px',
            height: '14px',
        }}><AddIcon sx={{cursor: 'pointer'}}></AddIcon></Button>

        </Box>
    );
}