import React from "react";
import foto_gerente from "../../assets/images/foto_gerente.webp";

export const ManagerProposal = () => {
  return (
    <section className="grid grid-rows-1 xl:grid-cols-2 mx-auto text-center xl:px-40 px-10 mt-20 bg-white mb-20 pb-10 shadow-lg justify-center items-center">
      <div className="mt-14 md:w-[600px]">
        <h4 className="md:text-7xl text-5xl font-overpass md:text-left">
          Detrás de la <span className="text-emerald-600">seguridad</span> y la
          experiencia única de aprendizaje{" "}
        </h4>
        <p className="md:text-left font-overpass mt-12 mb-10">
          ¡Bienvenido/a a Maxima Formación, donde transformamos la capacitación
          en una experiencia emocionante y efectiva! Somos pioneros en la
          integración de metodologías ágiles y gamificación en nuestros
          programas de formación en HSEQ (Higiene, Seguridad, Medio Ambiente y
          Calidad) combinando también tecnología y análisis de datos buscamos
          impactar en las empresas en 360°.{" "}
        </p>

        <p className="md:text-left font-overpass mt-12 mb-10">
          Creemos firmemente en que el aprendizaje se potencia cuando se combina
          la innovación con la diversión, y es por eso que cada curso que
          ofrecemos está diseñado para involucrar, motivar y capacitar a
          nuestros participantes de una manera única. En Maxima Formación, no
          solo adquieres conocimientos, ¡sino que te sumerges en una aventura de
          aprendizaje que te inspirará a alcanzar tu máximo potencial! Cambiemos
          en conjunto los paradigmas de la formación HSEQ.
        </p>
      </div>
      <div className="mt-8">
        <h4 className="md:text-4xl text-6xl font-semibold font-overpass">
          Diego Marinado Muñoz
        </h4>
        <p className="font-overpass">Gerente de operaciones Máxima Formación</p>
        <img
          className="w-96 mx-auto rounded-full mt-5"
          src={foto_gerente}
          alt="Foto Gerente"
        />
      </div>
    </section>
  );
};
