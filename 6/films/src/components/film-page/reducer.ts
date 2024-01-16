import { FilmInfoState, FilmReducerType, SET_ACTORS_INFO, SET_FILM_INFO } from "./consts";

export function filmInfoReducer(state: FilmInfoState, action: FilmReducerType) {
  switch (action.type) {
    case SET_ACTORS_INFO: {
      return {
        ...state,
        actorInfo: action.actors,
      };
    }
    case SET_FILM_INFO: {
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
