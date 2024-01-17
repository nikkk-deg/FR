import { token } from "../consts";
import { ACTORS_INFO, FILM_INFO_TXT, GENRES } from "./consts";
import { FILTER_OPTIONS } from "./filter/consts";
import Cookie from "js-cookie";

const getURL = (type: string, id: string | undefined): string => {
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

// export const token =
//   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I";
