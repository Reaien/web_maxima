import React from "react";
import video from "../../assets/video/promo_vr_maxima.mp4";
import rombo_confinado_3 from "../../assets/images/rombo_confinado_3.webp";
import rombo_extintor_2 from "../../assets/images/rombo_extintor_2.webp";
import rombo_trabajo_altura_1 from "../../assets/images/rombo_trabajo_altura_1.webp";
import { useNavigate } from "react-router-dom";

export const SimuladorContent = () => {
  const navigate = useNavigate();
  //fncion para scroll a componente Experiencias situado en /soluciones
  const scrollToExperienciasContent = () => {
    navigate("/soluciones");
    setTimeout(() => {
      const blogContent = document.getElementById("experiencias");
      blogContent.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 100);
  };
  return (
    <>
      <div className="grid grid-rows-1 items-center justify-center text-center">
        <div>
          {" "}
          <p className="text-5xl  pl-6 font-bold font-overpass ">
            Explora un futuro más seguro:
          </p>
          <p className="text-6xl  pl-6 font-bold font-overpass">
            Escuela de{" "}
            <span className="text-emerald-600 ">Riesgos Críticos VR</span>
          </p>
        </div>
      </div>
      <section className="md:bg-gradient-to-r md:from-white md:via-zinc-50 md:to-transparent grid grid-rows-1 md:grid-cols-2 mt-12   md:h-[450px] mb-20 rounded-lg">
        <div className="mt-10">
          <p className="font-bold text-5xl font-overpass text-center">
            <span className="text-emerald-600"> Experiencias </span>
            de nuestra escuela
          </p>
          <div className="grid gird-row md:grid-cols-3 text-center mt-10 justify-center">
            <div className="md:flex  justify-center flex-wrap  max-md:mb-5 mx-auto">
              <p className="font-semibold text-sm font-overpass">
                Experiencia espacios confinados
              </p>
              <img
                className="w-52 drop-shadow-md mt-3 max-md:ml-8"
                src={rombo_confinado_3}
                alt="rombo1"
              />
            </div>
            <div className="md:flex  justify-center flex-wrap  max-md:mb-5 mx-auto">
              <p className="font-semibold text-sm font-overpass">
                Experiencia simulador de uso de extintor
              </p>
              <img
                className="w-52 drop-shadow-md mt-3 max-md:ml-8"
                src={rombo_extintor_2}
                alt="rombo1"
              />
            </div>
            <div className="md:flex  justify-center flex-wrap  max-md:mb-5 mx-auto">
              <p className="font-semibold text-sm font-overpass">
                Experiencia trabajo en altura
              </p>
              <img
                className="w-52 drop-shadow-md mt-3 max-md:ml-8"
                src={rombo_trabajo_altura_1}
                alt="rombo2"
              />
            </div>
          </div>
          <div className="md:flex justify-end ">
            {" "}
            <button
              onClick={() => scrollToExperienciasContent()}
              className="cursor-pointer p-0 xl:mt-6 ml-10  py-1 px-3 mb-3 rounded bg-emerald-500 transition-all duration-400 font-bold text-white font-custom"
            >
              Explora todos nuestros cursos
            </button>
          </div>
        </div>
        <div className="flex items-center ">
          <video className="w-full h-full rounded-lg" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};
