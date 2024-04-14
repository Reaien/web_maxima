import React from "react";
import { useState, useEffect } from "react";
import carousel1 from "../../assets/images/carousel1.webp";
import carousel2 from "../../assets/images/carousel2.webp";
import carousel3 from "../../assets/images/carousel3.webp";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

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
            Desarrolla las <span className="text-emerald-500">destrezas </span>{" "}
            de tus empleados para liderar en seguridad laboral utilizando la{" "}
            <span className="text-emerald-500">era digital.</span>
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
            <span className="text-emerald-500">avanzados y sostenibles </span>
            en prevención de riesgos pueden impulsar el{" "}
            <span className="text-emerald-500">éxito</span> de tu empresa.
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
            Somos una <span className="text-emerald-400">OTEC</span> chilena
            acreditada por <span className="text-emerald-400">Sence</span> y
            certificada según la norma NCH°2728 para garantizar una{" "}
            <span className="text-emerald-400">calidad de excelencia.</span>
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
      <section className="w-full h-[768px] mt-4 group ">
        <div
          style={{
            backgroundImage: `url(${slideImages[currentIndex].imgUrl}) `,
          }}
          className="w-auto h-full lg:mx-10 md:rounded-2xl   bg-top bg-cover duration-500 md:shadow-lg"
        ></div>

        {/* flecha izquierda */}
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute z-40 top-[50%]  -translate-x-0 translate-y-[-50%] md:left-14 left-5 text-2xl md:rounded-full p-2 bg-white/20 cursor-pointer"
        >
          <SlArrowLeft className="w-5 h-5 text-white/60" />
        </div>

        {/* flecha derecha */}
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute z-40 top-[50%]  -translate-x-0 translate-y-[-50%] md:right-14 right-5 text-2xl md:rounded-full p-2 bg-black/20 cursor-pointer"
        >
          <SlArrowRight className="w-5 h-5 text-white/60" />
        </div>
        <div className="absolute inset-0 w-98 h-[768px] mt-28 bg-slate-600 md:right-[55%]  xl:pt-5 lg:mx-10  md:rounded-l-2xl bg-center bg-cover">
          <div className="mt-16 xl:mt-32 ml-16 max-md:ml-5 w-auto ">
            <p className="font-bold text-left  text-white w-3/4  font-overpass text-4xl xl::text-5xl">
              {slideImages[currentIndex].content.title}
            </p>
            <p className=" mt-5 md:mt-10 font-bold text-left text-white w-3/4 text-lg font-overpass max-md:text-lg">
              {slideImages[currentIndex].content.subTitle}
            </p>
            <div className=" gap-2 mt-5 md:mt-10">
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
