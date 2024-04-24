import React from "react";
import { useState } from "react";
import maximaLogoFull from "../../assets/images/maximaLogoFull.svg";
import { ToggleMenuXL } from "./ToggleMenuXL.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  //fx para scroll a contacto
  const navigate = useNavigate();
  const scrollToContactoContent = () => {
    navigate("/");
    setTimeout(() => {
      const contactoContent = document.getElementById("contactanos");
      contactoContent.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 100);
  };
  //fncion para scroll a componente BlogContent
  const scrollToBlogContent = () => {
    navigate("/");
    setTimeout(() => {
      const blogContent = document.getElementById("blog-content");
      blogContent.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 100);
  };

  const estilo = {
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.1)",
  };

  //Hook que controla la visibilidad del menu del navBar y sus títulos en modalidad desktop
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuTitle, setMenuTitle] = useState("");
  const toggleMenu = (title) => {
    setMenuVisible(!menuVisible);
    setMenuTitle(title);
  };

  const [menuMovilVisible, setMenuMovilVisible] = useState(false);
  const toggleMenuMovil = () => {
    setMenuMovilVisible(!menuMovilVisible);
  };

  //controlar componente por resolucion para navbar movil
  const windowWidth = window.innerWidth;

  let contentMovil;

  if (windowWidth <= 768) {
    contentMovil = (
      <ToggleMenuXL
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        menuTitle={menuTitle}
      />
    );
  }

  let contentDesktop;

  if (windowWidth > 768) {
    contentDesktop = (
      <ToggleMenuXL
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        menuTitle={menuTitle}
      />
    );
  }

  return (
    <>
      <header className="bg-white shadow-md h-24 ">
        <div className=" flex items-center justify-between max-w-screen-2xl mx-auto ">
          <Link to="/" className="lg:pl-16 xl:pl-52   md:-mt-3">
            <img
              className="w-44 -md:mt-5 xl:w-48"
              src={maximaLogoFull}
              alt="logo"
            />
          </Link>
          <div className="max-lg:hidden flex items-center space-x-4 px-3">
            <button
              onClick={() => toggleMenu("Soluciones")}
              className="ml-6 hover:text-emerald-600  focus:text-emerald-700 flex items-center duration-500 font-light transition-all duration-400 hover:underline font-custom"
            >
              Soluciones
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <Link
              to="/maxima"
              className="mx-6 hover:text-emerald-600 focus:text-emerald-700 flex items-center duration-500 font-light transition-all duration-400 hover:underline font-custom"
            >
              ¿Por qué Máxima?
            </Link>
            <Link
              to={"/casos_exito"}
              className="mx-6 hover:text-emerald-600 focus:text-emerald-700 flex items-center duration-500 font-light transition-all duration-400 hover:underline font-custom"
              href="#"
            >
              Casos de éxito
            </Link>

            <button
              onClick={() => scrollToBlogContent()}
              className="mx-6 hover:text-emerald-600 focus:text-emerald-700 flex items-center duration-500 font-light transition-all duration-400 hover:underline font-custom"
              href="#"
            >
              Blog
            </button>
          </div>
          <div className="pt-2 max-lg:hidden">
            <button
              onClick={() => scrollToContactoContent()}
              className="py-1  text-xs xl:text-base px-0 xl:px-3  rounded bg-emerald-500 transition-all duration-400 hover:underline font-bold text-white font-custom"
            >
              Comunícate con nosotros
            </button>
          </div>
          <div className="pt-2 max-lg:hidden">
            <button
              onClick={() => scrollToContactoContent()}
              className="py-1  text-xs xl:text-base px-0 xl:px-3 rounded bg-blue-500 transition-all duration-400 hover:underline font-bold text-white font-custom"
            >
              Accede al aula virtual
            </button>
          </div>

          {/*Botón movil*/}
          <div className="max-sm:px-5 px-10">
            <button
              onClick={toggleMenuMovil}
              className="lg:hidden flex items-center justify-center rounded-lg border-2 h-10 w-16 border-emerald-700/20 focus:border-emerald-700/70 focus:border-4 transition-colors "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section
        className={`lg:hidden ${menuMovilVisible ? "" : "hidden"} animate-flip-down animate-duration-[400ms] absolute z-10 w-full`}
      >
        <div
          onClick={() => toggleMenu("Soluciones")}
          style={estilo}
          className="bg-white hover:cursor-pointer hover:bg-emerald-500 hover:text-white transition-colors duration-700"
        >
          <p className="py-4 p-5">Soluciones</p>
        </div>
        <div className="bg-white hover:cursor-pointer hover:bg-emerald-500 hover:text-white transition-colors duration-700">
          <Link to="/maxima" style={estilo}>
            <p className="py-4 p-5">¿Por qué Máxima?</p>
          </Link>
        </div>

        <div className="bg-white hover:cursor-pointer hover:bg-emerald-500 hover:text-white transition-colors duration-700">
          <Link to="/casos_exito" style={estilo}>
            <p className="py-4 p-5">Casos de éxito</p>
          </Link>
        </div>

        <div
          onClick={() => scrollToBlogContent()}
          className="bg-white hover:cursor-pointer hover:bg-emerald-500 hover:text-white transition-colors duration-700"
        >
          <p className="py-4 p-5">Blog</p>
        </div>
        <div className="bg-white pt-4">
          <button
            onClick={() => scrollToContactoContent()}
            className="py-1 ml-2 px-3 mb-3 rounded bg-emerald-600 transition-all duration-400 hover:underline  font-bold text-white "
          >
            Comunícate con nosotros
          </button>
        </div>
        <div className="bg-white pt-4">
          <button
            onClick={() => scrollToContactoContent()}
            className="py-1 ml-2 px-3 mb-3 rounded bg-blue-500 transition-all duration-400 hover:underline  font-bold text-white "
          >
            Accede al aula virtual
          </button>
        </div>
        {contentMovil}
      </section>
      {contentDesktop}
    </>
  );
};
