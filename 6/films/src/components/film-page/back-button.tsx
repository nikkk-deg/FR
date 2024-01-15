import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <ArrowBackIcon
      fontSize="large"
      sx={{ position: "absolute", top: "180px", left: "350px" }}
      onClick={handleClick}
    ></ArrowBackIcon>
  );
}
