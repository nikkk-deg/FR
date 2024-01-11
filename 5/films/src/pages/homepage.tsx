import { Outlet, Route } from "react-router-dom";
import { Films } from "../components/film-cards/films-list";
import { FilterProvider } from "../components/filters-sidebar/filter-context";
import { FilterSidebar } from "../components/filters-sidebar/sidebar";
import { Header } from "../components/header";
import FilmPage from "./film";

export default function HomePage() {
  return (
    <>
      <Header film=""></Header>
      <FilterSidebar></FilterSidebar>
      <Films></Films>
    </>
  );
}
