import React from "react";
import StarIcon from "../icons/StarIcon.jsx";
import maximaLogoFull from "../../assets/images/maximaLogoFull.svg";

const Comentarios = ({ mail, comentario }) => {
  return (
    <>
      <div className="flex flex-row px-10  py-2 ">
        <div className="flex flex-col items-center ">
          <div className="bg-indigo-100 mr-3 rounded-full p-1 w-10 h-10 flex items-center justify-center">
            <img className="w-36 h-36 " src={maximaLogoFull} alt="logo" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row space-x-2 items-center w-full">
            <p className="text-lg font-semibold leading-7 undefined">{mail}</p>
            <p className="text-xs font-normal leading-normal text-slate-600 ">
              Hace 1 mes
            </p>
            <div className="rounded-full h-3 w-5 bg-lime-500"></div>
          </div>
          <div className="flex flex-row pb-1.5">
            <div className="flex gap-1">
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="p-3 rounded-lg shadow border border-gray-200  w-full mt-3">
            <p className="text-base font-normal leading-normal text-slate-600 undefined">
              {comentario}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comentarios;
