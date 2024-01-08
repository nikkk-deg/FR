import { Box } from "@mui/material";
import GenresFilter from "./genres-filter/genres-filter";
import OptionSort from "./option-sort";
import RangeSlider from "./year-slider";
import Paper from "@mui/material/Paper";
import { FilterReset } from "./reset-button";

export function FilterSidebar() {
  return (
    <Paper className="filter-sidebar">
      <Box className="film-txt" component={"p"}>
        Фильтры
      </Box>
      <FilterReset></FilterReset>
      <OptionSort></OptionSort>
      <RangeSlider></RangeSlider>
      <GenresFilter></GenresFilter>
    </Paper>
  );
}
