import {
  ACTORS_INFO,
  FILM_INFO_TXT,
  GENRES,
  ACCOUNT_ID,
  FAVORITES_FILMS,
  CHANGE_FAVORITES,
  SEARCH_FILMS,
  IMG,
} from "./consts";
import { FILTER_OPTIONS } from "./components/filter/consts";
import Cookie from "js-cookie";

export const getURL = (type: string, id: string | undefined | null): string => {
  switch (type) {
    case FILM_INFO_TXT: {
      return `https://api.themoviedb.org/3/movie/${id}?language=ru-US`;
    }
    case ACTORS_INFO: {
      return `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-US`;
    }
    case GENRES: {
      return "https://api.themoviedb.org/3/genre/movie/list?language=ru";
    }
    case FILTER_OPTIONS[1].key: {
      return `https://api.themoviedb.org/3/movie/top_rated?language=ru-US&page=${id}`;
    }
    case FILTER_OPTIONS[2].key: {
      return `https://api.themoviedb.org/3/movie/top_rated?language=ru-US&page=${id}`;
    }
    case FILTER_OPTIONS[0].key: {
      return `https://api.themoviedb.org/3/movie/popular?language=ru-US&page=${id}`;
    }
    case ACCOUNT_ID: {
      return `https://api.themoviedb.org/3/account/null`;
    }
    case FAVORITES_FILMS: {
      return `https://api.themoviedb.org/3/account/${id}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`;
    }
    case CHANGE_FAVORITES: {
      return `https://api.themoviedb.org/3/account/${id}/favorite`;
    }
    case SEARCH_FILMS: {
      return `https://api.themoviedb.org/3/search/movie?query=${id}&include_adult=false&language=en-US&page=1`;
    }
    case IMG: {
      return `https://image.tmdb.org/t/p/w300${id}`
    }
    default: {
      throw new Error("Unknow action: " + type);
    }
  }
};

export const getInfo = async (type: string, id: string | undefined) => {
  const response = await fetch(getURL(type, id), {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${Cookie.get("token")}`,
    },
  });

  const valueRequest = await response.json();
  return valueRequest;
};

export const changeFavorites = async (
  type: string,
  id: string | undefined,
  data: any
) => {
  const response = await fetch(getURL(type, id), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      accept: "application/json",
      authorization: `Bearer ${Cookie.get("token")}`,
      "content-type": "application/json",
    },
  });
  const valueRequest = await response.json();
  return valueRequest;
};