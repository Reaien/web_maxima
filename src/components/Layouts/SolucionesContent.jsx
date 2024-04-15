import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SolucionesContent = () => {
  const navigate = useNavigate();
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  //fncion para scroll a componente CardPricing situado en /soluciones
  const scrollToPricingContent = () => {
    navigate("/soluciones");
    setTimeout(() => {
      const blogContent = document.getElementById("cardPricing");
      blogContent.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 100);
  };

  //fncion para scroll a componente EscuelaVR situado en /soluciones
  const scrollToEscuelaVRContent = () => {
    navigate("/soluciones");
    setTimeout(() => {
      const blogContent = document.getElementById("escuelaVR");
      blogContent.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 100);
  };

  //fncion para scroll a componente Experiencias situado en /soluciones
  const scrollToExperienciasContent = () => {
    navigate("/soluciones");
    setTimeout(() => {
      const blogContent = document.getElementById("experiencias");
      blogContent.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 100);
  };

  const isWideScreen = window.innerWidth > 768;
  return (
    <>
      {/* container armado de toggleMenuDesktop */}
      <div className="flex">
        <div className="flex items-center flex-wrap md:w-3/4 animate-fade animate-duration-[2000ms]">
          <button
            onClick={() => scrollToPricingContent()}
            onMouseEnter={() => handleMouseEnter("imagenSuscripcion")}
            onMouseLeave={handleMouseLeave}
            className="mb-3 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-10 font-bold font-overpass">Suscripción</p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                Explora nuestras suscripciones y descubre cómo pueden potenciar
                tu crecimiento y éxito.
              </p>
            </div>
          </button>

          <button
            onClick={() => scrollToEscuelaVRContent()}
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
          </button>
          <button
            onClick={() => scrollToExperienciasContent()}
            onMouseEnter={() => handleMouseEnter("imagenVR")}
            onMouseLeave={handleMouseLeave}
            className="mb-3 hover:text-emerald-600 hover:underline"
            href="#"
          >
            <div>
              <p className="mt-10 font-bold font-overpass ">
                Simulador de escuela de riesgos
              </p>
            </div>
            <div className="text-left">
              <p className="text-sm">
                "Sumérgete en la experiencia única de nuestra Escuela de Riesgos
                con Realidad Virtual y descubre una forma innovadora y
                vanguardista de formación."
              </p>
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center w-full">
          {/* Renderizado condicional de la imagen segun el state onMouseEnter */}
          {hoveredImage && isWideScreen && (
            <img
              className="md:w-[530px] animate-fade-left rounded-md shadow-lg"
              src={`../src/assets/images/${hoveredImage}.webp`}
              alt="imagen"
            />
          )}
        </div>
      </div>
      {/* fin elemento */}
    </>
  );
};
