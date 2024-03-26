import React from "react";
import liston from "../../assets/liston.svg";

export const CardPricing = ({ colorListon, tituloPlan, subTituloPlan }) => {
  return (
    <div className="relative  md:w-[410px] w-auto h-[600px] bg-white mx-auto px-10 border rounded-xl shadow-lg mt-7 text-center font-overpass">
      {/* Nuevo SVG para el listón */}
      <svg
        className="absolute top-0 right-0 w-16 h-20"
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L100 0L0 120Z" fill={colorListon} />
      </svg>
      <p className="font-bold  text-5xl mt-10 mb-4 px-10">
        Plan <span className="text-emerald-600">{tituloPlan}</span>
      </p>
      <p className="text-gray-600 px-8">{subTituloPlan}</p>
      <button className="bg-emerald-500 px-6 py-6 text-white font-bold text-xl hover:bg-emerald-600 mt-5 rounded-sm">
        Comienza ahora
      </button>
      <div className="border-t-2 mt-10">
        <p className="text-left text-sm mt-10 mb-3 font-bold">
          Lo que encontraras en nuestro plan:
        </p>
        <ul className="marker:text-emerald-600 ml-4 list-disc text-left">
          <li className="text-gray-600 text-sm">
            Prevención en trabajos electricos en altura
          </li>
          <li className="text-gray-600 text-sm">Manejo y uso de extintores</li>
          <li className="text-gray-600 text-sm">...</li>
        </ul>
      </div>
    </div>
  );
};
