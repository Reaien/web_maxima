import React from "react";
import { CertificateIcon } from "../../icons/CertificateIcon";

export const BotonEscuelaRiesgos_04 = () => {
  return (
    <>
      <button className="w-[300px] h-[50px] bg-slate-200  justify-start flex items-center rounded-lg shadow-lg">
        <div className=" bg-sky-500 px-4 h-full flex items-center justify-center rounded-l-lg shadow-lg">
          <CertificateIcon className="text-white w-8 h-8 " />
        </div>
        <div className="flex justify-start ">
          <p className="text-black font-bold  ml-1 text-sm">
            Certificación reconocida
          </p>
        </div>
      </button>
    </>
  );
};
