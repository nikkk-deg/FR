import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilterProvider } from "./components/filter/context.tsx";
import App from "./App.tsx";
import FilmPage from "./pages/film.tsx";


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
