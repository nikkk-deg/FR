import { Box } from "@mui/material";
import { CLASS_TITLE } from "./consts";
import { Favorite } from "../favorites";

interface Title {
  name: string;
  year: string;
  id: string | undefined;
}

export default function Title({ name, year, id }: Title) {
  return (
    <Box className={CLASS_TITLE} component={"p"}>
      {`${name} - (${year})`}
      <Favorite id={id} />
    </Box>
  );
}
