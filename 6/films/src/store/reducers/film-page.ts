import { SET_ACTORS_INFO, SET_FILM_INFO } from "../const";
import { FILM_INFO_DEFAULT_STATE } from "../initial-state";


export function filmPageReducer(state = FILM_INFO_DEFAULT_STATE, action: any) {
  switch (action.type) {
    case SET_ACTORS_INFO: {
      return {
        ...state,
        actorInfo: action.payload,
      };
    }
    case SET_FILM_INFO: {
      return {
        ...state,
        filmInfo: action.payload,
      };
    }
    default: {
      return state
    }
  }
}
