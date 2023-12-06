'use client'

import { createPortal } from "react-dom";

const ModalWrapper = (Modal) => {
  const Wrapper = (props) => {
    return (
      createPortal((<Modal {...props} />), document.body)
    );
  };

  return Wrapper;
};

export default ModalWrapper;
