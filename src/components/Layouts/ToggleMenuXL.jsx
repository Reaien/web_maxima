import React from "react";
import { SolucionesContent } from "./SolucionesContent.jsx";
import { CasosDeExitoContent } from "./CasosDeExitoContent.jsx";
import { PorQueMaximaContent } from "./PorQueMaximaContent.jsx";

export const ToggleMenuXL = ({ menuVisible, setMenuVisible, menuTitle }) => {
  let contentComponente;
  if (menuTitle === "Soluciones") {
    contentComponente = <SolucionesContent />;
  } else if (menuTitle === "Casos de éxito") {
    contentComponente = <CasosDeExitoContent />;
  } else if (menuTitle === "¿Por qué Máxima?") {
    contentComponente = <PorQueMaximaContent />;
  }

  return (
    <>
      <section>
        <div
          className={` ${menuVisible ? "" : "hidden"} animate-flip-down animate-duration-[800ms] flex justify-center md:border-t-[1px] border-t-zinc-600/20 absolute z-10 md:z-20 w-full`}
        >
          <div className=" px-4 md:px-10 md:w-5/6 bg-white md:h-[500px] rounded-b-3xl shadow-lg">
            <div className="flex items-center md:justify-center md:mt-2 h-14">
              <p className=" text-2xl font-normal font-overpass flex md:justify-center animate-fade animate-duration-[2000ms]">
                {menuTitle}
              </p>
            </div>
            <div className="flex items-center md:justify-center">
              <p className=" border-b  w-4/6 border-black/20 "></p>
            </div>
            {contentComponente}
          </div>
        </div>
      </section>
    </>
  );
};
