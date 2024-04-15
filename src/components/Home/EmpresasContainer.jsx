import React from "react";
import { useState, useEffect } from "react";
import logo_empresa_1 from "../../assets/logos/logo_empresa_1.webp";
import logo_empresa_2 from "../../assets/logos/logo_empresa_2.webp";
import logo_empresa_3 from "../../assets/logos/logo_empresa_3.webp";
import logo_empresa_4 from "../../assets/logos/logo_empresa_4.webp";
import logo_empresa_5 from "../../assets/logos/logo_empresa_5.webp";
import logo_empresa_7 from "../../assets/logos/logo_empresa_7.webp";
import logo_empresa_8 from "../../assets/logos/logo_empresa_8.webp";
import logo_empresa_9 from "../../assets/logos/logo_empresa_9.webp";
import logo_empresa_10 from "../../assets/logos/logo_empresa_10.webp";
import logo_empresa_11 from "../../assets/logos/logo_empresa_11.webp";
import logo_empresa_13 from "../../assets/logos/logo_empresa_13.webp";
import logo_empresa_14 from "../../assets/logos/logo_empresa_14.webp";
import logo_empresa_15 from "../../assets/logos/logo_empresa_15.webp";
import logo_empresa_16 from "../../assets/logos/logo_empresa_16.webp";
import logo_empresa_17 from "../../assets/logos/logo_empresa_17.webp";
import logo_empresa_18 from "../../assets/logos/logo_empresa_18.webp";

export const EmpresasContainer = () => {
  const slideImages = [
    {
      imgUrl: logo_empresa_1,
    },
    {
      imgUrl: logo_empresa_2,
    },
    {
      imgUrl: logo_empresa_3,
    },
    {
      imgUrl: logo_empresa_4,
    },
    {
      imgUrl: logo_empresa_5,
    },
    {
      imgUrl: logo_empresa_7,
    },
    {
      imgUrl: logo_empresa_8,
    },
    {
      imgUrl: logo_empresa_9,
    },
    {
      imgUrl: logo_empresa_10,
    },
    {
      imgUrl: logo_empresa_11,
    },
    {
      imgUrl: logo_empresa_13,
    },
    {
      imgUrl: logo_empresa_14,
    },
    {
      imgUrl: logo_empresa_15,
    },
    {
      imgUrl: logo_empresa_16,
    },
    {
      imgUrl: logo_empresa_17,
    },
    {
      imgUrl: logo_empresa_18,
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
        <div className="md:mx-auto font-overpass text-4xl md:text-6xl md:text-start text-center md:w-1/2 px-5 font-bold md:mr-20">
          Empresas líderes que
          <span className="text-emerald-600"> maximizan </span>
          su potencial con nosotros.
        </div>
        <div className="mx-auto w-auto h-auto mt-4 flex md:ml-36 ">
          <div
            style={{
              backgroundImage: `url(${slideImages[currentIndex].imgUrl}) `,
              backgroundSize: "90%",
              backgroundPosition: "center",
            }}
            className="w-32 h-40 md:w-64 md:h-80 lg:mx-10 md:rounded-2xl text-center bg-no-repeat duration-500 md:shadow-lg"
          ></div>
        </div>
      </section>
    </>
  );
};
