import { BrowserRouter, Outlet, useNavigate } from "react-router-dom";
import HomePage from "./pages/homepage";
import FilmPage from "./pages/film";
import { FilterProvider } from "./components/filters-sidebar/filter-context";

function App() {
  return (
    <>
      <HomePage></HomePage>
      <Outlet />
    </>
  );
}

export default App;
