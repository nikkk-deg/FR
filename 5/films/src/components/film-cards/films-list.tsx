import { Box } from "@mui/material";
import FilmCard from "./film-card";

import {
  useFilter,
  useFilterDispatch,
} from "../filters-sidebar/filter-context";
import { popularFilms, topRatedFilms } from "../filters-sidebar/get-films";
import { filterOptions } from "../../consts";
import { useEffect } from "react";

export function Films() {
  const filter = useFilter();
  const dispatch = useFilterDispatch();

  const getFilms = () => {
    if (filter.sortOption === filterOptions[0].key) {
      popularFilms(filter.page).then((item) => {
        dispatch({
          type: "change_film_list",
          films: item,
        });
      });
    } else if (filter.sortOption === filterOptions[1].key) {
      topRatedFilms(filter.page).then((item) => {
        dispatch({
          type: "change_film_list",
          films: item,
        });
      });
    } else if (filter.sortOption === filterOptions[2].key) {
      topRatedFilms(filter.page).then((item) => {
        dispatch({
          type: "change_film_list",
          films: item,
        });
      });
    }
  };

  useEffect(() => {
    getFilms();
  }, [filter.page, filter.sortOption]);

  if (filter.films.length !== 0) {
    return (
      <Box className="films-list">
        {filter.films.map((item: any) => {
          // {
          //   console.log(item);
          // }
          return (
            <FilmCard
              key={Math.random()}
              film={item.title}
              img={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            ></FilmCard>
          );
        })}
      </Box>
    );
  }
}
// backdrop_path
