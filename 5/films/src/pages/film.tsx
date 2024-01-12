import { Box } from "@mui/material";
import { Header } from "../components/header";
import { useFilter } from "../components/filters-sidebar/filter-context";
import { getActorInfo, getFilmInfo } from "../components/film-page/getInfo";
import { useParams } from "react-router-dom"



export default function FilmPage() {
  const { id } = useParams();
  console.log(id);
  const fitler = useFilter();
  try{getActorInfo(id).then(item => console.log(item));}
  catch(error){
    console.error(error);
  }
  console.log(fitler);
  return (
    <>
      <Header film="Матрица"></Header>
    </>
  );
}
