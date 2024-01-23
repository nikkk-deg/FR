import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { FilterReset } from "./reset-button";
import { Pages } from "./pagination";
import OptionSort from "./options";
import RangeSlider from "./slider";
import GenresFilter from "./genres";
import { CLASS_FILM_TXT, CLASS_FILTER_SIDEBAR, SIDEBAR_TITLE } from "./consts";
import { useFilter } from "./context";
import Search from "./search";
import Title from "./title";

export function FilterSidebar() {
  const isValidToken = useFilter();
  if (isValidToken.films !== undefined) {
    return (
      <Paper className={CLASS_FILTER_SIDEBAR}>
        <Title></Title>
        <Search></Search>
        <FilterReset></FilterReset>
        <OptionSort></OptionSort>
        <RangeSlider></RangeSlider>
        <GenresFilter></GenresFilter>
        <Pages></Pages>
      </Paper>
    );
  }
}
