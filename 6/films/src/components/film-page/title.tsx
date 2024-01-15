import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { CLASS_FAVORITES, CLASS_TITLE } from "./consts";

interface IName {
  name: string;
  year: string;
}

export default function Title({ name, year }: IName) {
  return (
    <Box className={CLASS_TITLE} component={"p"}>
      {`${name} - (${year})`}
      <StarIcon className={CLASS_FAVORITES}></StarIcon>
    </Box>
  );
}
