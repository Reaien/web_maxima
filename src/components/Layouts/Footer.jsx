import React from "react";
import maximaLogoFull from "../../assets/maximaLogoFull.svg";
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <section className="grid grid-rows-1 md:grid-cols-3 bg-zinc-900 md:h-[300px] mt-10 justify-center items-center md:pl-56">
      <div className="text-white">
        <img src={maximaLogoFull} alt="Logo Maxima" />
      </div>
      <div className="text-white text-left  gap-3">
        <div className="flex mb-5">
          <FiMapPin className="w-[30px] h-[30px] mt-1" />
          <div className=" ml-3">
            <p className="font-overpass font-bold">
              Dirección ejecutiva: Concepción
            </p>
            <p className="font-overpass font-bold">Calle 10 N° 100</p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <FiPhone className="w-[30px] h-[30px] " />
          <div className="ml-3">
            <p className="font-overpass font-bold">
              Teléfono:{" "}
              <span className="text-emerald-600">+56 9 8378 4773</span>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <FiMail className="w-[30px] h-[30px] " />
          <div className="ml-3">
            <p className="font-overpass font-bold">
              Correo:{" "}
              <span className="text-emerald-600">
                contacto@maximaformacion.cl
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-white text-center md:text-left">
        <p className="text-3xl font-bold">Páginas</p>
        <ul className="md:text-left">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Soluciones</a>
          </li>
          <li>
            <a href="">¿Por qué Máxima?</a>
          </li>
          <li>
            <a href="">Casos de exito</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
