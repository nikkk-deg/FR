import { Box, Typography } from "@mui/material";
import { useFilter } from "../filters-sidebar/filter-context";
import { getFilmInfo } from "./getInfo";

export default function Overview() {
  const filter = useFilter();
  const style = {
    position: "absolute",
    minWidth: "1000px",
    top: "600px",
    left: "370px",
  };
  return (
    <Box sx={style}>
      <Typography variant="h3">Описание:</Typography>
      <Typography sx={{ marginTop: "30px", fontSize: "large", width: "800px" }}>
        {filter.filmInfo.overview}
      </Typography>
    </Box>
  );
}
