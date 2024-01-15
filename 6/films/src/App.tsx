import { Outlet } from "react-router-dom";
import HomePage from "./pages";

function App() {
  return (
    <>
      <HomePage></HomePage>
      <Outlet />
    </>
  );
}

export default App;
