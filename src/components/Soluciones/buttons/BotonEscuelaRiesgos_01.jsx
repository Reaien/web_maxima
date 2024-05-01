import React from "react";
import { DataIcon } from "../../icons/DataIcon";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const BotonEscuelaRiesgos_01 = () => {
  const isDesktop = window.innerWidth > 1024;
  return (
    <>
      <button
        className="w-[300px] h-[50px] bg-slate-200  justify-start flex items-center rounded-lg shadow-lg"
        data-tooltip-id={isDesktop ? `my-tooltip-1` : ""}
      >
        <div className=" bg-orange-600 px-4 h-full flex items-center justify-center rounded-l-lg shadow-lg">
          <DataIcon className="text-white w-8 h-8 " />
        </div>
        <div className="flex justify-start ">
          <p className="text-black font-bold  ml-1 text-sm">
            Programas creados con datos
          </p>
        </div>
      </button>
      {isDesktop && (
        <ReactTooltip
          id="my-tooltip-1"
          place="top"
          content="Nuestros programas se basan en los índices de accidentabilidad de la OIT y de las industrias más riesgosas a nivel mundial."
        />
      )}
    </>
  );
};
