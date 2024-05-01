import React from "react";
import { ExperienceIcon } from "../../icons/ExperienceIcon";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const BotonEscuelaRiesgos_02 = () => {
  const isDesktop = window.innerWidth > 1024;
  return (
    <>
      <button
        className="w-[300px] h-[50px] bg-slate-200  justify-start flex items-center rounded-lg shadow-lg"
        data-tooltip-id={isDesktop ? `my-tooltip-2` : ""}
      >
        <div className=" bg-emerald-600 px-4 h-full flex items-center justify-center rounded-l-lg shadow-lg">
          <ExperienceIcon className="text-white w-8 h-8 " />
        </div>
        <div className="flex justify-start ">
          <p className="text-black font-bold  ml-1 text-sm">
            Experiencia especializada
          </p>
        </div>
      </button>
      {isDesktop && (
        <ReactTooltip
          id="my-tooltip-2"
          place="top"
          content="Contamos con instructore/as con años de experiencia en entornos industriales de alto riesgo."
        />
      )}
    </>
  );
};
