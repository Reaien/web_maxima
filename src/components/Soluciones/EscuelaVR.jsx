import React from "react";
import Oculus from "../../assets/oculus.webp";

export const EscuelaVR = () => {
  return (
    <>
      <section className="grid grid-rows-1 xl:grid-cols-2 mx-auto  xl:px-40 px-10 mt-20 bg-white mb-20 xl:pb-10 shadow-lg justify-center items-center xl:h-[500px] ">
        <div className=" md:w-[600px] ">
          <h4 className="md:text-5xl text-5xl font-overpass md:text-left mt-6 ">
            Sé parte de nuestra experiencia{" "}
            <span className="text-emerald-500">VR</span>
          </h4>
          <p className="md:text-left font-overpass mt-12">
            Explora un nuevo mundo de aprendizaje seguro con la realidad virtual
            de Máxima Formación! Desde la extinción de incendios hasta la
            gestión de emergencias, nuestra experiencia en realidad virtual te
            preparará para enfrentar cualquier desafío en el lugar de trabajo.
            ¡Descubre la revolución en capacitación en seguridad con{" "}
            <span className="text-emerald-500">Máxima Formación VR</span>
          </p>
        </div>
        <div className="pt-28">
          <img
            className="w-80 mx-auto shadow-lg border rounded-full  animate-bounce animate-infinite animate-duration-[3000ms] animate-ease-out"
            src={Oculus}
            alt="Foto Gerente"
          />
        </div>
      </section>
    </>
  );
};
