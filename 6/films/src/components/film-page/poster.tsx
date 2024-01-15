import { Box, CardMedia } from "@mui/material";
import { CLASS_POSTER } from "./consts";

interface Poster {
  film: string;
  img: string;
}

export default function Poster({ img, film }: Poster) {
  return (
    <Box className={CLASS_POSTER}>
      <CardMedia component="img" image={img} alt={film} />
    </Box>
  );
}
