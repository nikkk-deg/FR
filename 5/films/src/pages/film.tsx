import { Box } from "@mui/material";
import { Header } from "../components/header";
import { useFilter } from "../components/filters-sidebar/filter-context";

export default function FilmPage() {
  const fitler = useFilter();
  console.log(fitler);
  return (
    <>
      <Header film="Матрица"></Header>
    </>
  );
}
