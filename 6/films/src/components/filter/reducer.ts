import {
  CHANGE_FILM_LIST,
  CHANGE_PAGE,
  CHOOSE_GENRE,
  ERROR,
  RESET_FILTERS,
  SELECT_YEAR,
  SORT_OPTION,
  INITIAL_STATE,
  FilmsResponse,
  FilterAction,
} from "./consts";

export function filterReducer(state: FilmsResponse, action: FilterAction) {
  switch (action.type) {
    case SORT_OPTION: {
      return {
        ...state,
        sortOption: action.option,
      };
    }
    case SELECT_YEAR: {
      return {
        ...state,
        min: action.min,
        max: action.max,
      };
    }
    case RESET_FILTERS: {
      location.reload();
      return {
        ...state,
        sortOption: INITIAL_STATE.sortOption,
        min: INITIAL_STATE.min,
        max: INITIAL_STATE.max,
        genres: INITIAL_STATE.genres,
      };
    }
    case CHOOSE_GENRE: {
      return {
        ...state,
        genres: action.genre,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.page,
      };
    }
    case CHANGE_FILM_LIST: {
      return {
        ...state,
        films: action.films,
      };
    }
    default: {
      throw new Error(ERROR);
    }
  }
}
