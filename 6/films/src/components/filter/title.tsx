import { Box } from "@mui/material";
import { memo } from "react";
import { CLASS_FILM_TXT, SIDEBAR_TITLE } from "./consts";

export default memo(function Title() {
  return (
    <Box className={CLASS_FILM_TXT} component={"p"}>
      {SIDEBAR_TITLE}
    </Box>
  );
});
