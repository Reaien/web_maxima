import React from "react";
import { FocusIcon } from "../../icons/FocusIcon";
import { Tooltip as ReactTooltip } from "react-tooltip";
export const BotonEscuelaRiesgos_03 = () => {
  const isDesktop = window.innerWidth > 1024;
  return (
    <>
      <button
        className="w-[300px] h-[50px] bg-slate-200  justify-start flex items-center rounded-lg shadow-lg"
        data-tooltip-id={isDesktop ? `my-tooltip-3` : ""}
      >
        <div className=" bg-yellow-500 px-4 h-full flex items-center justify-center rounded-l-lg shadow-lg">
          <FocusIcon className="text-white w-8 h-8 " />
        </div>
        <div className="flex justify-start ">
          <p className="text-black font-bold  ml-1 text-sm">Enfoque Práctico</p>
        </div>
      </button>
      {isDesktop && (
        <ReactTooltip
          id="my-tooltip-3"
          place="top"
          content="Nuestros cursos se centran en situaciones reales y ofrecen ejercicios prácticos para garantizar una aplicación efectiva de los conocimientos adquiridos."
        />
      )}
    </>
  );
};
