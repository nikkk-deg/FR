import { Box, Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  CANCEL_BUTTON_TITLE,
  CLASS_EMAIL_MODAL_BACKDROP,
  CLASS_EMAIL_MODAL_BODY,
  CLASS_EMAIL_MODAL_CANCEL_BUTTON,
  CLASS_EMAIL_MODAL_CONTENT,
  CLASS_EMAIL_MODAL_FOOTER,
  CLASS_EMAIL_MODAL_HEADER,
  CLASS_EMAIL_MODAL_REQUEST_BUTTON,
  CLASS_EMAIL_MODAL_TITLE,
  EMAIL_MODAL_FORM_TITLE,
  EMAIL_MODAL_TITLE,
  REQUEST_BUTTON_TITLE,
} from "./const";
import Cookies from "js-cookie";

interface EmailModal {
  show: boolean;
  onClose: Function;
  isTokenModal: Function;
}

export function EmailModal({ show, onClose, isTokenModal }: EmailModal) {
  const [emailInput, setEmailInput] = useState("");
  const modalRef = useRef<HTMLElement | null>(null);

  const closeModalOnClickOut = (e: any) => {
    if (
      show &&
      e.target &&
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      onClose
    ) {
      onClose();
    }
  };

  const closeModalOnEscKeyDown = (e: KeyboardEvent) => {
    if (show && e.code === `Escape` && onClose) {
      onClose();
    }
  };

  //close modal windows on mouse or Esc events
  useEffect(() => {
    setEmailInput("");
    document.body.addEventListener("mousedown", closeModalOnClickOut);
    document.body.addEventListener("keydown", closeModalOnEscKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeModalOnEscKeyDown);
      document.body.removeEventListener("mousedown", closeModalOnClickOut);
    };
  }, [show]);

  const onCancelClicked = () => {
    setEmailInput("");
    onClose();
  };

  const onConfirmClicked = () => {
    if (emailInput !== "") {
      Cookies.set("email", emailInput);
      setEmailInput("");
      isTokenModal();
      onClose();
    }
  };

  const handleEmailInput = (e: any) => {
    setEmailInput(e.target.value);
  };

  if (show) {
    document.body.style.overflow = "hidden";
    return (
      <Box className={CLASS_EMAIL_MODAL_BACKDROP}>
        <Box ref={modalRef} className={CLASS_EMAIL_MODAL_CONTENT}>
          <Box className={CLASS_EMAIL_MODAL_HEADER}>
            <Box className={CLASS_EMAIL_MODAL_TITLE}>{EMAIL_MODAL_TITLE}</Box>
          </Box>
          <Box className={CLASS_EMAIL_MODAL_BODY}>
            <TextField
              fullWidth
              label={EMAIL_MODAL_FORM_TITLE}
              variant="standard"
              value={emailInput}
              onChange={handleEmailInput}
            />
          </Box>
          <Box className={CLASS_EMAIL_MODAL_FOOTER}>
            <Button
              variant="contained"
              size="small"
              onClick={onCancelClicked}
              className={CLASS_EMAIL_MODAL_CANCEL_BUTTON}
            >
              {CANCEL_BUTTON_TITLE}
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={onConfirmClicked}
              className={CLASS_EMAIL_MODAL_REQUEST_BUTTON}
            >
              {REQUEST_BUTTON_TITLE}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  } else {
    document.body.style.overflow = "visible";
    return <></>;
  }
}
