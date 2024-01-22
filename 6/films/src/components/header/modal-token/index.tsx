import { Box, Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import {
  TOKEN_CANCEL_BUTTON_TITLE,
  CLASS_TOKEN_MODAL_BACKDROP,
  CLASS_TOKEN_MODAL_BODY,
  CLASS_TOKEN_MODAL_CANCEL_BUTTON,
  CLASS_TOKEN_MODAL_CONTENT,
  CLASS_TOKEN_MODAL_FOOTER,
  CLASS_TOKEN_MODAL_HEADER,
  CLASS_TOKEN_MODAL_REQUEST_BUTTON,
  CLASS_TOKEN_MODAL_TITLE,
  TOKEN_MODAL_FORM_TITLE,
  TOKEN_MODAL_TITLE,
  TOKEN_REQUEST_BUTTON_TITLE,
} from "./const";

import { saveAccountId } from "../../account/get-account-id";

interface tokenModal {
  showToken: boolean;
  onClose: Function;
}

export function TokenModal({ showToken, onClose }: tokenModal) {
  const [tokenInput, setTokenInput] = useState("");
  const modalRef = useRef<HTMLElement | null>(null);

  const closeModalOnClickOut = (e: MouseEvent) => {
    if (
      showToken &&
      e.target &&
      modalRef.current &&
      !modalRef.current.contains(e.target as Node) &&
      onClose
    ) {
      onClose();
    }
  };

  const closeModalOnEscKeyDown = (e: KeyboardEvent) => {
    if (showToken && e.code === `Escape` && onClose) {
      onClose();
    }
  };

  //close modal windows on mouse or Esc events
  useEffect(() => {
    setTokenInput("");
    document.body.addEventListener("mousedown", closeModalOnClickOut);
    document.body.addEventListener("keydown", closeModalOnEscKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeModalOnEscKeyDown);
      document.body.removeEventListener("mousedown", closeModalOnClickOut);
    };
  }, [showToken]);

  const onCancelClicked = () => {
    setTokenInput("");
    onClose();
  };

  const onConfirmClicked = () => {
    if (tokenInput !== "") {
      saveAccountId();
      Cookies.set("token", tokenInput);
      setTokenInput("");
      onClose();
      location.reload();
    }
  };

  const handleTokenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenInput(e.target.value);
  };

  if (showToken) {
    document.body.style.overflow = "hidden";
    return (
      <Box className={CLASS_TOKEN_MODAL_BACKDROP}>
        <Box ref={modalRef} className={CLASS_TOKEN_MODAL_CONTENT}>
          <Box className={CLASS_TOKEN_MODAL_HEADER}>
            <Box className={CLASS_TOKEN_MODAL_TITLE}>{TOKEN_MODAL_TITLE}</Box>
          </Box>
          <Box className={CLASS_TOKEN_MODAL_BODY}>
            <TextField
              fullWidth
              label={TOKEN_MODAL_FORM_TITLE}
              variant="standard"
              value={tokenInput}
              onChange={handleTokenInput}
            />
          </Box>
          <Box className={CLASS_TOKEN_MODAL_FOOTER}>
            <Button
              variant="contained"
              size="small"
              onClick={onCancelClicked}
              className={CLASS_TOKEN_MODAL_CANCEL_BUTTON}
            >
              {TOKEN_CANCEL_BUTTON_TITLE}
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={onConfirmClicked}
              className={CLASS_TOKEN_MODAL_REQUEST_BUTTON}
            >
              {TOKEN_REQUEST_BUTTON_TITLE}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
    document.body.style.overflow = "visible";
    return <></>;
}
