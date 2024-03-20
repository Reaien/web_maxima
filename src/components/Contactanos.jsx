import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export const Contactanos = () => {
  // useState para el captcha y pasar el estado a true si se realizó el captcha
  //configurar y seguir doc de emailJS para configurar la key en el dashboard de emailJS
  const [capValue, setCapValue] = useState(null);

  //formulario de emailJS
  const form = useRef();
  //funcion para el formulario de emailJS con las keys
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
      <section className="md:bg-gradient-to-r md:from-white md:via-zinc-50 md:to-transparent  items-center grid grid-rows-1 lg:grid-cols-2  shadow-md  mb-10 ">
        <div className="md:ml-40 mt-10">
          <div>
            <p className="text-base max-md:text-center font-overpass ml-1 mb-5 md:text-xl">
              Sé parte de nuestra{" "}
              <span className="text-emerald-500">experiencia</span> de enseñanza
              e <span className="text-emerald-500">innovación</span>
            </p>
            <p className="max-md:text-center text-5xl md:text-7xl font-overpass text-left">
              Contáctanos
            </p>
            <p className=" max-md:text-center  text-2xl ml-5 mb-10">
              Nuestras Redes
            </p>
          </div>
          <div className="flex md:justify-start gap-5 justify-center text-center text-4xl px-3 my-5 ">
            <FaFacebook className="hover:text-emerald-500 duration-500" />
            <FaLinkedin className="hover:text-emerald-500 duration-500" />
            <FaInstagram className="hover:text-emerald-500 duration-500" />
            <FaTiktok className="hover:text-emerald-500 duration-500" />
          </div>
        </div>
        <div className=" xl:mr-32 mb-10">
          <div className=" shadow-md rounded-2xl bg-white">
            <form
              className="px-3 md:px-28 pb-5 mt-10"
              ref={form}
              onSubmit={sendEmail}
            >
              <p className="py-10 font-overpass text-slate-400 italic text-center">
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
                  required
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
                  required
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
                  required
                />
              </div>
              <div className="max-md:flex justify-center items-center">
                <ReCAPTCHA
                  sitekey="6LcjA40pAAAAADpMI9QCajwruAQ41l5DlBcOXRvm"
                  onChange={(val) => setCapValue(val)}
                  className="mt-5"
                />
              </div>
              <div className="max-md:flex justify-center items-center">
                <button
                  type="submit"
                  value="Envíar contacto"
                  className="mt-4 rounded bg-gradient-to-b from-emerald-500  to-emerald-600  py-2 px-3 font-bold text-white font-custom cursor-pointer hover:underline "
                  //boton disabled hasta que se pase el captcha//
                  disabled={!capValue}
                >
                  Enviar contacto
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
