import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { useFilter, useFilterDispatch } from "../components/filter/context";
import { getInfo } from "../components/getInfo";
import Poster from "../components/film-page/poster";
import Title from "../components/film-page/title";
import Actors from "../components/film-page/actors";
import BackButton from "../components/film-page/back-button";
import Overview from "../components/film-page/overview";
import { ACTORS_INFO, FILM_INFO_TXT } from "../components/consts";



export default function FilmPage() {
  const [filmYear, setfilmYear] = useState("");
  const fitler = useFilter();
  const dispatch = useFilterDispatch();
  const { id } = useParams();

  useEffect(() => {
    try {
      getInfo(FILM_INFO_TXT, id).then((item) => {
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
      getInfo(ACTORS_INFO, id).then((item) => {
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
      <Title name={fitler.filmInfo?.title} year={filmYear} />
      <BackButton />
      <Actors />
      <Overview />
    </>
  );
}
//сделаит контекст и редьюсер специально для этой страницы
