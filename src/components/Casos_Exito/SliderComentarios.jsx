import React from "react";
import { sliderComentariosData } from "../../data/sliderComentariosData";
import Comentarios from "./Comentarios";

export const SliderComentarios = () => {
  const arregloComentarios = [
    ...sliderComentariosData,
    ...sliderComentariosData,
  ];

  return (
    <>
      <section className="mt-32 mb-10">
        <div className="grid grid-rows-1 grid-cols-1 text-center mt-16 font-semibold">
          <div className="mb-16">
            <p className="text-4xl xl:text-5xl 2xl:text-7xl font-overpass">
              Comentarios de nuestros usuarios
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="overflow-hidden w-full">
          <div className="flex  animate-scroll">
            {arregloComentarios.map((comentario, index) => {
              return (
                <Comentarios
                  key={index}
                  mail={comentario.mail}
                  comentario={comentario.comentario}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
