import { DEL_FAV_FILMS, SET_FAV_FILMS } from "./consts";

export function filmFavReducer(state: any, action: any) {
  switch (action.type) {
    case SET_FAV_FILMS: {
      return {
        ...state,
        favorites: action.films,
      };
    }
    // case DEL_FAV_FILMS: {
    //   return state.filter((item: number) => {item === action.filmId})
    // }
    default: {
      throw new Error("Unknow action: " + action.type);
    }
  }
}
