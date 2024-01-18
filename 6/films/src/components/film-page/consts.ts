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

export const FILM_INFO_STATE = {
  actorInfo: [],
  filmInfo: [],
};

export interface CastMember {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number; // Assuming 1 for female, 2 for male
  id: string | undefined;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface FilmInfo {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any; // You might want to define a specific type here
  budget: number;
  genres: Genre[];
  homepage: string;
  id: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ActorInfo {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface FilmInfoState {
  actorInfo: FilmInfo[];
  filmInfo: ActorInfo[];
}

export interface FilmReducerType {
  type: string;
  actors: ActorInfo;
  film: FilmInfo;
}
