import React from "react";
import liston from "../../assets/liston.svg";

export const CardPricing = () => {
  return (
    <div className="relative  md:w-[410px] w-auto h-[600px] bg-white mx-auto px-10 border rounded-xl shadow-lg mt-7 text-center font-overpass">
      {/* Nuevo SVG para el listón */}
      <svg
        className="absolute top-0 right-0 w-16 h-20"
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Inserta el código SVG de tu nuevo listón aquí */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76.6723 5.84888C80.8339 6.66568 85.3037 7.08433 90.0799 7.08433C93.6279 7.08433 96.9792 6.83989 100 6.39336V40.8784C97.7995 41.5626 95.1556 42.5 92.0781 42.5C85.5281 42.5 79.9959 40.2425 76.6723 37.2636C73.3487 40.2425 67.8165 42.5 61.2666 42.5C54.7167 42.5 49.1845 40.2425 45.8609 37.2636C42.5373 40.2425 37.0051 42.5 30.4552 42.5C24.9052 42.5 19.373 40.2425 16.0494 37.2636C12.7258 40.2425 7.19363 42.5 0.643669 42.5V7.33764C5.4199 7.08433 9.88966 6.66568 14.0513 5.84888C17.2135 1.17453 21.7712 -2.15505e-05 26.6402 -2.15505e-05C31.5091 -2.15505e-05 36.0668 1.17453 39.229 5.84888C43.3886 6.66568 47.8584 7.08433 52.6346 7.08433C57.106 7.08433 61.5745 6.66568 65.7337 5.84888C68.8959 1.17453 73.4536 -2.15505e-05 78.3225 -2.15505e-05C80.3226 -2.15505e-05 82.2225 0.147858 84.0101 0.422992C78.4485 3.26074 76.303 5.51238 76.6723 5.84888Z"
          fill="#06B6D4"
        />
      </svg>
      <p className="font-bold  text-5xl mt-10 mb-4 px-10">
        Plan <span className="text-emerald-600">Máxima</span>
      </p>
      <p className="text-gray-600 px-8">
        Plan para empresas enfocado en la seguridad y prevención de riesgos
        experiencia y acceso a material de manera online.
      </p>
      <button className="bg-emerald-500 px-6 py-6 text-white font-bold text-xl hover:bg-emerald-600 mt-5">
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
          <li className="text-gray-600 text-sm">hola</li>
        </ul>
      </div>
    </div>
  );
};
