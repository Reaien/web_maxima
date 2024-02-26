import React from "react";
import { useState, useEffect } from "react";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export const Carousel = () => {
  const slideImages = [
    {
      imgUrl: carousel1,
    },
    {
      imgUrl: carousel2,
    },
    {
      imgUrl: carousel3,
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
    }, 8000); // Cambia 5000 por el tiempo en milisegundos que deseas entre cada cambio de imagen

    return () => clearInterval(timer);
  }, [currentIndex]); // Esto se ejecutará cada vez que cambie el currentIndex

  return (
    <>
      <section className="w-full h-[768px] mt-4 group">
        <div
          style={{
            backgroundImage: `url(${slideImages[currentIndex].imgUrl})`,
          }}
          className="w-auto h-full lg:mx-10 md:rounded-2xl bg-center bg-cover duration-500 md:shadow-xl"
        ></div>

        {/* flecha izquierda */}
        <div className="hidden group-hover:block absolute z-40 top-[50%] -translate-x-0 translate-y-[-50%] md:left-14 left-5 text-2xl md:rounded-full p-2 bg-white/20 cursor-pointer">
          <SlArrowLeft onClick={prevSlide} className="w-5 h-5 text-white/60" />
        </div>

        {/* flecha derecha */}
        <div className="hidden group-hover:block absolute z-40 top-[50%] -translate-x-0 translate-y-[-50%] md:right-14 right-5 text-2xl md:rounded-full p-2 bg-black/20 cursor-pointer">
          <SlArrowRight onClick={nextSlide} className="w-5 h-5 text-white/60" />
        </div>
        <div className="absolute inset-0 w-98 h-[768px] mt-28  md:right-[55%] pt-5 bg-slate-950/30 lg:mx-10 md:shadow-xl md:rounded-l-2xl bg-center bg-cover">
          <div className="mt-36 ml-16 w-full">
            <p className="font-bold text-left text-white w-3/4 text-5xl font-overPass">
              Transformamos vidas a través del conocimiento y experiencia.
            </p>
            <p className="mt-10 font-bold text-left text-white w-3/4 text-lg font-overPass">
              Somos un OTEC chileno acreditado por SENCE y certificado según la
              norma Nch. 2728 para garantizar la calidad. Nuestra misión es
              impulsar tu crecimiento profesional o emprendedor.
            </p>
            <div className="flex justify-center items-end gap-2">
              <a href="#">
                <button className="py-5 mb-3 mr-14 px-5 rounded bg-yellow-400 hover:bg-yellow-300 transition-all duration-400 hover:underline font-light font-custom">
                  Comunícate con nosotros
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
