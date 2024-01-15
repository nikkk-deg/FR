import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CLASS_HEADER, CLASS_HEADER_TITLE, CLASS_LOGIN_BUTTON, TITLE } from "./consts";

interface IHeader {
  film: string;
}

export function Header({ film }: IHeader) {
  let title = TITLE;

  if (film !== "") {
    title = `${TITLE} - ${film}`;
  }

  const handleClick = () => {
    alert("login!!!");
  }

  return (
    <Box className={CLASS_HEADER}>
      <Box
      className={CLASS_HEADER_TITLE}
        component={"p"}
      >
        {title}
      </Box>
      <AccountCircleIcon
      className={CLASS_LOGIN_BUTTON}
        onClick={handleClick}
      ></AccountCircleIcon>
    </Box>
  );
}
