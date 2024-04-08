import React, { useEffect, useState } from "react";
import Oculus from "../../assets/oculus.webp";
import logo_vr_1 from "../../assets/logo_vr_1.webp";
import logo_vr_2 from "../../assets/logo_vr_2.webp";
import logo_vr_3 from "../../assets/logo_vr_3.webp";
import logo_vr_4 from "../../assets/logo_vr_4.webp";
import logo_vr_5 from "../../assets/logo_vr_5.webp";
import { useInView } from "react-intersection-observer";

export const EscuelaVR = () => {
  //creamos hook para observar
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.02, // Se activará cuando al menos el 50% del componente esté visible
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
        <section
          ref={ref}
          className={`grid grid-rows-1 xl:grid-cols-2 mx-auto  xl:px-40 px-10 mt-20 bg-white mb-20 xl:pb-10 shadow-lg justify-center items-center xl:h-[500px] ${isVisible ? "visible animate-fade-right animate-duration-700" : "invisible"}`}
        >
          <div className=" md:w-[600px] ">
            <h4 className="md:text-5xl text-5xl font-overpass md:text-left mt-6 ">
              Sé parte de nuestra experiencia{" "}
              <span className="text-emerald-500">VR</span>
            </h4>
            <p className="md:text-left font-overpass mt-12">
              Explora un nuevo mundo de aprendizaje seguro con la realidad
              virtual de Máxima Formación! Desde la extinción de incendios hasta
              la gestión de emergencias, nuestra experiencia en realidad virtual
              te preparará para enfrentar cualquier desafío en el lugar de
              trabajo. ¡Descubre la revolución en capacitación en seguridad con{" "}
              <span className="text-emerald-500">Máxima Formación VR</span>
            </p>
          </div>
          <div className="pt-28 animate-bounce animate-infinite animate-duration-[4000ms]">
            <img
              className="w-80 mx-auto shadow-lg border rounded-full"
              src={Oculus}
              alt="Foto Oculus"
            />
          </div>
        </section>
        <div className="grid grid-rows-1 items-center justify-center text-center">
          <p className="font-bold text-5xl font-overpass text-center">
            Simulador de escuela de riesgos
          </p>
        </div>
        <section
          className={`grid grid-rows-2 mt-12 max-md:-mb-80 2xl:-mb-32  animate-fade animate-duration-[1000ms]}`}
        >
          {/* primera fila de experiencias */}
          <div className="mt-5">
            <p className="font-bold md:text-7xl text-5xl  font-overpass text-center">
              <span className="text-emerald-500 ">Experiencias VR</span>
            </p>
            {/* figuras */}
            <div
              ref={ref}
              className="grid grid-rows-1 md:grid-cols-3 text-center mt-10 justify-center"
            >
              <div
                className={`max-md:mb-5 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[1500ms] animate-ease-out" : "invisible"} `}
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
                className={`max-md:mb-5 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[2000ms] animate-ease-out" : "invisible"} `}
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
                className={`max-md:mb-5 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[2500ms] animate-ease-out" : "invisible"} `}
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
              className={`xl:pr-32 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[3000ms] animate-ease-out" : "invisible"} `}
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
              className={`xl:pl-32 mx-auto ${isVisible ? "visible animate-fade animate-once animate-duration-[3000ms] animate-delay-[3500ms] animate-ease-out" : "invisible"} `}
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
      </section>
    </>
  );
};
