export const SET_FAV_FILMS = 'set-fav-films';
export const DEL_FAV_FILMS = 'del_fav_films';


export const FAV_FILMS = {
    favorites: [],
    status: '',
};

export interface STATE{
    favorites : string[];
    status: string;
}

export interface ACTION{
    type: string;
    films: number[];
}

export interface MovieInfo{
    adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}