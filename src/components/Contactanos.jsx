import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export const Contactanos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0zegwqp", "template_mo6vjzl", form.current, {
        publicKey: "-yYviovuhGc-yfknj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="md:bg-gradient-to-r md:from-white md:via-zinc-50 md:to-transparent lg:grid-cols-2  items-center grid grid-rows-1 shadow-md  md:h-[650px]  mt-40 ">
        <div className="md:ml-40 md:-mt-40 ">
          <p className="font-overpass ml-1 mb-5 text-xl">
            Sé parte de nuestra{" "}
            <span className="text-emerald-500">experiencia</span> de enseñanza e{" "}
            <span className="text-emerald-500">innovación</span>
          </p>
          <p className="text-4xl md:text-7xl font-overpass text-left">
            Contáctanos
          </p>
          <p className="mt-20 text-2xl ml-5">Nuestras Redes</p>
          <div className="flex md:justify-start gap-5 justify-between text-center text-4xl px-5 my-5 ">
            <FaFacebook className="hover:text-emerald-500 duration-500" />
            <FaLinkedin className="hover:text-emerald-500 duration-500" />
            <FaInstagram className="hover:text-emerald-500 duration-500" />
            <FaTiktok className="hover:text-emerald-500 duration-500" />
          </div>
        </div>
        <div className=" xl:mr-32 ">
          <div className=" shadow-md rounded-2xl bg-white">
            <form
              className="px-5 md:px-28 pb-5"
              ref={form}
              onSubmit={sendEmail}
            >
              <p className="py-10 font-overpass text-slate-400 italic ">
                "Trabajemos juntos para convertir grandes visiones en realidad."
              </p>
              <div className="mb-5">
                <label className="block text-sm font-bold text-gray-900 ">
                  Nombre
                </label>
                <input
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-emerald-500 focus:border-emerald-500 block duration-500 w-full p-2.5 outline-none"
                  type="text"
                  name="user_name"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-bold text-gray-900">
                  Tu Email
                </label>
                <input
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-emerald-500 focus:border-emerald-500 duration-500 block w-full p-2.5 outline-none"
                  type="email"
                  name="user_email"
                  placeholder="Ingresa tu correo electronico"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900">
                  Mensaje
                </label>
                <textarea
                  className="h-44 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-emerald-500 focus:border-emerald-500 duration-500 block w-full p-2.5 outline-none"
                  name="message"
                  placeholder="Ingresa tu mensaje"
                />
              </div>
              <button
                type="submit"
                value="Envíar contacto"
                className="mt-4 rounded bg-emerald-500 hover:bg-emerald-400 duration-500 py-2 px-3 font-bold text-white font-custom cursor-pointer"
              >
                Envíar contacto
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
