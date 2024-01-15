import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { CLASS_BACK_BUTTON, HOME } from "./consts";

export default function BackButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(HOME);
  };
  return (
    <ArrowBackIcon
      className={CLASS_BACK_BUTTON}
      fontSize="large"
      onClick={handleClick}
    ></ArrowBackIcon>
  );
}
