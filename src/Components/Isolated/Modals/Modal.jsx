import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ visible, onClose, children }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-[#000] bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-[#222] text-basic rounded-md p-5 mx-5">
        <button className="block ml-auto mb-3" onClick={onClose}>
          <AiOutlineClose className="text-xl text-primary" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
