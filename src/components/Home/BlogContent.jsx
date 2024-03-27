import React from "react";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.webp";
import blog3 from "../../assets/blog3.webp";

export const BlogContent = () => {
  return (
    <>
      <div className="grid grid-rows-1 items-center justify-center text-center">
        <p className="text-6xl  pl-6 font-bold font-overpass">
          <span className="text-emerald-500 ">Blog</span> <br />
          Últimas novedades
        </p>
      </div>
      <section className="grid grid-rows-1 lg:grid-cols-4 my-20 mx-auto justify-center">
        <div className="md:w-[415px] w-auto md:h-[480px] bg-white shadow-md rounded-md mb-10 mx-auto">
          <p className="mx-10 text-left font-bold text-2xl font-overpass mt-6">
            Compromiso en la enseñanza
          </p>
          <p className="mx-10 text-left text-sm mt-3">
            En Máxima Formación, nos apasiona ayudar a las organizaciones a
            desarrollar el potencial de su equipo humano a través de
            capacitación y formación a medida.
          </p>
          {/* Contenedor de la imagen con gradiente */}
          <div className="w-4/5 mx-auto mt-5 rounded-md overflow-hidden relative">
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/90 via-emerald-400/20 to-transparent" />
            {/* Imagen */}
            <img
              className="w-full h-full object-cover"
              src={blog1}
              alt="imagen_blog"
            />
          </div>
          <p className="text-xs text-left mx-10 mt-1">07/09/2023</p>
        </div>
        <div className="md:w-[415px] w-auto h-[480px] bg-white shadow-md rounded-md mb-10 mx-auto ">
          <p className="mx-10 text-left font-bold text-2xl font-overpass mt-6">
            Curso de Salud Ocupacional
          </p>
          <p className="mx-10 text-left text-sm mt-3">
            En Máxima Formación, nos apasiona ayudar a las organizaciones a
            desarrollar el potencial de su equipo humano a través de
            capacitación y formación a medida.
          </p>
          {/* Contenedor de la imagen con gradiente */}
          <div className="w-4/5 mx-auto mt-5 rounded-md overflow-hidden relative">
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/90 via-emerald-400/20 to-transparent" />
            {/* Imagen */}
            <img
              className="w-full h-full object-cover"
              src={blog2}
              alt="imagen_blog"
            />
          </div>
          <p className="text-xs text-left mx-10 mt-1">02/07/2023</p>
        </div>
        <div className="md:w-[415px] w-auto h-[480px] bg-white shadow-md rounded-md mb-10 mx-auto ">
          <p className="mx-10 text-left font-bold text-2xl font-overpass mt-6">
            Curso de mallas eléctricas
          </p>
          <p className="mx-10 text-left text-sm mt-3">
            En Máxima Formación, nos apasiona ayudar a las organizaciones a
            desarrollar el potencial de su equipo humano a través de
            capacitación y formación a medida.
          </p>
          {/* Contenedor de la imagen con gradiente */}
          <div className="w-4/5 mx-auto mt-5 rounded-md overflow-hidden relative">
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/90 via-emerald-400/20 to-transparent" />
            {/* Imagen */}
            <img
              className="w-full h-full object-cover"
              src={blog3}
              alt="imagen_blog"
            />
          </div>
          <p className="text-xs text-left mx-10 mt-1">11/06/2023</p>
        </div>
        <div className="md:w-[415px] w-auto h-[480px] bg-white shadow-md rounded-md mb-10 mx-auto ">
          <p className="mx-10 text-left font-bold text-2xl font-overpass mt-6">
            Curso de mallas eléctricas
          </p>
          <p className="mx-10 text-left text-sm mt-3">
            En Máxima Formación, nos apasiona ayudar a las organizaciones a
            desarrollar el potencial de su equipo humano a través de
            capacitación y formación a medida.
          </p>
          {/* Contenedor de la imagen con gradiente */}
          <div className="w-4/5 mx-auto mt-5 rounded-md overflow-hidden relative">
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/90 via-emerald-400/20 to-transparent" />
            {/* Imagen */}
            <img
              className="w-full h-full object-cover"
              src={blog3}
              alt="imagen_blog"
            />
          </div>
          <p className="text-xs text-left mx-10 mt-1">11/06/2023</p>
        </div>
      </section>
    </>
  );
};
