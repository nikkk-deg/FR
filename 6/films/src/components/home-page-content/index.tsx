import { Box } from "@mui/material";
import FilmCard from "./card";

import { useFilter, useFilterDispatch } from "../filter/context";
import { filterOptions } from "../../consts";
import { useEffect } from "react";
import { getInfo } from "../getInfo";
import { POPULAR, TOP_RATED } from "../consts";


export function Films() {
  const filter = useFilter();
  const dispatch = useFilterDispatch();

  const getFilms = () => {
    if (filter.sortOption === filterOptions[0].key) {
      getInfo(POPULAR, filter.page).then((item) => {
        dispatch({
          type: "change_film_list",
          films: item,
        });
      });
    } else if (filter.sortOption === filterOptions[1].key) {
      getInfo(TOP_RATED, filter.page).then((item) => {
        dispatch({
          type: "change_film_list",
          films: item,
        });
      });
    } else if (filter.sortOption === filterOptions[2].key) {
      getInfo(TOP_RATED, filter.page).then((item) => {
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

  if(filter.films !== undefined){
  if (filter.films.length !== 0) {
    return (
      <Box className="films-list">
        {filter.films.map((item: any) => {
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
  }}
  return <Box sx = {{fontSize: "xx-large", position: "absolute", top: "220px", left: "400px"}}>НИ-ХУ-Я</Box>
}
// backdrop_path
