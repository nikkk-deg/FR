import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilterProvider } from "./components/filter/context.tsx";
import { FilmInfoProvider } from "./components/film-page/context.tsx";
import App from "./App.tsx";
import FilmPage from "./pages/film.tsx";
import { FilmFavProvider } from "./components/favorites/context.tsx";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/film/:id",
        element: <FilmPage />,
      },
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FilterProvider>
    <FilmInfoProvider>
      <FilmFavProvider>
        <RouterProvider router={router} />
      </FilmFavProvider>
    </FilmInfoProvider>
  </FilterProvider>
);
