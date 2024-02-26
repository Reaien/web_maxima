import React from "react";
import { useState } from "react";
import maximaLogoFull from "../assets/maximaLogoFull.svg";

export const NavBar = () => {
  const estilo = {
    // Define los estilos en un objeto JavaScript
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.1)",
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <header className="bg-white shadow-md h-24 ">
        <div className=" flex items-center justify-between max-w-screen-2xl mx-auto ">
          <div className="lg:pl-16 xl:pl-36 -mt-5">
            <img className="w-56" src={maximaLogoFull} alt="logo" />
          </div>
          <div className="max-lg:hidden flex items-center space-x-4 px-3">
            <button
              className="ml-6 hover:text-emerald-600  focus:text-emerald-700 flex items-center duration-500 font-light transition-all duration-400 hover:underline font-custom"
              href="#"
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
            <button
              className="mx-6 hover:text-emerald-600 focus:text-emerald-700 flex items-center duration-500 font-light transition-all duration-400 hover:underline font-custom"
              href="#"
            >
              Casos de éxito
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
            <button
              className="mx-6 hover:text-emerald-600 focus:text-emerald-700 flex items-center duration-500 font-light transition-all duration-400 hover:underline font-custom"
              href="#"
            >
              ¿Por qué Máxima?
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
            <button
              className="mx-6 hover:text-emerald-600 focus:text-emerald-700 flex items-center duration-500 font-light transition-all duration-400 hover:underline font-custom"
              href="#"
            >
              Blog
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
          </div>
          <div className="pt-2 ml-10 max-lg:hidden">
            <a href="#">
              <button className="py-1 ml-2 px-3 mb-3 rounded bg-blue-600 hover:bg-blue-500 transition-all duration-400 hover:underline font-bold text-white font-custom">
                Comunícate con nosotros
              </button>
            </a>
          </div>

          <div className="max-sm:px-5 px-10">
            <button
              onClick={toggleMenu}
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
        className={`lg:hidden ${menuVisible ? "" : "hidden"} animate-flip-down animate-duration-[400ms] absolute z-10 w-full`}
      >
        <div
          style={estilo}
          className="bg-white hover:bg-emerald-500 hover:text-white transition-colors duration-700"
        >
          <button href="">
            <p className="py-4 p-5">Soluciones</p>
          </button>
        </div>
        <div className="bg-white hover:bg-emerald-500 hover:text-white transition-colors duration-700">
          <button href="">
            <p className="py-4 p-5">Casos de éxito</p>
          </button>
        </div>
        <div className="bg-white hover:bg-emerald-500 hover:text-white transition-colors duration-700">
          <button href="">
            <p className="py-4 p-5">¿Por qué Máxima?</p>
          </button>
        </div>
        <div className="bg-white pt-4">
          <a href="">
            <button className="py-1 ml-2 px-3 mb-3 rounded bg-blue-600 hover:bg-blue-300 transition-all duration-400 hover:underline  font-bold text-white ">
              Comunícate con nosotros
            </button>
          </a>
        </div>
      </section>
    </>
  );
};
