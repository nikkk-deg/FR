import { Box } from "@mui/material";
import { useEffect } from "react";
import { useFilter, useFilterDispatch } from "../filter/context";
import { getInfo } from "../getInfo";
import FilmCard from "./card";
import { CLASS_FILM_LIST, CLASS_NETWORK_ERROR, ERROR_MESSAGE } from "./consts";
import { CHANGE_FILM_LIST } from "../filter/consts";
import { FilmInfo } from "../film-page/consts";

export function Films() {
  const filter = useFilter();
  const dispatch = useFilterDispatch();

  useEffect(() => {
    getInfo(filter.sortOption, filter.page)
      .then((item) => {
        dispatch({
          type: CHANGE_FILM_LIST,
          films: item.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: CHANGE_FILM_LIST,
          films: undefined,
        });
        console.warn(error);
      });
  }, [filter.page, filter.sortOption]);

  if (filter.films !== undefined) {
    return (
      <Box className={CLASS_FILM_LIST}>
        {filter.films.map((item: FilmInfo) => {
          return (
            <FilmCard
              key={item.id}
              film={item.title}
              img={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              id={item.id}
            ></FilmCard>
          );
        })}
      </Box>
    );
  }
  return <Box className={CLASS_NETWORK_ERROR}>{ERROR_MESSAGE}</Box>;
}
