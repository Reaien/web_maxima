import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SolucionesContent = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

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
            onMouseEnter={() => handleMouseEnter("imagenSuscripcion")}
            onMouseLeave={handleMouseLeave}
            className="mb-3 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <Link to="/soluciones">
              <div>
                <p className="mt-10 font-bold font-overpass">Suscripción</p>
              </div>
              <div className="text-left">
                <p className="text-sm">
                  Explora nuestras suscripciones y descubre cómo pueden
                  potenciar tu crecimiento y éxito.
                </p>
              </div>
            </Link>
          </a>
          <a
            onMouseEnter={() => handleMouseEnter("imagenCurso")}
            onMouseLeave={handleMouseLeave}
            className="mb-3 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-10 font-bold font-overpass ">
                Programa de formación de alto impacto
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                "Descubre nuestro programa de formación de alto impacto y
                transforma la trayectoria profesional de tus empleados."
              </p>
            </div>
          </a>
          <a
            onMouseEnter={() => handleMouseEnter("imagenVR")}
            onMouseLeave={handleMouseLeave}
            className="mb-3 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-10 font-bold font-overpass ">
                Escuela de riesgos críticos con Realidad Virtual
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                "Sumérgete en la experiencia única de nuestra Escuela de Riesgos
                con Realidad Virtual y descubre una forma innovadora y
                vanguardista de formación."
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
