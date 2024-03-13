import React from "react";
import { useState } from "react";

export const CasosDeExitoContent = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const windowWidth = window.innerWidth;

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const isWideScreen = window.innerWidth > 768;

  return (
    <>
      {/* container armado de toggleMenuDesktop */}
      <div className="flex">
        <div className="flex items-center flex-wrap md:w-3/4 animate-fade animate-duration-[2000ms] md:mt-10">
          <a
            onMouseEnter={() =>
              handleMouseEnter("imagenHistoriaDeTransformacion")
            }
            onMouseLeave={handleMouseLeave}
            className="mb-3 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-10 font-bold font-overpass">
                Historias de Transformación
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                "Explora nuestros casos de éxito y descubre cómo hemos ayudado a
                empresas a superar desafíos y alcanzar sus metas."
              </p>
            </div>
          </a>
          <a
            onMouseEnter={() =>
              handleMouseEnter("imagenInspiracionEmpresarial")
            }
            onMouseLeave={handleMouseLeave}
            className="mb-3 md:mt-14 md:pb-10 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-10 font-bold font-overpass ">
                Inspiración Empresarial
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                "Descubre cómo nuestros servicios han transformado empresas
                reales. Conoce nuestros casos de éxito y encuentra inspiración
                para tu propio camino hacia el éxito."
              </p>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center w-96">
          {/* Renderizado condicional de la imagen segun el state onMouseEnter */}
          {hoveredImage && isWideScreen && (
            <img
              className="md:w-[530px] animate-fade-left rounded-md shadow-lg"
              src={`../src/assets/${hoveredImage}.webp`}
              alt="imagen"
            />
          )}
        </div>
      </div>
      {/* fin elemento */}
    </>
  );
};
