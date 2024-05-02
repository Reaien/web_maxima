import React from "react";
import { Check } from "../icons/Check.jsx";
import caso_empleado from "../../assets/video/caso_empleado.mp4";
export const TestimonioEmpleado = () => {
  return (
    <>
      <section className="grid grid-rows-1 md:grid-cols-2 md:h-[700px] text-center   bg-white items-center mb-20">
        <div className="mt-10 h-auto ml-5">
          {" "}
          <p className="uppercase text-center font-bold font-overpass ">
            Mejora en las <span className="text-emerald-600">habilidades </span>
            y <span className="text-emerald-600">seguridad</span> de tus
            usuarios
          </p>
          <p className="font-bold text-5xl font-overpass mt-12  md:text-center">
            Experiencia de los{" "}
            <span className="text-emerald-600">usuarios</span>
          </p>
          <p className=" font-overpass text-left md:text-center mt-5">
            Explora las habilidad que tus usuarios obtienen con el programa de
            Máxima Formación
          </p>
          <div className="mt-5">
            <p className="font-overpass  mt-2 flex items-center">
              <Check className="text-emerald-600 mr-4 text-4xl w-5" />
              Potencia tus habilidades en prevención de riesgos para contribuir
              a la seguridad y el bienestar en tu entorno laboral.
            </p>
            <p className="font-overpass text-left mt-2 flex items-center">
              <Check className="text-emerald-600 mr-4 text-4xl w-5" />
              Desarrolla tu liderazgo en seguridad para ser un ejemplo y motivar
              a tus compañeros en la adopción de prácticas seguras.
            </p>
            <p className="font-overpass text-left mt-2 flex items-center">
              <Check className="text-emerald-600 mr-4 text-4xl w-5" />
              Aprende de manera efectiva con proyectos y experiencias inmersivas
              que te permitan aplicar lo aprendido en tu día laboral.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <video className="w-[800px] h-[500px] border mx-5" controls>
            <source src={caso_empleado} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};
