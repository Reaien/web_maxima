import React from "react";
import { ExperienceIcon } from "../../icons/ExperienceIcon";

export const BotonEscuelaRiesgos_02 = () => {
  return (
    <>
      <button className="w-[300px] h-[50px] bg-slate-200  justify-start flex items-center rounded-lg shadow-lg">
        <div className=" bg-emerald-600 px-4 h-full flex items-center justify-center rounded-l-lg shadow-lg">
          <ExperienceIcon className="text-white w-8 h-8 " />
        </div>
        <div className="flex justify-start ">
          <p className="text-black font-bold  ml-1 text-sm">
            Experiencia especializada
          </p>
        </div>
      </button>
    </>
  );
};
