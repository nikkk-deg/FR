import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { CLASS_FAVORITES, CLASS_TITLE } from "./consts";
import { Favotite } from "../favorites";

interface Title {
  name: string;
  year: string;
  id: string | undefined;
}

export default function Title({ name, year, id }: Title) {
  return (
    <Box className={CLASS_TITLE} component={"p"}>
      {`${name} - (${year})`}
      <Favotite id={id} />
    </Box>
  );
}
