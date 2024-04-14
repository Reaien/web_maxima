import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

export const Modal = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-10 flex justify-center items-center ${open ? "visible bg-black/50 " : "invisible"}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation;
        }}
        className={`flex flex-col items-end bg-transparent  transition-all ${open ? "scale-90 opacity-100" : "scale-100 opacity-0"}`}
      >
        <RiCloseCircleFill
          onClick={onClose}
          className="z-20 -mb-6 fill-emerald-500 hover:fill-emerald-600 drop-shadow-lg  transition-all w-20 h-20 "
        />
        {children}
      </div>
    </div>
  );
};
