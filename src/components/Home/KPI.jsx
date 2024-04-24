import React from "react";

export const KPI = () => {
  return (
    <>
      <section className="grid grid-rows-1 md:grid-cols-3 items-center justify-center mx-auto max-w-auto w-11/12  md:h-[210px] md:bg-gradient-to-t md:from-gray-100/80 md:via-gray-100 md:to-gray-200 mt-14 shadow-md rounded-2xl">
        <div className="mx-auto  max-md:h-[100px] max-md:p-5 max-md:border-b-2">
          <span className="font-extrabold font-overpass text-xl xl:text-2xl">
            + de 10.000{" "}
          </span>
          <span className="text-emerald-600 font-overpass text-xl xl:text-2xl to-white">
            Personas capacitadas
          </span>
        </div>
        <div className="mx-auto max-md:h-[100px] max-md:p-5 max-md:border-b-2">
          <span className="font-extrabold font-overpass text-xl xl:text-2xl">
            + de 100{" "}
          </span>
          <span className="text-emerald-600 font-overpass text-xl xl:text-2xl to-white">
            Empresas han maximizados formación
          </span>
        </div>
        <div className="mx-auto max-md:h-[100px]  max-md:p-6 ">
          <span className="font-extrabold font-overpass max-md:text-sm text-xl ">
            + del 95%{" "}
          </span>
          <span className="text-emerald-600 font-overpass max-md:text-sm text-xl to-white">
            de nuestros clientes han reconocido un impacto positivo en seguridad
            y salud laboral
          </span>
        </div>
      </section>
    </>
  );
};
