import React from "react";

export const KPI = () => {
  return (
    <>
      <section className="grid grid-rows-1 md:grid-cols-3 items-center justify-center mx-auto max-w-auto w-11/12  md:h-[210px] md:bg-gradient-to-t md:from-gray-100/80 md:via-gray-100 md:to-gray-200 mt-14 shadow-md rounded-2xl">
        <div className="mx-auto pl-5 max-md:h-[100px] max-md:pt-5 max-md:border-b-2">
          <span className="font-extrabold font-overpass text-2xl xl:text-4xl">
            180+{" "}
          </span>
          <span className="text-emerald-500 font-overpass text-2xl  md:text-3xl  to-white">
            Empleados certificados
          </span>
          <span className="font-overpass text-2xl md:text-4xl text-transparent md:text-gray-500 ml-16">
            |
          </span>
        </div>
        <div className="mx-auto max-md:h-[100px] pl-5 max-md:pt-5 max-md:border-b-2">
          <span className="font-extrabold font-overpass text-2xl xl:text-4xl">
            30+{" "}
          </span>
          <span className="text-emerald-500 font-overpass text-2xl md:text-3xl  to-white">
            Empresas satisfechas
          </span>
          <span className="font-overpass md:text-4xl text-transparent md:text-gray-500 ml-14">
            |
          </span>
        </div>
        <div className="mx-auto max-md:h-[100px] max-md:pl-6 max-md:pt-5 ">
          <span className="font-extrabold font-overpass text-2xl md:text-4xl xl:text-4xl">
            73%{" "}
          </span>
          <span className="text-emerald-500 font-overpass text-2xl md:text-3xl to-white">
            Mayor prevención en accidentes
          </span>
        </div>
      </section>
    </>
  );
};
