import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FilmPage from "./pages/film.tsx";
import { FilterProvider } from "./components/filter/context.tsx";

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
    <RouterProvider router={router} />
  </FilterProvider>
);
