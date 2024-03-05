import React from "react";
import { useState, useEffect } from "react";
import logo_copec from "../assets/logo_copec.webp";
import logo_ruilt from "../assets/logo_ruilt.jpg";

export const EmpresasContainer = () => {
  const slideImages = [
    {
      imgUrl: logo_copec,
    },
    {
      imgUrl: logo_ruilt,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Cambia 8000 por el tiempo en milisegundos que deseas entre cada cambio de imagen

    return () => clearInterval(timer);
  }, [currentIndex]); // Esto se ejecutará cada vez que cambie el currentIndex
  return (
    <>
      <section className="h-[400px] max-w-auto w-auto bg-white mt-20 mb-20 grid grid-rows-1 md:grid-cols-2 items-center">
        <div className="md:mx-auto font-overpass text-4xl md:text-5xl text-start md:w-1/2 px-5 font-bold md:mr-20">
          Empresas líderes que{" "}
          <span className="text-emerald-500">maximizan</span> su potencial con
          nosotros.
        </div>
        <div className="mx-auto w-auto h-auto mt-4 flex md:ml-36">
          <div
            style={{
              backgroundImage: `url(${slideImages[currentIndex].imgUrl}) `,
            }}
            className="w-32 h-40  md:w-64 md:h-80 lg:mx-10 md:rounded-2xl  bg-top bg-cover duration-500 md:shadow-lg"
          ></div>
        </div>
      </section>
    </>
  );
};
