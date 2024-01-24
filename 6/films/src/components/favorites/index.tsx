import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import { CHANGE_FAVORITES, FAVORITES_FILMS } from "../../consts";
import Cookie from "js-cookie";
import { changeFavorites, getURL } from "../../API";
import { useFilmFav, useFilmFavDispatch } from "./context";
import { MovieInfo, SET_FAV_FILMS } from "./consts";
import { token } from './../../../../../../review/FR-5/nikita_deg/films/src/consts';
import { useSelector } from "react-redux";

interface Favorite {
  id: string | undefined;
}

export function Favorite({ id }: Favorite) {
  const [isFav, setIsFav] = useState(false);
  const favFilm = useFilmFav();
  const dispatch = useFilmFavDispatch();

  const addFav = {
    media_type: "movie",
    media_id: id,
    favorite: true,
  };
  const delFav = {
    media_type: "movie",
    media_id: id,
    favorite: false,
  };

<<<<<<< HEAD
  const token = useSelector(state => state.token);

=======
  //да, функция бога, хз как ее изменить
>>>>>>> 69cbb9f5e409bea37f996718731e031d15b245e3
  const getFavFilms = async (type: string, id: string | undefined) => {
    try {
      const response = await fetch(getURL(type, id), {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const valueRequest = await response.json();
      let filmsIds: number[] = [];
      valueRequest.results.map((item: MovieInfo) => filmsIds.push(item.id));
      if (filmsIds.includes(Number(id))) {
        setIsFav(true);
      }
      dispatch({
        type: SET_FAV_FILMS,
        films: filmsIds,
      });
    } catch (err) {
      console.warn("ошибка сети");
      if (favFilm.favorites.includes(Number(id))) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
  };

  useEffect(() => {
    getFavFilms(FAVORITES_FILMS, id);
  }, [isFav]);

  const handleAddFav = () => {
    changeFavorites(CHANGE_FAVORITES, Cookie.get("account-id"), addFav);
    setIsFav(!isFav);
  };

  const handleDelFav = () => {
    changeFavorites(CHANGE_FAVORITES, Cookie.get("account-id"), delFav);
    setIsFav(!isFav);
  };

  if (isFav) {
    return <StarIcon sx={{ cursor: "pointer" }} onClick={handleDelFav} />;
  }
  return <StarBorderIcon sx={{ cursor: "pointer" }} onClick={handleAddFav} />;
}
