import { BrowserRouter, Outlet, useNavigate } from "react-router-dom";
import HomePage from "./pages/home-page";
import FilmPage from "./pages/film";
import { FilterProvider } from "./components/filter/context";

function App() {
  return (
    <>
      <HomePage></HomePage>
      <Outlet />
    </>
  );
}

export default App;
