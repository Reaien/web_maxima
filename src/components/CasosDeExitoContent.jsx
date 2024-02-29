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
        <div className="flex items-center flex-wrap md:w-3/4 animate-fade animate-duration-[2000ms]">
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
            className="mb-3 hover:text-emerald-600 hover:underline"
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
          <a
            onMouseEnter={() =>
              handleMouseEnter("imagenResultadosSobresalientes")
            }
            onMouseLeave={handleMouseLeave}
            className="mb-3 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-10 font-bold font-overpass ">
                Resultados Sobresalientes
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                "Sumérgete en la experiencia de empresas que han logrado
                resultados sobresalientes con nuestra ayuda. Explora nuestros
                casos de éxito y descubre el potencial de tu negocio."
              </p>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center w-full">
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
