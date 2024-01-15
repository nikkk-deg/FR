import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface IName {
  name: string;
  year: string;
}

export default function Name({ name, year }: IName) {
  return (
    <Box
      sx={{
        fontSize: "xx-large",
        position: "absolute",
        top: "80px",
        left: "350px",
        minWidth: "400px",
      }}
      component={"p"}
    >
      {`${name} - (${year})`}
      <StarIcon sx={{ cursor: "pointer", right: "calc(50%-25px);" }}></StarIcon>
    </Box>
  );
}
