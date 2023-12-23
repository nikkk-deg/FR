import { Box } from '@mui/material';
import { Header } from "./Header";
import { TodoProvider } from './ContextTodo';
import NewTask from './NewTask';





function App() {
  return (
    <Box sx={{width: "450px",
              height: "702px",
              padding: "32px",
              border: '1px solid black'}}>
    <TodoProvider>
      <Header></Header>
      <NewTask></NewTask>
    </TodoProvider>
      
    </Box>
  );
}

export default App;
