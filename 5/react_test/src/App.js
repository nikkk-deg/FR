import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function App() {
  const [text, setText] = useState("");
  return (
    <Box component="form" sx={{border: '1px dashed grey', backgroundColor: "grey", fontSize: "1px", width: "200px"}}>
        <TextField
          required
          label="Required"
          defaultValue="Введите текст"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type='submit' onClick={()=>alert(text)}>Отправить</Button>
    </Box>
  );
}
