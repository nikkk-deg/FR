import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilterProvider } from "./components/filter/context.tsx";
import { FilmInfoProvider } from "./components/film-page/context.tsx";
import App from "./App.tsx";
import FilmPage from "./pages/film.tsx";
import { FilmFavProvider } from "./components/favorites/context.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/index.ts";


const store = setupStore();


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
<Provider store = {store}>
  <RouterProvider router={router} />
</Provider>
   

);
