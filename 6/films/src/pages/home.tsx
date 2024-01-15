import { Outlet, Route } from "react-router-dom";
import { Films } from "../components/home-page-content/cards-list";
import { FilterProvider } from "../components/filter/context";
import { FilterSidebar } from "../components/filter/sidebar";
import { Header } from "../components/header/header";
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
