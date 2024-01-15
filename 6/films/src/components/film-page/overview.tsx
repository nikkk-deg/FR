import { Box, Typography } from "@mui/material";
import { useFilmInfo } from "./context";
import { CLASS_OVERVIEW, CLASS_OVERVIEW_TXT, TITLE_OVERVIEW } from "./consts";

export default function Overview() {
  const filmInfo = useFilmInfo();

  return (
    <Box className={CLASS_OVERVIEW}>
      <Typography variant="h3">{TITLE_OVERVIEW}:</Typography>
      <Typography className={CLASS_OVERVIEW_TXT}>
        {filmInfo.filmInfo.overview}
      </Typography>
    </Box>
  );
}
