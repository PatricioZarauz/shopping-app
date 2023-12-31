'use client'

import { useEffect, useRef } from "react";
import ModalWrapper from "../ModalWrapper";
import LoadingButton from "@/components/LoadingButton";

const OneActionModal = ({ onCloseHandler, mainActionHandler, mainActionText = "OK", title, content, cancelActionText = "Cancel", isLoading }) => {
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
    <dialog ref={modalRef} className="modal modal-bottom md:modal-middle" data-testid="dialog-component" >
      <div className="modal-box">
        <h3 className="font-bold text-lg" data-testid="dialog-title">{title}</h3>
        {content}
        <div className="modal-action">
          <button
            className="btn btn-secondary"
            onClick={exitAction}
            data-testid="cancel-button"
          >
            {cancelActionText}
          </button>
          <LoadingButton
            styleProp="btn-primary"
            isLoading={isLoading}
            onClickAction={() => {
              mainActionHandler();
              exitAction();
            }}
            content={mainActionText}
          />
        </div>
      </div>
    </dialog >
  );
};

export default ModalWrapper(OneActionModal);