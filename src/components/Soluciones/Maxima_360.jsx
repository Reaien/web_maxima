import React from "react";
import Lego from "../../assets/images/lego-serious-play5.webp";

export const Maxima_360 = () => {
  return (
    <>
      <section
        className={`grid grid-rows-1 xl:grid-cols-2 mx-auto  xl:px-40 px-10 mt-20 bg-white mb-20 xl:pb-10 shadow-lg justify-center items-center xl:h-[600px] `}
      >
        <div>
          <p className="font-overpass text-lg italic mt-5">LEGO Serious Play</p>

          <img src={Lego} className="w-[500px]" alt="lego" />
        </div>
        <div className=" md:w-[600px] ">
          <h4 className="md:text-5xl text-5xl font-overpass md:text-left mt-6 font-bold">
            Máxima Formación
            <span className="text-emerald-600"> 360°</span>
          </h4>
          <p className="md:text-left font-overpass mt-12">
            Nuestro equipo en Máxima Formación 360° redefine cómo las empresas
            abordan HSEQ, combinando Agile Learning y gamificación LEGO Serious
            Play para mejorar la retención del conocimiento y la aplicación
            práctica de los conceptos aprendidos.
          </p>
          <p className="md:text-left font-overpass mt-12">
            Maxima Formación 360° ofrece una experiencia de aprendizaje
            inmersiva y altamente interactiva, desafiando a los participantes a
            resolver problemas del mundo real mediante enfoques ágiles y
            prácticas de HSEQ. A través de la gamificación, convertimos la
            capacitación en una experiencia emocionante y colaborativa,
            permitiendo a los equipos competir y aprender de manera
            significativa. Nuestro enfoque integral capacita a los participantes
            para abordar los desafíos de seguridad y calidad con confianza,
            transformando la forma en que las empresas enfrentan la formación en
            HSEQ y generando un cambio cultural positivo.
          </p>
        </div>
      </section>
    </>
  );
};
