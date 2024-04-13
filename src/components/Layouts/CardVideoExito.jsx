import React, { useState } from "react";
import { Modal } from "../Layouts/Modal.jsx";

const CardVideoExito = ({ nombre, cargo, empresa, frase, foto, video }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="relative flex flex-col bg-slate-50 h-[450px] w-[300px] shadow-lg rounded-lg">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          src={foto}
          alt="foto cliente"
        />
        <div className="relative flex flex-col pl-1 mt-5 align-top items-start max-w-44">
          <p className="font-bold text-base font-overpass">{nombre}</p>
          <p className="opacity-55 text-left text-xs">{cargo}</p>
          <p className="opacity-55 text-left text-xs">{empresa}</p>
        </div>
        <div className="relative flex flex-col h-[400px] align-bottom  items-start justify-end">
          <p className="font-serif italic  -mb-10 text-7xl opacity-70">"</p>
          <p className="text-black w-[300px] font-overpass pl-3 text-left">
            {frase}
          </p>
        </div>
        <div className=" ml-5">
          <button
            onClick={() => setOpenModal(true)}
            className="relative flex py-2 px-3 mb-2 rounded bg-emerald-600 hover:bg-emerald-500 transition-all duration-400 font-bold text-white "
          >
            {`Ver caso de éxito >`}
          </button>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      </Modal>
    </>
  );
};

export default CardVideoExito;
