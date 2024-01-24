import { Outlet } from "react-router-dom";
import HomePage from "./pages";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector(state => state.token);
  console.log(token);
  return (
    <>
      <HomePage></HomePage>
      <Outlet />
    </>
  );
}

export default App;
