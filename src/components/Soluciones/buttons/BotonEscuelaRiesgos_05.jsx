import React from "react";
import { AgilIcon } from "../../icons/AgilIcon";
import { Tooltip as ReactTooltip } from "react-tooltip";
export const BotonEscuelaRiesgos_05 = () => {
  const isDesktop = window.innerWidth > 1024;
  return (
    <>
      <button
        className="w-[300px] h-[50px] bg-slate-200  justify-start flex items-center rounded-lg shadow-lg"
        data-tooltip-id={isDesktop ? `my-tooltip-5` : ""}
      >
        <div className=" bg-violet-600 px-4 h-full flex items-center justify-center rounded-l-lg shadow-lg">
          <AgilIcon className="text-white w-8 h-8 " />
        </div>
        <div className="flex justify-start ">
          <p className="text-black font-bold  ml-1 text-sm">
            Metodologías Ágiles
          </p>
        </div>
      </button>
      {isDesktop && (
        <ReactTooltip
          id="my-tooltip-5"
          place="top"
          content="Nuestros cursos en las etapas de planificación y ejecución se realizan a través de las metodologías ágiles más reconocidas a nivel mundial, buscando cambiar los paradigmas de la formación."
        />
      )}
    </>
  );
};
