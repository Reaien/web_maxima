import React from "react";
import { CertificateIcon } from "../../icons/CertificateIcon";
import { Tooltip as ReactTooltip } from "react-tooltip";
export const BotonEscuelaRiesgos_04 = () => {
  const isDesktop = window.innerWidth > 1024;
  return (
    <>
      <button
        className="w-[300px] h-[50px] bg-slate-200  justify-start flex items-center rounded-lg shadow-lg"
        data-tooltip-id={isDesktop ? `my-tooltip-4` : ""}
      >
        <div className=" bg-sky-500 px-4 h-full flex items-center justify-center rounded-l-lg shadow-lg">
          <CertificateIcon className="text-white w-8 h-8 " />
        </div>
        <div className="flex justify-start ">
          <p className="text-black font-bold  ml-1 text-sm">
            Certificación reconocida
          </p>
        </div>
      </button>
      {isDesktop && (
        <ReactTooltip
          id="my-tooltip-4"
          place="top"
          content="Al completar nuestros cursos, los participantes obtienen una certificación reconocida (OTEC) que valida su capacitación en riesgos críticos."
        />
      )}
    </>
  );
};
