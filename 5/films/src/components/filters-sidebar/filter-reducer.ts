import { filterOptions, lastYear } from "../../consts";

export function filterReducer(state: any, action: any) {
  switch (action.type) {
    case "sort_option": {
      return {
        ...state,
        sortOption: action.option,
      };
    }
    case "select_year": {
      return {
        ...state,
        min: action.min,
        max: action.max,
      };
    }
    case "reset_filters": {
      location.reload();
      return {
        ...state,
        sortOption: filterOptions[0].key,
        min: "2010",
        max: lastYear,
        genres: [],
      };
    }
    case "choose_genre": {
      return {
        ...state,
        genres: action.genre,
      };
    }
    default: {
      throw new Error("Unknow action: " + action.type);
    }
  }
}
