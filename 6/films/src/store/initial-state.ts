import { FILTER_OPTIONS, LAST_YEAR } from "./const";


export const FILER_DEFAULT_STATE = {
    sortOption: FILTER_OPTIONS[0].key,
    min: "2010",
    max: LAST_YEAR,
    genres: [],
    page: "1",
    films: [],
  };

  export const FILM_INFO_DEFAULT_STATE = {
    actorInfo: [],
    filmInfo: [],
  };


export const FAVORITES_DEFAULT_STATE = {
    favorites: [],
    status: '',
};
