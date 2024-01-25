import { Box } from "@mui/material";
import { useEffect } from "react";
import { useFilter, useFilterDispatch } from "../filter/context";
import { getInfo, getURL } from "../../API";
import FilmCard from "./card";
import { CLASS_FILM_LIST, CLASS_NETWORK_ERROR, ERROR_MESSAGE } from "./consts";
import { CHANGE_FILM_LIST } from "../filter/consts";
import { FilmInfo } from "../film-page/consts";
import { IMG } from "../../consts";
import { useSelector } from "react-redux";
import { initialState } from "../../store/initialState";



const tokenAPI =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I";



export default function Films() {
  const filter = useFilter();
  const dispatch = useFilterDispatch();
  const token = useSelector((state: any) => state.token.token);

  useEffect(() => {
    getInfo(filter.sortOption, filter.page, token)
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
  }, [filter.page, filter.sortOption, token]);

  if (filter.films !== undefined  && token !== initialState.token) {
    return (
      <Box className={CLASS_FILM_LIST}>
        {filter.films.map((item: FilmInfo) => {
          return (
            <FilmCard
              key={item.id}
              film={item.title}
              img = {getURL(IMG, item.poster_path)}
              id={item.id}
            ></FilmCard>
          );
        })}
      </Box>
    );
  }
  return (
  <>
  <Box className={CLASS_NETWORK_ERROR}>{ERROR_MESSAGE}</Box>
  <Box sx={{fontSize: 'x-small', position: 'absolute', top: '200px', color: 'red'}}>{`copy me:     ${tokenAPI}`}</Box>
  </>);
}
