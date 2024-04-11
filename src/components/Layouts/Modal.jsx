import React from "react";

export const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-10 flex justify-center items-center ${open ? "visible bg-black/20" : "invisible"}`}
    >
      {children}
    </div>
  );
};
