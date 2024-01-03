import { useFilter } from "./Context";
import { Genres } from "./Genres";
import { Select } from "../Select";
import FilterReset from "./FilterReset";

export default function Filters() {
  const filters = useFilter();

  return (
    <div id="filters">
      <FilterReset />

      <Select
        name={"year_filter"}
        title={"Выбор года релиза"}
        isYearFilter={true}
        value={filters.year}
      />

      <Select
        name={"option_filter"}
        title={"Сортировать по:"}
        isYearFilter={false}
        value={filters.sortOption}
      />

      <Genres key={Math.random()} />
    </div>
  );
}
