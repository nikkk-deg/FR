import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { getInfo } from "../API";
import Poster from "../components/film-page/poster";
import Title from "../components/film-page/title";
import Actors from "../components/film-page/actors";
import BackButton from "../components/film-page/back-button";
import Overview from "../components/film-page/overview";
import { ACTORS_INFO, FILM_INFO_TXT } from "../consts";
import {
  useFilmInfo,
  useFilmInfoDispatch,
} from "../components/film-page/context";
import { SET_ACTORS_INFO, SET_FILM_INFO } from "../components/film-page/consts";
import { useSelector } from "react-redux";



export default function FilmPage() {
  const [filmYear, setFilmYear] = useState("");
  const filmInfo = useFilmInfo();
  const dispatch = useFilmInfoDispatch();
  const token = useSelector((state: any )=> state.token.token);
  const { id } = useParams();

  useEffect(() => {
    try {
      getInfo(FILM_INFO_TXT, id, token).then((item) => {
        dispatch({
          type: SET_FILM_INFO,
          film: item,
        });
        setFilmYear(item?.release_date.slice(0, 4));
      });
    } catch (error) {
      console.error(error);
    }

    try {
      getInfo(ACTORS_INFO, id, token).then((item) => {
        let actorList = [];
        for (let i = 0; i < 10; i++) {
          actorList.push(item.cast[i]);
        }
        dispatch({
          type: SET_ACTORS_INFO,
          actors: actorList,
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Header film={`${filmInfo.filmInfo?.title}`}></Header>
      <Poster
        film={`${filmInfo.filmInfo?.original_title}`}
        img={`https://image.tmdb.org/t/p/w300${filmInfo.filmInfo?.poster_path}`}
      />
      <Title name={filmInfo.filmInfo?.title} year={filmYear} id={id} />
      <BackButton />
      <Actors />
      <Overview />
    </>
  );
}
