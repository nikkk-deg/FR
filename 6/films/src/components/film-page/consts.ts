export const TITLE_ACTORS = "Актерский состав:";
export const TITLE_OVERVIEW = "Описание";
export const HOME = "/";
export const CLASS_ACTOR = "actors-list";
export const CLASS_ACTORS_TITLE = "actor-list-title";
export const CLASS_BACK_BUTTON = "back-button";
export const CLASS_OVERVIEW = "overview";
export const CLASS_OVERVIEW_TXT = "overview-txt";
export const CLASS_POSTER = "poster";
export const CLASS_TITLE = "film-title";
export const CLASS_FAVORITES = "favorites";
export const SET_FILM_INFO = "set-film-info";
export const SET_ACTORS_INFO = "set-actor-info";

export interface CastMember {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number; // Assuming 1 for female, 2 for male
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null; // Assuming it could be null if no profile picture
}

export const FILM_INFO_STATE = {
  actorInfo: [],
  filmInfo: [],
};
