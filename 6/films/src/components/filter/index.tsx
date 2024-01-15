import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { FilterReset } from "./reset-button";
import { Pages } from './pagination';
import OptionSort from './options';
import RangeSlider from './slider';
import GenresFilter from "./genres";



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
      <Pages></Pages>
    </Paper>
  );
}
