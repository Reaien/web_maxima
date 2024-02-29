import React from "react";
import { useState } from "react";
export const BlogContent = () => {
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
            onMouseEnter={() => handleMouseEnter("imagenBlog")}
            onMouseLeave={handleMouseLeave}
            className="mb-3 md:mt-14 md:pb-32 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-11 font-bold font-overpass">
                Inspiración y Conocimiento
              </p>
            </div>
            <div className="text-left mt-5">
              <p className="text-sm">
                Explora nuestro Blog y encuentra inspiración y conocimiento
                sobre prevención de riesgos. Descubre cómo es que podemos
                entregarte una solución moderna e impulsar a mantener tu entorno
                laboral seguro.
              </p>
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center w-full ">
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
