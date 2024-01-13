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
    case "change_page": {
      return {
        ...state,
        page: action.page,
      };
    }
    case "change_film_list": {
      return {
        ...state,
        films: action.films,
      };
    }
    case "set_actor_info": {
      return {
        ...state,
        actorInfo: action.actors,
      };
    }
    case "set_film_info": {
      return {
        ...state,
        filmInfo: action.film,
      };
    }
    default: {
      throw new Error("Unknow action: " + action.type);
    }
  }
}
