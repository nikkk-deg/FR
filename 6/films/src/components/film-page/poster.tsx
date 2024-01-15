import { Box, CardMedia } from "@mui/material";
import { CLASS_POSTER } from './consts';

interface IPoster {
  film: string;
  img: string;
}

export default function Poster({ img, film }: IPoster) {
  return (
    <Box className={CLASS_POSTER}>
      <CardMedia component="img" image={img} alt={film} />
    </Box>
  );
}
