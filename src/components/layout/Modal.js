import React from "react";
import CloseIcon from "../icons/CloseIcon";
import "../../assets/styles/modal.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <button className="close-modal-btn" onClick={handleClose}>
        <CloseIcon />
      </button>
      <section className="modal-main">{children}</section>
    </div>
  );
};

export default Modal;
