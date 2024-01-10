import { token } from "../../consts";

export const topRatedFilms = async (page: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    }
  );
  const valueRequest = await response.json();
  return valueRequest.results;
};

export const popularFilms = async (page: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    }
  );
  const valueRequest = await response.json();
  return valueRequest.results;
};
