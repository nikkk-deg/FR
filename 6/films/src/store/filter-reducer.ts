import { CHANGE_FILM_LIST, CHANGE_PAGE, CHOOSE_GENRE, RESET_FILTERS, SELECT_YEAR, SORT_OPTION } from "./const";
import { FILER_DEFAULT_STATE } from "./initial-state";

export function filterReducer(state = FILER_DEFAULT_STATE, action: any) {
  switch (action.type) {
    case SORT_OPTION: {
      return {
        ...state,
        sortOption: action.payload,
      };
    }
    case SELECT_YEAR: {
      return {
        ...state,
        min: action.payload,
        max: action.payload,
      };
    }
    case RESET_FILTERS: {
      return {
        ...state,
        sortOption: FILER_DEFAULT_STATE.sortOption,
        min: FILER_DEFAULT_STATE.min,
        max: FILER_DEFAULT_STATE.max,
        genres: FILER_DEFAULT_STATE.genres,
      };
    }
    case CHOOSE_GENRE: {
      return {
        ...state,
        genres: action.payload,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case CHANGE_FILM_LIST: {
      return {
        ...state,
        films: action.payload,
      };
    }
    default: {
      return state
    }
  }
}
