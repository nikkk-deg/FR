import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import { ADD_DELETE_FAVORITES, FAVORITES_FILMS } from "../consts";
import Cookie from "js-cookie";
import { addDelFavorites, getInfo } from "../getInfo";
import { useFilmFav, useFilmFavDispatch } from "./context";
import { SET_FAV_FILMS } from "./consts";
import { useFilter } from "../filter/context";

interface Favotite {
  id: string | undefined;
}

export function Favotite({ id }: Favotite) {
  const [isFav, setIsFav] = useState(false);
  const favFilm = useFilmFav();
  const dispatch = useFilmFavDispatch();

  const dataAdd = {
    media_type: "movie",
    media_id: id,
    favorite: true,
  };
  const dataDel = {
    media_type: "movie",
    media_id: id,
    favorite: false,
  };

  const getFavFilms = () => {
    getInfo(FAVORITES_FILMS, Cookie.get("account-id"))
      .then((item) => {
        let filmsIds: any[] = [];
        item.results.map((item: any) => filmsIds.push(item.id));

        dispatch({
          type: SET_FAV_FILMS,
          films: filmsIds,
        });
      })
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    getFavFilms();
  }, [isFav]);

  const handleAddFav = () => {
    addDelFavorites(ADD_DELETE_FAVORITES, Cookie.get("account-id"), dataAdd);
    setIsFav(!isFav);
  };

  const handleDelFav = () => {
    addDelFavorites(ADD_DELETE_FAVORITES, Cookie.get("account-id"), dataDel);
    setIsFav(!isFav);
  };

  if (favFilm.favorites.includes(Number(id))) {
    return <StarIcon sx={{ cursor: "pointer" }} onClick={handleDelFav} />;
  }
  return <StarBorderIcon sx={{ cursor: "pointer" }} onClick={handleAddFav} />;
}
