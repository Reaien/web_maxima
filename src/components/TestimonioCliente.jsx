import React from "react";
import { BsCheck2All } from "react-icons/bs";

export const TestimonioCliente = () => {
  return (
    <>
      <section className="grid grid-rows-1 md:grid-cols-2 md:h-[700px] text-center mx-5 mb-10 items-center">
        <div className="flex items-start justify-center mt-10 h-auto">
          <iframe
            className="w-5/6 aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Fhi9dW-CKVPdp8sL"
          ></iframe>
        </div>
        <div className="mt-10 h-auto">
          {" "}
          <p className="uppercase text-left font-bold font-overpass md:w-3/4">
            Conoce nuestras historias de{" "}
            <span className="text-emerald-500">transformación </span>e{" "}
            <span className="text-emerald-500">impulso</span> de las empresas
          </p>
          <p className="font-bold text-6xl font-overpass mt-12 md:w-4/4 md:text-left">
            Testimonios de nuestros{" "}
            <span className="text-emerald-500">clientes</span>
          </p>
          <p className="md:w-3/4  font-overpass md:text-left mt-5">
            Descubre como el programa de Máxima Formación ha ayudado a
            solucionar los requerimientos de este y más clientes de otras
            empresas.
          </p>
          <div className="mt-5">
            <p className="font-overpass text-left mt-2 flex items-center">
              <BsCheck2All className="text-emerald-500 mr-4 text-4xl" />
              Mejora las competencias necesarias para impulsar la seguridad
              laboral y acelerar la transformación en tu empresa.
            </p>
            <p className="font-overpass text-left mt-2 flex items-center">
              <BsCheck2All className="text-emerald-500 mr-4 text-4xl" />
              Aprende y aplica rápidamente las habilidades en prevención de
              riesgos a través de proyectos prácticos y aprendizaje inmersivo.
            </p>
            <p className="font-overpass text-left mt-2 flex items-center">
              <BsCheck2All className="text-emerald-500 mr-4 text-4xl" />
              Utiliza nuestra metodología de vanguardia en enseñanza y
              simulación para impulsar las habilidades de tus empleados.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
