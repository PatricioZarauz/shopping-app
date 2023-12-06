'use client'

import { useEffect, useRef } from "react";
import ModalWrapper from "../ModalWrapper";

const OneActionModal = ({ onCloseHandler, mainActionHandler, mainActionText = "OK", title, content, cancelActionText = "Cancel" }) => {
  const modalRef = useRef(null);

  const exitAction = () => {
    modalRef.current?.close();
    onCloseHandler();
  }

  useEffect(() => {
    modalRef.current?.showModal();
    modalRef.current?.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        exitAction();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <dialog ref={modalRef} className="modal modal-bottom md:modal-middle" >
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        {content}
        <div className="modal-action">
          <button
            className="btn btn-secondary"
            onClick={exitAction}
          >
            {cancelActionText}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              mainActionHandler();
              exitAction();
            }}
          >
            {mainActionText}
          </button>
        </div>
      </div>
    </dialog >
  );
};

export default ModalWrapper(OneActionModal);