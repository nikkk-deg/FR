import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Header() {
  return (
    <Box className="header">
      <Box
        component={"p"}
        sx={{
          fontSize: "x-large",
          float: "left",
          marginLeft: "40px",
          marginTop: "17px",
        }}
      >
        Фильмы
      </Box>
      <AccountCircleIcon
        sx={{ float: "right", marginTop: "17px", marginRight: "40px" }}
        onClick={() => alert("login!!!")}
      ></AccountCircleIcon>
    </Box>
  );
}
