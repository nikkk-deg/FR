import { ACTION, SET_FAV_FILMS, STATE,  } from "./consts";

export function filmFavReducer(state: STATE, action: ACTION) {
  switch (action.type) {
    case SET_FAV_FILMS: {
      return {
        ...state,
        favorites: action.films,
      };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
