import React from "react";

export const ImageBar = ({ title, imageURL }) => {
  const [beforeMaxima, afterMaxima] = title.split("Máxima");
  return (
    <section className="grid grid-rows-1 grid-cols-1  bg-white shadow-md">
      <div className="h-[400px] md:h-[500px] relative">
        <div className="absolute inset-0 bg-slate-800/60"></div>
        <div className="flex justify-center">
          <p className="absolute text-3xl md:text-7xl text-white font-bold mt-40 font-overpass">
            {beforeMaxima}
            <span className="text-emerald-500"> Máxima </span>
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
  );
};
