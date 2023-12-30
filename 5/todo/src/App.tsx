import { Box } from '@mui/material';
import { Header } from "./Header";
import { TodoProvider } from './ContextTodo';
import NewTask from './NewTask';
import Tasks from './Tasks';






function App() {
  return (
    <Box sx={{width: "450px",
              height: "702px",
              padding: "32px"}}>
    <TodoProvider>
      <Header></Header>
      <NewTask></NewTask>
      <Tasks isPlan = {true}></Tasks>
      <Tasks isPlan = {false}></Tasks>
    </TodoProvider>
      
    
    </Box>
  );
}

export default App;
