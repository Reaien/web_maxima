import React from "react";
import Oculus from "../../assets/oculus.webp";
import rombo_confinado_3 from "../../assets/rombo_confinado_3.webp";
import rombo_extintor_2 from "../../assets/rombo_extintor_2.webp";
import rombo_trabajo_altura_1 from "../../assets/rombo_trabajo_altura_1.webp";
import { Link } from "react-router-dom";

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
            className="w-80 mx-auto shadow-lg border rounded-full  animate-bounce animate-infinite animate-duration-[7000ms] animate-ease-out"
            src={Oculus}
            alt="Foto Gerente"
          />
        </div>
      </section>
      <div className="grid grid-rows-1 items-center justify-center text-center">
        <p className="font-bold text-5xl font-overpass text-center">
          Simulador de escuela de riesgos
        </p>
      </div>
      <section className="grid grid-rows-2 mt-12 max-md:-mb-80 xl:-mb-32">
        {/* primera fila de experiencias */}
        <div className="mt-5">
          <p className="font-bold md:text-7xl text-5xl  font-overpass text-center">
            <span className="text-emerald-500 ">Experiencias </span>
          </p>
          <div className="grid grid-rows-1 md:grid-cols-3 text-center mt-10 justify-center">
            <div className=" max-md:mb-5 mx-auto">
              <p className="font-semibold text-2xl font-overpass">
                Trabajo en alturas
              </p>
              <img
                className="md:w-80 drop-shadow-md mt-3"
                src={rombo_confinado_3}
                alt="rombo1"
              />
            </div>
            <div className="   max-md:mb-5 mx-auto">
              <p className="font-semibold text-2xl font-overpass">
                Interacción hombre máquina
              </p>
              <img
                className="md:w-80 drop-shadow-md mt-3"
                src={rombo_confinado_3}
                alt="rombo1"
              />
            </div>
            <div className="   max-md:mb-5 mx-auto">
              <p className="font-semibold text-2xl font-overpass">
                Bloqueo Loto
              </p>
              <img
                className="w-80 drop-shadow-md mt-3"
                src={rombo_confinado_3}
                alt="rombo1"
              />
            </div>
          </div>
        </div>
        {/* segunda fila de experiencias */}
        <div className="grid md:grid-cols-2 items-center justify-center text-center max-md:h-[100px] md:justify-self-center xl:-mt-52">
          <div className=" xl:pr-32 mx-auto">
            <p className="font-semibold text-2xl font-overpass">
              Espacios confinados
            </p>
            <img
              className="w-80 drop-shadow-md mt-3"
              src={rombo_confinado_3}
              alt="rombo1"
            />
          </div>
          <div className="xl:pl-32 max-md:mt-5 mx-auto">
            <p className="font-semibold text-2xl font-overpass">
              Uso de extintores
            </p>
            <img
              className="w-80 drop-shadow-md mt-3"
              src={rombo_confinado_3}
              alt="rombo1"
            />
          </div>
        </div>
      </section>
    </>
  );
};
