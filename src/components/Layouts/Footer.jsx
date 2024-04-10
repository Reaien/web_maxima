import React from "react";
import maximaLogoFull from "../../assets/maximaLogoFull.svg";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const scrollToBlogContent = () => {
    navigate("/");
    setTimeout(() => {
      const contactoContent = document.getElementById("blog-content");
      contactoContent.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 100);
  };

  return (
    <section className="grid grid-rows-1 md:grid-cols-3 bg-zinc-900 md:h-[300px] mt-10 justify-center items-center md:pl-56">
      <div className="text-white">
        <img src={maximaLogoFull} alt="Logo Maxima" />
      </div>
      <div className="text-white text-left  gap-3">
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
        <p className="text-3xl font-bold font-overpass">Páginas</p>
        <ul className="md:text-left">
          <Link to="/" className="hover:text-emerald-500 cursor-pointer">
            <p>Inicio</p>
          </Link>
          <Link
            to="/soluciones"
            className="hover:text-emerald-500 cursor-pointer"
          >
            <p>Soluciones</p>
          </Link>
          <Link to="/maxima" className="hover:text-emerald-500 cursor-pointer">
            <p>¿Por qué Máxima?</p>
          </Link>
          <Link
            to="/casos_exito"
            className="hover:text-emerald-500 cursor-pointer"
          >
            <p>Casos de exito</p>
          </Link>
          <li
            onClick={() => scrollToBlogContent()}
            className="hover:text-emerald-500 cursor-pointer"
          >
            <p>Blog</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
