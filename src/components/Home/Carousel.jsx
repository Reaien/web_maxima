import React from "react";
import { useState, useEffect } from "react";
import carousel1 from "../../assets/images/carousel1.webp";
import carousel2 from "../../assets/images/carousel2.webp";
import carousel3 from "../../assets/images/carousel3.webp";
import { ArrowLeft } from "../icons/ArrowLeft.jsx";
import { ArrowRight } from "../icons/ArrowRight.jsx";

export const Carousel = () => {
  const scrollToContactoContent = () => {
    const contactoContent = document.getElementById("contactanos");
    contactoContent.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  const slideImages = [
    {
      imgUrl: carousel3,

      content: {
        title: (
          <>
            Desarrolla las <span className="text-emerald-600">destrezas </span>{" "}
            de tus empleados para liderar en seguridad laboral utilizando la{" "}
            <span className="text-emerald-600">era digital.</span>
          </>
        ),
        subTitle: (
          <>
            Potencia tu empresa con los métodos más sostenibles, interactivos y
            avanzados del mercado.
          </>
        ),

        buttonTitle: <>Comunícate con nosotros</>,
      },
    },
    {
      imgUrl: carousel1,
      content: {
        title: (
          <>
            Sé parte de cómo los métodos más{" "}
            <span className="text-emerald-600">avanzados y sostenibles </span>
            en prevención de riesgos pueden impulsar el{" "}
            <span className="text-emerald-600">éxito</span> de tu empresa.
          </>
        ),
        subTitle: (
          <>
            Fortalece tu empresa, somos la clave para tener un entorno laboral
            más seguro e impular tu crecimiento profesional y emprendedor.
          </>
        ),
        buttonTitle: <>Comunícate con nosotros</>,
      },
    },
    {
      imgUrl: carousel2,
      content: {
        title: (
          <>
            Somos una <span className="text-emerald-600">OTEC</span> chilena
            acreditada por <span className="text-emerald-600">Sence</span> y
            certificada según la norma NCH°2728 para garantizar una{" "}
            <span className="text-emerald-600">calidad de excelencia.</span>
          </>
        ),
        subTitle: (
          <>Transformamos vidas a través del conocimiento y la experiencia.</>
        ),
        buttonTitle: <>Comunícate con nosotros</>,
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // Cambia 8000 por el tiempo en milisegundos que deseas entre cada cambio de imagen

    return () => clearInterval(timer);
  }, [currentIndex]); // Esto se ejecutará cada vez que cambie el currentIndex

  return (
    <>
      <section className="w-auto mt-4 md:ml-3 group ">
        <div>
          <div
            rel="preload"
            style={{
              backgroundImage: `url(${slideImages[currentIndex].imgUrl}) `,
            }}
            className="w-auto h-[540px]  lg:mx-10 md:rounded-2xl   bg-cover bg-center duration-500 md:shadow-lg"
          ></div>

          {/* flecha izquierda */}
          <div
            onClick={prevSlide}
            className="hidden group-hover:block absolute z-40 sm:top-[40%] top-[50%]  -translate-x-0 translate-y-[-50%] md:left-14 left-5 text-2xl rounded-full p-2 bg-white cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-black" />
          </div>

          {/* flecha derecha */}
          <div
            onClick={nextSlide}
            className="hidden group-hover:block absolute z-40 sm:top-[40%] top-[50%]  -translate-x-0 translate-y-[-50%] md:right-14 right-5 text-2xl rounded-full p-2 bg-white cursor-pointer"
          >
            <ArrowRight className="w-4 h-5 text-black" />
          </div>
        </div>

        <div className="absolute inset-0  h-[540px] mt-28 bg-slate-600/60 md:right-[55%]  xl:pt-5 lg:mx-[52px]  md:rounded-l-2xl bg-center bg-cover">
          <div className="mt-16 md:ml-14 ml-1  ">
            <p className="font-bold text-left  text-white  font-overpass text-2xl 2xl:w-2/4 md:text-xl xl:text-2xl">
              {slideImages[currentIndex].content.title}
            </p>
            <p className=" mt-5 font-bold text-left text-white  text-base font-overpass 2xl:w-3/4  max-md:text-base">
              {slideImages[currentIndex].content.subTitle}
            </p>
            <div className=" gap-2 mt-32 sm:mt-10">
              <button
                onClick={() => scrollToContactoContent()}
                className="py-5 mb-3 px-5 rounded bg-gradient-to-b from-emerald-500  to-emerald-600 transition-all duration-400 hover:underline text-lg font-bold text-white"
              >
                {slideImages[currentIndex].content.buttonTitle}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
