import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import { ADD_DELETE_FAVORITES, FAVORITES_FILMS } from "../consts";
import Cookie from "js-cookie";
import { addDelFavorites, getInfo, getURL } from "../getInfo";
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

  const getFavFilms = async (type: string, id: string | undefined) => {
    try {
      const response = await fetch(getURL(type, id), {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${Cookie.get("token")}`,
        },
      });

      const valueRequest = await response.json();
      let filmsIds: any[] = [];
      valueRequest.results.map((item: any) => filmsIds.push(item.id));
      if (filmsIds.includes(Number(id))) {
        setIsFav(true);
      }
      dispatch({
        type: SET_FAV_FILMS,
        films: filmsIds,
      });
    } catch (err) {
      alert("ошибка сети");
      if (favFilm.favorites.includes(Number(id))) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
    // return valueRequest;
  };

  useEffect(() => {
    getFavFilms(FAVORITES_FILMS, id);
  }, [isFav]);

  const handleAddFav = () => {
    addDelFavorites(ADD_DELETE_FAVORITES, Cookie.get("account-id"), dataAdd);
    setIsFav(!isFav);
  };

  const handleDelFav = () => {
    addDelFavorites(ADD_DELETE_FAVORITES, Cookie.get("account-id"), dataDel);
    setIsFav(!isFav);
  };

  if (isFav) {
    return <StarIcon sx={{ cursor: "pointer" }} onClick={handleDelFav} />;
  }
  return <StarBorderIcon sx={{ cursor: "pointer" }} onClick={handleAddFav} />;
}
