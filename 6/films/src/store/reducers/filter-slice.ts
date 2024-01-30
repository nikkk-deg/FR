import { createSlice } from "@reduxjs/toolkit";
import { CHANGE_FILM_LIST, CHANGE_PAGE, CHOOSE_GENRE, FILTER_OPTIONS, LAST_YEAR, RESET_FILTERS, SELECT_YEAR, SORT_OPTION } from "../const";
import { FILER_DEFAULT_STATE } from "../initial-state";

interface Genre {
  id: number;
  name: string;
}

export interface Film {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface FilterState {
  films: Film[];
  genres: Genre[];
  max: number;
  min: string;
  page: string;
  sortOption: string;
  isLoading: boolean;
  error: string;
}

const initialState: FilterState = {
  sortOption: FILTER_OPTIONS[0].key,
  min: "2010",
  max: LAST_YEAR,
  genres: [],
  page: "1",
  films: [],
  isLoading: false,
  error: ""

}


export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setOptions(state, action: any){
      state.sortOption = action.payload;
    },
    setSliderYears(state, action: any){
      state.min = action.payloadMin;
      state.max = action.payloadMax;
    },
    resetFilters(state){
      state = initialState;
    },
    setGenres(state){
      state.isLoading = true;
    },
    setGenresSuccess(state, action: any){
      state.genres = action.payload;
      state.isLoading = false;
    },
    setGenresError(state, action: any){
      state.isLoading = false;
      state.error = action.payload;
    },
    setPage(state, action: any){
      state.page = action.payload;
    },
    filmsFetching(state){
      state.isLoading = true;
    },
    filmsFetchingSuccess(state, action: any){
      state.films = action.payload;
      state.isLoading = false;
    },
    filmsFetchingError(state, action: any){
      state.error = action.payload;
      state.films = [];
      state.isLoading = false;
    },
  }
})

export default filterSlice.reducer;
export const setOptions = filterSlice.actions.setOptions;
export const setSliderYears = filterSlice.actions.setSliderYears;
export const resetFilters = filterSlice.actions.resetFilters;
export const setGenres = filterSlice.actions.setGenres;
export const setPage = filterSlice.actions.setPage;
export const filmsFetching = filterSlice.actions.filmsFetching;
export const filmsFetchingSuccess = filterSlice.actions.filmsFetchingSuccess;
export const filmsFetchingError = filterSlice.actions.filmsFetchingError;