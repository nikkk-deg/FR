import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { FilterReset } from "./reset-button";
import { Pages } from "./pagination";
import OptionSort from "./options";
import RangeSlider from "./slider";
import GenresFilter from "./genres";
import { CLASS_FILM_TXT, CLASS_FILTER_SIDEBAR, SIDEBAR_TITLE } from "./consts";
import Search from "./search";
import Title from "./title";
import { useAppSelector } from "../../store/hooks/redux";

export function FilterSidebar() {
  const isValidToken = useAppSelector(state => state.filterReducer.films);
  if (true) {
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
