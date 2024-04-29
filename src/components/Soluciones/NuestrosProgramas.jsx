import React from "react";
import { InnovacionIcon } from "../icons/InnovacionIcon";
import { SeguridadIcon } from "../icons/SeguridadIcon";
import { ExperienciaIcon } from "../icons/ExperienciaIcon";

export const NuestrosProgramas = () => {
  return (
    <>
      <section className="flex justify-center mx-auto font-bold font-overpass text-5xl md:text-7xl">
        Nuestros programas
      </section>
      <section className="grid grid-rows-1 md:grid-cols-3 text-center mb-20">
        <div className="mt-10  md:px-16 px-10">
          <div className="w-[60px] h-[60px] bg-amber-400 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade-up md:animate-once md:animate-duration-[2000ms]">
            <InnovacionIcon className="mx-auto w-[60px] h-[60px] text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 animate-fade md:animate-once md:animate-duration-[5000ms]">
            Seguridad laboral
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 animate-fade md:animate-once md:animate-duration-[5000ms]">
            Trabajo en altura física, Aislación y bloqueo, Riesgos eléctricos,
            Herramientas energizadas, Espacios confinados, Montaje de Andamios,
            Postación eléctrica, Sustancias Peligrosas, ICAM, EVITA y más.
          </p>
        </div>
        <div className="mx-auto mt-10 md:animate-fade-up md:animate-once md:animate-duration-[3000ms]  px-16">
          <div className="w-[60px] h-[60px] bg-emerald-500 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade md:animate-once md:animate-duration-[3000ms]">
            <SeguridadIcon className="mx-auto w-[60px] h-[60px] text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 md:animate-once md:animate-duration-[5000ms]">
            Emergencias
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 md:animate-once md:animate-duration-[5000ms]">
            Uso de extintores, Primeros Auxilios, Uso de DEA, Formación de
            Brigada de Emergencias en diferentes escenarios (Mineria,
            Industrial, Construcción, Puerto) y más.
          </p>
        </div>
        <div className="mx-auto mt-10 animate-fade animate-once  px-16">
          <div className="w-[60px] h-[60px] bg-blue-500 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade-up md:animate-once md:animate-duration-[4000ms]">
            <ExperienciaIcon className="mx-auto w-[60px] h-[60px] text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 animate-fade-up md:animate-once md:animate-duration-[5000ms]">
            Salud Ocupacional
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 animate-fade-up md:animate-once  md:animate-duration-[5000ms]">
            Hipobaria Intermitente Crónica, PREXOR, PLANESI, PSICOSOCIAL entre
            otros
          </p>
        </div>
        <div className="mx-auto mt-10 animate-fade animate-once  px-16">
          <div className="w-[60px] h-[60px] bg-blue-500 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade-up md:animate-once md:animate-duration-[4000ms]">
            <ExperienciaIcon className="mx-auto w-[60px] h-[60px] text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 animate-fade-up md:animate-once md:animate-duration-[5000ms]">
            Conducción y manejo de maquinarias
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 animate-fade-up md:animate-once  md:animate-duration-[5000ms]">
            Operación de Grúa Horquilla, Operación Puente Grúa, Operación
            equipos de Izaje, Rigger, Manejo a la Defensiva, Conducción 4x4
          </p>
        </div>
        <div className="mx-auto mt-10 animate-fade animate-once  px-16">
          <div className="w-[60px] h-[60px] bg-blue-500 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade-up md:animate-once md:animate-duration-[4000ms]">
            <ExperienciaIcon className="mx-auto w-[60px] h-[60px] text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 animate-fade-up md:animate-once md:animate-duration-[5000ms]">
            Normativas
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 animate-fade-up md:animate-once  md:animate-duration-[5000ms]">
            Normas NFPA todas sus series, Responsabilidad Civil Penal y Laboral
            ante Accidentes del trabajo y Enfermedades Profesionales, Normas
            ISO.
          </p>
        </div>
        <div className="mx-auto mt-10 animate-fade animate-once  px-16">
          <div className="w-[60px] h-[60px] bg-blue-500 shadow-xl rounded-2xl flex items-center border border-slate-950/5 mx-auto animate-fade-up md:animate-once md:animate-duration-[4000ms]">
            <ExperienciaIcon className="mx-auto w-[60px] h-[60px] text-white" />
          </div>
          <p className="text-4xl font-bold text-slate-700 font-overpass mt-4 animate-fade-up md:animate-once md:animate-duration-[5000ms]">
            Tendencias
          </p>
          <p className=" text-slate-700 font-overpass mt-4 px-2 animate-fade-up md:animate-once  md:animate-duration-[5000ms]">
            Bow Tie, IA aplicada a la gestión HSEQ, Marketing aplicado a
            campañas HSEQ, Risoterapia, Team Building, Liderazgo, Coaching,
            Mentorías.
          </p>
        </div>
      </section>
    </>
  );
};
