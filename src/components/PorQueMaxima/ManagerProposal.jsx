import React from "react";
import foto_gerente from "../../assets/images/foto_gerente.jpeg";

export const ManagerProposal = () => {
  return (
    <section className="grid grid-rows-1 xl:grid-cols-2 mx-auto text-center xl:px-40 px-10 mt-20 bg-white mb-20 pb-10 shadow-lg justify-center items-center">
      <div className="mt-14 md:w-[600px]">
        <h4 className="md:text-7xl text-5xl font-overpass md:text-left">
          Detrás de la <span className="text-emerald-600">seguridad</span> y la
          experiencia única de aprendizaje{" "}
        </h4>
        <p className="md:text-left font-overpass mt-12">
          Como gerente de Máxima Formación, nos enorgullece compartir nuestro
          compromiso detrás de la seguridad y la experiencia única de
          aprendizaje que ofrecemos. Nuestra misión es proporcionar a empresas y
          trabajadores las herramientas necesarias para crear entornos laborales
          seguros y saludables. A través de nuestra dedicación a la innovación
          en la prevención de riesgos y la integración de tecnologías avanzadas,
          como la realidad virtual, buscamos no solo capacitar a los empleados,
          sino también inspirarlos y empoderarlos. <br />
          <br />
          Es por eso que nos esforzamos por brindar una experiencia de
          aprendizaje única que no solo educa, sino que también transforma,
          contribuyendo así a un futuro laboral más seguro y prometedor para
          todos.
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
