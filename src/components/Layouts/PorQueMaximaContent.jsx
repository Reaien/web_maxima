import React from "react";
import { useState } from "react";
export const PorQueMaximaContent = () => {
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
      <div className="flex mb-3">
        <div className="flex items-center flex-wrap md:w-3/4 animate-fade animate-duration-[2000ms]">
          <a
            onMouseEnter={() => handleMouseEnter("logoSence")}
            onMouseLeave={handleMouseLeave}
            className="mb-3 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-10 font-bold font-overpass">
                Somos OTEC certificada
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                Somos líderes en capacitación y prevención de riesgos
                corporativos, estamos altamente capacitados para entregarte una
                experiencia y enseñanza de la mas alta calidad acreditada por
                SENCE
              </p>
            </div>
          </a>
          <a
            onMouseEnter={() => handleMouseEnter("imagenNuestraDiferencia")}
            onMouseLeave={handleMouseLeave}
            className="mb-3 md:mt-14 md:pb-10 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="md:mt-10 font-bold font-overpass ">
                Nuestra Diferencia
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                Descubre por qué elegir Máxima Formación. Conoce nuestra
                diferencia y cómo destacamos en la capacitación HSEC a través de
                metodologías ágiles.
              </p>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center w-full">
          {/* Renderizado condicional de la imagen segun el state onMouseEnter */}
          {hoveredImage && isWideScreen && (
            <img
              className="md:w-[430px] animate-fade-left rounded-md shadow-lg mt-14"
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
