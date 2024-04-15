import React, { useEffect, useState } from "react";
import Oculus from "../../assets/images/oculus.webp";

import { useInView } from "react-intersection-observer";

export const EscuelaVR = () => {
  //creamos hook para observar
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.9, // Se activará cuando al menos el 50% del componente esté visible
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
          className={`grid grid-rows-1 xl:grid-cols-2 mx-auto  xl:px-40 px-10 mt-20 bg-white mb-20 xl:pb-10 shadow-lg justify-center items-center xl:h-[500px] ${isVisible ? "visible animate-fade-right animate-duration-1500" : "invisible"}`}
        >
          <div className=" md:w-[600px] ">
            <h4 className="md:text-5xl text-5xl font-overpass md:text-left mt-6 ">
              Sé parte de nuestra experiencia{" "}
              <span className="text-emerald-600">VR</span>
            </h4>
            <p className="md:text-left font-overpass mt-12">
              Explora un nuevo mundo de aprendizaje seguro con la realidad
              virtual de Máxima Formación! Desde la extinción de incendios hasta
              la gestión de emergencias, nuestra experiencia en realidad virtual
              te preparará para enfrentar cualquier desafío en el lugar de
              trabajo. ¡Descubre la revolución en capacitación en seguridad con{" "}
              <span className="text-emerald-600">Máxima Formación VR</span>
            </p>
          </div>
          <div className="pt-28 animate-bounce animate-infinite animate-duration-[2000ms]">
            <img
              className="w-80 mx-auto shadow-lg border rounded-full"
              src={Oculus}
              alt="Foto Oculus"
            />
          </div>
        </section>
      </section>
    </>
  );
};
