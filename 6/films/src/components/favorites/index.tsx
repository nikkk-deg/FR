import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import { CHANGE_FAVORITES, FAVORITES_FILMS } from "../../consts";
import Cookie from "js-cookie";
import { changeFavorites, getURL } from "../../API";
import { MovieInfo, SET_FAV_FILMS } from "./consts";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hooks/redux";

interface Favorite {
  id: string | undefined;
}

export function Favorite({ id }: Favorite) {
  const [isFav, setIsFav] = useState(false);

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

  const token = useAppSelector(state => state.loginReducer.token)

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
      // dispatch({
      //   type: SET_FAV_FILMS,
      //   films: filmsIds,
      // });
    } catch (err) {
      // console.warn("ошибка сети");
      // if (favFilm.favorites.includes(Number(id))) {
      //   setIsFav(true);
      // } else {
      //   setIsFav(false);
      // }
    }
  };

  useEffect(() => {
    getFavFilms(FAVORITES_FILMS, id);
  }, [isFav]);

  const handleAddFav = () => {
    changeFavorites(CHANGE_FAVORITES, Cookie.get("account-id"), addFav, token);
    setIsFav(!isFav);
  };

  const handleDelFav = () => {
    changeFavorites(CHANGE_FAVORITES, Cookie.get("account-id"), delFav, token);
    setIsFav(!isFav);
  };

  if (isFav) {
    return <StarIcon sx={{ cursor: "pointer" }} onClick={handleDelFav} />;
  }
  return <StarBorderIcon sx={{ cursor: "pointer" }} onClick={handleAddFav} />;
}
