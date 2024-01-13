import { token } from "../../consts";

export const getFilmInfo = async (movie_id: any) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=ru-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    }
  );
  const valueRequest = await response.json();
  return valueRequest;
};

export const getActorInfo = async (movie_id: any) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=ru-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    }
  );
  const valueRequest = await response.json();
  return valueRequest;
};
