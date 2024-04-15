import React from "react";

export const CardBlog = ({ titulo, parrafo, foto, fecha }) => {
  return (
    <>
      <div className="md:w-[415px] w-auto md:h-auto bg-white shadow-md rounded-md mb-10 mx-auto">
        <p className="mx-10 text-left font-bold text-2xl font-overpass mt-6">
          {titulo}
        </p>
        <p className="mx-10 text-left text-sm mt-3">{parrafo}</p>
        {/* Contenedor de la imagen con gradiente */}
        <div className="w-4/5 mx-auto mt-5 rounded-md overflow-hidden relative">
          {/* Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/90 via-emerald-400/20 to-transparent" />
          {/* Imagen */}
          <img
            className="w-full h-full object-cover"
            src={foto}
            alt="imagen_blog"
          />
        </div>
        <p className="text-xs text-left mx-10 mt-1">{fecha}</p>
      </div>
    </>
  );
};
