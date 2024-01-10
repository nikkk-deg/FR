import { Outlet } from "react-router-dom";
import { Films } from "../components/film-cards/films-list";
import { FilterProvider } from "../components/filters-sidebar/filter-context";
import { FilterSidebar } from "../components/filters-sidebar/sidebar";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <FilterProvider>
      <Header></Header>
      <FilterSidebar></FilterSidebar>
      <Films></Films>
      <div id="detail">
        <Outlet />
      </div>
    </FilterProvider>
  );
}
