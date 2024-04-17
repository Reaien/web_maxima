import React from "react";
import { useState, useEffect } from "react";
import logo_vr_1 from "../../assets/images/logo_vr_1.webp";
import logo_vr_2 from "../../assets/images/logo_vr_2.webp";
import logo_vr_3 from "../../assets/images/logo_vr_3.webp";
import logo_vr_4 from "../../assets/images/logo_vr_4.webp";
import logo_vr_5 from "../../assets/images/logo_vr_5.webp";
import { useInView } from "react-intersection-observer";
export const Experiencias = () => {
  //Boton para volver a las cardspricing
  const scrollToPricingCard = () => {
    const contactoContent = document.getElementById("cardPricing");
    contactoContent.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  //creamos hook para observar
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Se activará cuando al menos el 50% del componente esté visible
  });

  // Actualiza el estado cuando el componente esté visible en la pantalla
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <>
      <section>
        <div className="grid grid-rows-1 items-center justify-center text-center">
          <p className="font-bold text-5xl font-overpass text-center">
            Simulador de escuela de riesgos
          </p>
        </div>
        <section
          ref={ref}
          className={`grid grid-rows-2 mt-12 max-md:-mb-96 2xl:-mb-32  animate-fade animate-duration-[1000ms]}`}
        >
          {/* primera fila de experiencias */}
          <div className="mt-5">
            <p className="font-bold md:text-7xl text-5xl  font-overpass text-center">
              <span className="text-emerald-600 ">Experiencias VR</span>
            </p>
            {/* figuras */}
            <div
              ref={ref}
              className="grid grid-rows-1 md:grid-cols-3 text-center mt-10 justify-center"
            >
              <div
                className={`max-md:mb-5 max-sm:mt-20 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[1000ms] animate-ease-out" : "invisible"} `}
              >
                <p className="font-semibold text-2xl font-overpass">
                  Trabajo en alturas
                </p>
                <img
                  className="md:w-80 drop-shadow-lg mt-3"
                  src={logo_vr_1}
                  alt="rombo1"
                />
              </div>
              <div
                className={`max-md:mb-5 max-sm:mt-20 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[1500ms] animate-ease-out" : "invisible"} `}
              >
                <p className="font-semibold text-2xl font-overpass">
                  Interacción hombre máquina
                </p>
                <img
                  className="md:w-80 drop-shadow-lg mt-3"
                  src={logo_vr_2}
                  alt="rombo1"
                />
              </div>
              <div
                className={`max-md:mb-5 max-sm:mt-20 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[2000ms] animate-ease-out" : "invisible"} `}
              >
                <p className="font-semibold text-2xl font-overpass">
                  Bloqueo Loto
                </p>
                <img
                  className="w-80 drop-shadow-lg mt-3"
                  src={logo_vr_3}
                  alt="rombo1"
                />
              </div>
            </div>
          </div>
          {/* segunda fila de experiencias */}
          <div className="grid md:grid-cols-2 items-center justify-center text-center max-md:h-[100px] md:justify-self-center xl:-mt-52">
            <div
              className={`xl:pr-32 max-sm:mt-32  mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[2500ms] animate-ease-out" : "invisible"} `}
            >
              <p className="font-semibold text-2xl font-overpass">
                Espacios confinados
              </p>
              <img
                className="w-80 drop-shadow-lg mt-3"
                src={logo_vr_4}
                alt="rombo1"
              />
            </div>{" "}
            <div
              className={`xl:pl-32 max-sm:mt-32 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[3000ms] animate-ease-out" : "invisible"} `}
            >
              <p className="font-semibold text-2xl font-overpass">
                Uso de extintores
              </p>
              <img
                className="w-80 drop-shadow-lg mt-3"
                src={logo_vr_5}
                alt="rombo1"
              />
            </div>
          </div>
        </section>
        <div className="flex md:justify-end justify-center  md:mr-10">
          <button
            onClick={() => scrollToPricingCard()}
            className="z-50 cursor-pointer p-0 py-1 px-7 rounded bg-emerald-500 transition-all duration-400 font-bold text-white font-custom"
          >
            Explora todos nuestros cursos
          </button>
        </div>
      </section>
    </>
  );
};
