import React from "react";

export const ImageBar = ({ title, imageURL }) => {
  const [beforeMaxima, afterMaxima] = title.split("Máxima");
  return (
    <>
      <section className="grid grid-rows-1 grid-cols-1  bg-white shadow-md">
        <div className="h-[400px] md:h-[500px] relative">
          <div className="absolute inset-0 bg-slate-800/60"></div>
          <div className="flex justify-center">
            <p className="absolute text-3xl md:text-7xl text-white font-bold mt-40 font-overpass">
              {beforeMaxima}
              <span className="text-emerald-600"> Máxima </span>
              {afterMaxima}
            </p>
          </div>
          <img
            className="object-cover w-full h-full"
            src={imageURL}
            alt="imagen_mision"
          />
        </div>
      </section>
      <section className="grid md:grid-cols-1">
        <p className="font-overpass md:text-2xl xl:text-5xl mx-auto font-bold mt-20">
          ¡ Bienvenido a Máxima Formación{" "}
          <span className="text-emerald-600">eTraining !</span>
        </p>
        <p className="italic text-slate-600 md:px-80 text-center">
          ¿Estás en busqueda una solución integral para la Formación en materia
          de Salud, Seguridad, Medio Ambiente y Calidad (HSEQ) para tu empresa?
          Maxima Formación eTraining. Tu solución integral en formación HSEQ,
          diseñada para satisfacer las necesidades específicas de tu empresa y
          alcanzar objetivos de manera eficiente.
        </p>
      </section>
    </>
  );
};
