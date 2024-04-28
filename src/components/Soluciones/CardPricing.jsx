import React from "react";

export const CardPricing = ({
  colorListon,
  tituloPlan,
  cantidadParticipantes,
  precioOld,
  precioNuevo,
  textoBoton,
  lista1,
  lista2,
  lista3,
  lista4,
  lista5,
  lista6,
  lista7,
  externalLink,
}) => {
  const redirectButtonLink = () => {
    window.open(externalLink, "_blank");
  };
  return (
    <>
      <div className="relative  md:w-[410px] w-auto md:h-[600px] h-[700px] bg-white mx-auto px-10 border rounded-xl shadow-lg mt-7 text-center font-overpass">
        {/* Nuevo SVG para el listón */}
        <svg
          className="absolute top-0 right-0 w-16 h-20"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L100 0L0 120Z" fill={colorListon} />
        </svg>
        <p className="font-bold  text-5xl mt-10 mb-4 px-10">Plan</p>
        <p className="text-emerald-600 font-bold text-4xl">{tituloPlan}</p>
        <div className="mt-10">
          <div className="border-b-2 pb-5">
            <p className="text-left text-sm mt-10">{cantidadParticipantes}</p>
            <p className="text-left text-sm line-through">{precioOld}</p>
            <p className="text-left text-sm">
              <span className="text-bold text-red-700">50% OFF </span>
              {precioNuevo}
            </p>
          </div>
          <p className="text-left text-sm mt-10 mb-3 font-bold">
            Lo que encontrarás:
          </p>
          <div className="ml-4 list-disc text-left h-[150px]">
            <p className="text-gray-600 text-sm">{lista1}</p>
            <p className="text-gray-600 text-sm">{lista2}</p>
            <p className="text-gray-600 text-sm">{lista3}</p>
            <p className="text-gray-600 text-sm">{lista4}</p>
            <p className="text-gray-600 text-sm">{lista5}</p>
            <p className="text-gray-600 text-sm">{lista6}</p>
            <p className="text-gray-600 text-sm">{lista7}</p>
          </div>
        </div>
        <button
          onClick={redirectButtonLink}
          className="bg-emerald-500 px-12 py-3 text-white font-bold text-xl hover:bg-emerald-600 mt-5 rounded-sm transition-all duration-400 "
        >
          {textoBoton}
        </button>
      </div>
    </>
  );
};
