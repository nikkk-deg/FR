import { Box } from "@mui/material";
import FilmCard from "./film-card";

export function Films() {
  return (
    <Box className="films-list">
      <FilmCard film="Матрица"></FilmCard>
      <FilmCard film="Терминатор 2"></FilmCard>
      <FilmCard film="Убить Билла"></FilmCard>
      <FilmCard film="Зеленая миля"></FilmCard>
    </Box>
  );
}
