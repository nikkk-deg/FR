import { BrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/homepage";
import FilmPage from './pages/film';


function App() {
  return (
    <>
  <HomePage></HomePage>
  <Outlet />
</>
  )
}

export default App
