import React from "react";
import { NavBar } from "./NavBar.jsx";
import { ToggleMenuXL } from "./ToggleMenuXL.jsx";
import imagen_mision from "../assets/capa_maxima.webp";

const NuestraMision = () => {
  return (
    <>
      <NavBar />
      <ToggleMenuXL />
      <section className="grid grid-rows-1 grid-cols-2 mt-10 bg-white shadow-md">
        <div className="mx-auto">
          <p className="text-5xl font-bold font-overpass mt-5">
            Nuestra misión
          </p>
        </div>
        <div className="h-[500px] relative">
          <div className="absolute inset-0 md:bg-gradient-to-l md:from-transparent md:to-white/75"></div>
          <img
            className="object-cover w-full h-full"
            src={imagen_mision}
            alt="imagen_mision"
          />
        </div>
      </section>

      <section className="grid grid-rows-1 grid-cols-3 items-center text-center justify-center">
        <div>div1</div>
        <div>div2</div>
        <div>div3</div>
      </section>
    </>
  );
};

export default NuestraMision;
