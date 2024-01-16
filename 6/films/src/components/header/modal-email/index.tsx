import { Box } from "@mui/material";
import {
  CLASS_EMAIL_MODAL_BACKDROP,
  CLASS_EMAIL_MODAL_BODY,
  CLASS_EMAIL_MODAL_CONTENT,
  CLASS_EMAIL_MODAL_FOOTER,
  CLASS_EMAIL_MODAL_HEADER,
} from "./const";
import { useEffect, useRef } from "react";

interface EmailModal {
  show: Function;
  onConfirm: any;
  onCancel: any;
  onClose: Function;
}

export function EmailModal({ show, onConfirm, onCancel, onClose }: EmailModal) {
  const modalRef = useRef(null);

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

  useEffect(() => {
    document.body.addEventListener("mousedown", closeModalOnClickOut);

    return () => {
      document.body.removeEventListener("mousedown", closeModalOnClickOut);
    };
  }, [show]);

  const closeModalOnEscKeyDown = (e: any) => {
    if (show && e.code === `Escape` && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeModalOnEscKeyDown);

    return () => {
      document.body.removeEventListener("keydown", closeModalOnEscKeyDown);
    };
  }, [show]);

  const onCancelClicked = () => {
    if (onClose) onClose();
    if (onCancel) onCancel();
  };

  const onConfirmClicked = () => {
    if (onClose) onClose();
    if (onCancel) onConfirm();
  };

  if (show) {
    return (
      <Box className={CLASS_EMAIL_MODAL_BACKDROP}>
        <Box ref={modalRef} className={CLASS_EMAIL_MODAL_CONTENT}>
          <Box className={CLASS_EMAIL_MODAL_HEADER}></Box>
          <Box className={CLASS_EMAIL_MODAL_BODY}></Box>
          <Box className={CLASS_EMAIL_MODAL_FOOTER}>
            <button onClick={onCancelClicked} className="text-button">
              Cancel
            </button>
            <button onClick={onConfirmClicked} className="flat-button">
              OK
            </button>
          </Box>
        </Box>
      </Box>
    );
  }
}
