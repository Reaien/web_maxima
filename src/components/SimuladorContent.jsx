import React from "react";
import video3 from "../assets/video/video_extintor.mp4";
import rombo_extintor_1 from "../assets/rombo_extintor_1.webp";
import rombo_extintor_2 from "../assets/rombo_extintor_2.webp";
import rombo_extintor_3 from "../assets/rombo_extintor_3.webp";

export const SimuladorContent = () => {
  return (
    <>
      <div className="grid grid-rows-1 items-center justify-center text-center">
        <p>
          {" "}
          <p className="text-5xl  pl-6 font-bold font-overpass ">
            Explora un futuro más seguro:
          </p>
          <p className="text-6xl  pl-6 font-bold font-overpass">
            Escuela de{" "}
            <span className="text-emerald-500 ">Riesgos Críticos VR</span>
          </p>
        </p>
      </div>
      <section className="md:bg-gradient-to-r md:from-white md:via-zinc-50 md:to-transparent grid grid-rows-1 md:grid-cols-2 mt-12   md:h-[400px] mb-20">
        <div className="mt-10">
          <p className="font-bold text-5xl font-overpass text-center">
            <span className="text-emerald-500">Experiencia</span> Uso de
            extintores
          </p>
          <div className="grid gird-row md:grid-cols-3 text-center mt-10 justify-center">
            <div className="flex justify-center flex-wrap px-5 max-md:mb-5">
              <p className="font-semibold text-sm font-overpass">
                Extintores VR para entrenamiento real.
              </p>
              <img
                className="w-52 drop-shadow-md mt-3"
                src={rombo_extintor_1}
                alt="rombo1"
              />
            </div>
            <div className="flex justify-center flex-wrap px-5 max-md:mb-5">
              <p className="font-semibold text-sm font-overpass">
                Práctica de extinción de incendios en VR.
              </p>
              <img
                className="w-52 drop-shadow-md mt-3"
                src={rombo_extintor_2}
                alt="rombo2"
              />
            </div>
            <div className="flex justify-center flex-wrap px-5 max-md:mb-5">
              <p className="font-semibold text-sm font-overpass">
                Domina extintores en VR: tu entrenamiento contra incendios.
              </p>
              <img
                className="w-52 drop-shadow-md mt-3"
                src={rombo_extintor_3}
                alt="rombo2"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <video className="w-full h-full " autoPlay loop muted>
            <source src={video3} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};
