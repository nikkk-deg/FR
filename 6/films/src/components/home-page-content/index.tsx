import { Box, TextField } from "@mui/material";
import { useEffect } from "react";
import { getInfo, getURL } from "../../API";
import FilmCard from "./card";
import { CLASS_FILM_LIST, CLASS_NETWORK_ERROR, ERROR_MESSAGE } from "./consts";
import { CHANGE_FILM_LIST } from "../filter/consts";
import { FilmInfo } from "../film-page/consts";
import { IMG } from "../../consts";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { Film } from "../../store/reducers/filter-slice";
import { fetchFilmList } from "../../store/reducers/ActionCreators";



const tokenAPI =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I";



export default function Films() {
  const token = useAppSelector(state => state.loginReducer.token);
  const options =  useAppSelector(state => state.filterReducer.sortOption);
  const page =  useAppSelector(state => state.filterReducer.page);
  const films =  useAppSelector(state => state.filterReducer.films);
  const filter = useAppSelector(state => state.filterReducer);
  const dispatch = useAppDispatch();
  console.log(filter);

  const token123 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I'
  useEffect(() => {
    dispatch(fetchFilmList(options, page, token123))
  }, [page, options, token123]);

  if (films.length !== 0) {
    return (
      <Box className={CLASS_FILM_LIST}>
        {films.map(item => {
          return (
            <FilmCard
              key={item.id}
              film={item.title}
              img = {getURL(IMG, item.poster_path)}
              id={String(item.id)}
            ></FilmCard>
          );
        })}
      </Box>
    );
  }
  return (
  <>
  <Box className={CLASS_NETWORK_ERROR}>{ERROR_MESSAGE}</Box>
  <TextField multiline inputProps={{readOnly: true}} label = "Copy me" defaultValue={tokenAPI} sx={{fontSize: 'x-small', position: 'absolute', top: '200px', color: 'red'}}/>
  </>);
}
