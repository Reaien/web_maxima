import React from "react";

import { InnovacionIcon } from "../icons/InnovacionIcon";
import { SeguridadIcon } from "../icons/SeguridadIcon";
import { ExperienciaIcon } from "../icons/ExperienciaIcon";

const NuestraMision = () => {
  return (
    <>
      <section className="grid grid-rows-1 md:grid-cols-3 text-center mb-20">
        <div className="mt-10  md:px-16 px-10">
          <div className="w-[190px] h-[180px] bg-amber-400 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade-up md:animate-once md:animate-duration-[2000ms]">
            <InnovacionIcon className="mx-auto text-8xl text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 animate-fade md:animate-once md:animate-duration-[5000ms]">
            Innovación
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 animate-fade md:animate-once md:animate-duration-[5000ms]">
            En Máxima Formación, la innovación es nuestro motor. exploramos
            nuevas tecnologías y metodologías para mejorar nuestros servicios y
            proporcionar soluciones de vanguardia en prevención de riesgos,
            desde la implementación de simulaciones de realidad virtual hasta el
            desarrollo de programas de capacitación personalizados.
          </p>
        </div>
        <div className="mx-auto mt-10 md:animate-fade-up md:animate-once md:animate-duration-[3000ms]  px-16">
          <div className="w-[190px] h-[180px] bg-emerald-500 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade md:animate-once md:animate-duration-[3000ms]">
            <SeguridadIcon className="mx-auto text-8xl text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 md:animate-once md:animate-duration-[5000ms]">
            Seguridad
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 md:animate-once md:animate-duration-[5000ms]">
            La seguridad es nuestra prioridad número uno. En Máxima Formación,
            nos dedicamos a promover una cultura de seguridad en todos los
            ámbitos laborales. Nuestros programas de capacitación están
            diseñados para equipar a los empleados con las habilidades y
            conocimientos necesarios para identificar y mitigar riesgos.
          </p>
        </div>
        <div className="mx-auto mt-10 animate-fade animate-once  px-16">
          <div className="w-[190px] h-[180px] bg-blue-500 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade-up md:animate-once md:animate-duration-[4000ms]">
            <ExperienciaIcon className="mx-auto text-8xl text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 animate-fade-up md:animate-once md:animate-duration-[5000ms]">
            Experiencia
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 animate-fade-up md:animate-once  md:animate-duration-[5000ms]">
            Nuestra experiencia en la industria nos respalda. Con años de
            experiencia en capacitación en prevención de riesgos, hemos
            perfeccionado nuestros métodos para ofrecer una experiencia de
            aprendizaje efectiva y significativa. Nos enorgullecemos de brindar
            programas de capacitación de alta calidad.
          </p>
        </div>
      </section>
    </>
  );
};

export default NuestraMision;
