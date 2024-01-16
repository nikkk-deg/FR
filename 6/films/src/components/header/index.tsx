import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  CLASS_HEADER,
  CLASS_HEADER_TITLE,
  CLASS_LOGIN_BUTTON,
  TITLE,
  CLASS_EMAIL_MODAL_BACKDROP,
  CLASS_EMAIL_MODAL_BODY,
  CLASS_EMAIL_MODAL_CONTENT,
  CLASS_EMAIL_MODAL_FOOTER,
  CLASS_EMAIL_MODAL_HEADER,
} from "./consts";
import { useState } from "react";
import { EmailModal } from "./modal-email";
import { useEffect, useRef } from "react";

interface Header {
  film: string;
}

export function Header({ film }: Header) {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const show = () => {
    setShowEmailModal(true);
  };

  const hide = () => {
    setShowEmailModal(false);
  };

  const saveData = () => {
    alert("save data");
  };

  const cancelData = () => {
    alert("cancel data");
  };

  interface EmailModal {
    show: any;
    onConfirm: any;
    onCancel: any;
    onClose: Function;
  }

  function EmailModal({ show, onConfirm, onCancel, onClose }: EmailModal) {
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

    if (showEmailModal) {
      document.body.style.overflow = "hidden";
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
    } else {
      document.body.style.overflow = "visible";
    }
  }

  let title = TITLE;

  if (film !== "") {
    title = `${TITLE} - ${film}`;
  }

  const handleClick = () => {
    alert("login!!!");
  };

  return (
    <Box className={CLASS_HEADER}>
      <EmailModal
        show={showEmailModal}
        onClose={hide}
        onConfirm={saveData}
        onCancel={cancelData}
      />
      <Box className={CLASS_HEADER_TITLE} component={"p"}>
        {title}
      </Box>
      <AccountCircleIcon
        className={CLASS_LOGIN_BUTTON}
        onClick={show}
      ></AccountCircleIcon>
    </Box>
  );
}
