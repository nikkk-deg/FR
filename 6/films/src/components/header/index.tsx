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
import { TokenModal } from "./modal-token";


interface Header {
  film: string;
}

export function Header({ film }: Header) {
  const [emailModal, setEmailModal] = useState(false);
  const [tokenModal, setTokenModal] = useState(false);

  const isEmailModal = () => {
    setEmailModal(!emailModal);
  };

  const isTokenModal = () => {
    setTokenModal(!tokenModal);
  };

  const openTokenModal = () => {
    setTokenModal(true);
  };

  const setTitle = () => {
    if (film !== "") {
      return `${TITLE} - ${film}`;
    }
    return TITLE;
  };

  return (
    <Box className={CLASS_HEADER}>
      <EmailModal
        show={emailModal}
        onClose={isEmailModal}
        isTokenModal={openTokenModal}
      />
      <TokenModal showToken={tokenModal} onClose={isTokenModal} />
      <Box className={CLASS_HEADER_TITLE} component={"p"}>
        {setTitle()}
      </Box>
      <AccountCircleIcon
        className={CLASS_LOGIN_BUTTON}
        onClick={isEmailModal}
      ></AccountCircleIcon>
    </Box>
  );
}
