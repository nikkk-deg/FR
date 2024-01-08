import { token } from "../../../consts";

export const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=ru",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    }
  );
  const valueRequest = await response.json();
  return valueRequest.genres;
};
