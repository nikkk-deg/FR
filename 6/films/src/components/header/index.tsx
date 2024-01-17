import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  CLASS_HEADER,
  CLASS_HEADER_TITLE,
  CLASS_LOGIN_BUTTON,
  TITLE,
} from "./consts";
import { useState } from "react";
import { EmailModal } from "./modal-email";
interface Header {
  film: string;
}

export function Header({ film }: Header) {
  const [emailModal, setEmailModal] = useState(false);

  const isModalOpen = () => {
    setEmailModal(!emailModal);
  }
  
  const setTitle = () => {
    if (film !== "") {
      return `${TITLE} - ${film}`;
    }
    return TITLE
  }


  return (
    <Box className={CLASS_HEADER}>
      <EmailModal
        show={emailModal}
        onClose={isModalOpen}
      />
      <Box className={CLASS_HEADER_TITLE} component={"p"}>
        {setTitle()}
      </Box>
      <AccountCircleIcon
        className={CLASS_LOGIN_BUTTON}
        onClick={isModalOpen}
      ></AccountCircleIcon>
    </Box>
  );
}
