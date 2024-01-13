import { Box, CardMedia } from "@mui/material";

interface IPoster {
  film: string;
  img: string;
}

export default function Poster({ img, film }: IPoster) {
  return (
    <Box
      sx={{
        width: "300px",
        height: "402px",
        top: "80px",
        left: "18px",
        position: "absolute",
      }}
    >
      <CardMedia component="img" image={img} alt={film} />
    </Box>
  );
}
