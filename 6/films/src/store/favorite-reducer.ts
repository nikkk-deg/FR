import { SET_FAV_FILMS } from "./const";
import { FAVORITES_DEFAULT_STATE } from "./initial-state";

export function favoritesReducer(state = FAVORITES_DEFAULT_STATE, action: any) {
  switch (action.type) {
    case SET_FAV_FILMS: {
      return {
        ...state,
        favorites: action.payload,
      };
    }
    default: {
      return state
    }
  }
}
