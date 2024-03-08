import React from "react";
import { BsCheck2All } from "react-icons/bs";

export const TestimonioEmpleado = () => {
  return (
    <>
      <section className="grid grid-rows-1 md:grid-cols-2 md:h-[700px] text-center   bg-white items-center mb-20">
        <div className="mt-10 h-auto">
          {" "}
          <p className="uppercase text-center font-bold font-overpass ">
            Mejora en las <span className="text-emerald-500">habilidades </span>
            y <span className="text-emerald-500">seguridad</span> de tus
            empleados
          </p>
          <p className="font-bold text-5xl font-overpass mt-12  md:text-center">
            Experiencia de los{" "}
            <span className="text-emerald-500">empleados</span>
          </p>
          <p className=" font-overpass md:text-center mt-5">
            Explora las habilidad que tus empleados obtienen con el programa de
            Máxima Formación
          </p>
          <div className="mt-5">
            <p className="font-overpass  mt-2 flex items-center">
              <BsCheck2All className="text-emerald-500 mr-4 text-4xl" />
              Potencia tus habilidades en prevención de riesgos para contribuir
              a la seguridad y el bienestar en tu entorno laboral.
            </p>
            <p className="font-overpass text-left mt-2 flex items-center">
              <BsCheck2All className="text-emerald-500 mr-4 text-4xl" />
              Desarrolla tu liderazgo en seguridad para ser un ejemplo y motivar
              a tus compañeros en la adopción de prácticas seguras.
            </p>
            <p className="font-overpass text-left mt-2 flex items-center">
              <BsCheck2All className="text-emerald-500 mr-4 text-4xl" />
              Aprende de manera efectiva con proyectos y experiencias inmersivas
              que te permitan aplicar lo aprendido en tu día laboral.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center mt-10 h-auto">
          <iframe
            className="w-5/6 aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Fhi9dW-CKVPdp8sL"
          ></iframe>
        </div>
      </section>
    </>
  );
};
