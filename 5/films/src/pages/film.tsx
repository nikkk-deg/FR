import { Box } from "@mui/material";
import { Header } from "../components/header";
import {
  useFilter,
  useFilterDispatch,
} from "../components/filters-sidebar/filter-context";
import { getActorInfo, getFilmInfo } from "../components/film-page/getInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Poster from "../components/film-page/poster";
import Name from "../components/film-page/name";
import Actors from "../components/film-page/actors";
import BackButton from "../components/film-page/back-button";
import Details from "../components/film-page/overview";
import Overview from "../components/film-page/overview";

export default function FilmPage() {
  const [filmYear, setfilmYear] = useState("");
  const fitler = useFilter();
  const dispatch = useFilterDispatch();
  const { id } = useParams();

  useEffect(() => {
    try {
      getFilmInfo(id).then((item) => {
        dispatch({
          type: "set_film_info",
          film: item,
        });
        setfilmYear(item?.release_date.slice(0, 4));
      });
    } catch (error) {
      console.error(error);
    }
    try {
      getActorInfo(id).then((item) => {
        let actorList = [];
        for (let i = 0; i < 10; i++) {
          actorList.push(item.cast[i]);
        }
        dispatch({
          type: "set_actor_info",
          actors: actorList,
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Header film={`${fitler.filmInfo?.title}`}></Header>
      <Poster
        film={`${fitler.filmInfo?.original_title}`}
        img={`https://image.tmdb.org/t/p/w300${fitler.filmInfo?.poster_path}`}
      />
      <Name name={fitler.filmInfo?.title} year={filmYear} />
      <BackButton />
      <Actors />
      <Overview />
    </>
  );
}
