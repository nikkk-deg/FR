import FilmCard from "./components/film-card";
import { FilterProvider } from "./components/filters-sidebar/filter-context";
import GenresFilter from "./components/filters-sidebar/genres-filter/genres-filter";
import OptionSort from "./components/filters-sidebar/option-sort";
import { FilterSidebar } from "./components/filters-sidebar/sidebar";
import RangeSlider from "./components/filters-sidebar/year-slider";
import { Films } from "./components/fims-list";
import { Header } from "./components/header";

FilterProvider;

function App() {
  return (
    <FilterProvider>
      <Header></Header>
      <FilterSidebar></FilterSidebar>
      <Films></Films>
    </FilterProvider>
  );
}

export default App;
// reducer со всеми своими функциями не работает
