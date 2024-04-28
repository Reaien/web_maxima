import React from "react";
import { BotonEscuelaRiesgos } from "../Layouts/BotonEscuelaRiesgos";

export const EscuelaRiesgosCriticos = () => {
  return (
    <>
      <section
        className={`grid grid-rows-1 xl:grid-cols-2 mx-auto  xl:px-40 px-10 mt-20 bg-white mb-20 xl:pb-10 shadow-lg justify-center items-center xl:h-[600px] `}
      >
        <div className=" md:w-[600px] ">
          <h4 className="md:text-5xl text-5xl font-overpass md:text-left mt-6 font-bold">
            Escuela de riesgos
            <span className="text-emerald-600"> críticos</span>
          </h4>
          <p className="md:text-left font-overpass mt-12">
            En la Escuela de Riesgos Críticos, nos dedicamos a proporcionar
            formación de alta calidad en Prevención de Riesgos Laborales para
            trabajadores de primera línea, que enfrentan situaciones críticas en
            su día a día laboral. Nuestros cursos presenciales están diseñados
            para equipar a tu equipo con las habilidades y conocimientos
            necesarios para manejar riesgos de manera efectiva y garantizar un
            entorno de trabajo seguro.
          </p>
        </div>
        <div>
          <p className="font-overpass text-lg italic ">
            ¿Por qué elegir la escuela de riesgos críticos?
          </p>
          <div>
            <BotonEscuelaRiesgos />
          </div>
        </div>
      </section>
    </>
  );
};
