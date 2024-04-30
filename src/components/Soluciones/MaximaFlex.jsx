import React from "react";
import { Check } from "../icons/Check";
import flex_imagen from "../../assets/images/maxima_flex.webp";

export const MaximaFlex = () => {
  return (
    <>
      <section className="font-overpass font-bold text-7xl flex justify-center">
        Máxima Formación{" "}
        <span className="italic font-bold font-overpass text-emerald-600">
          FLEX
        </span>
        <div></div>
      </section>
      <section className="grid md:grid-cols-12 mt-28 mb-32">
        <div className="md:col-span-4 mx-auto ml-20">
          <div className="font-bold text-4xl font-overpass">
            Carácteristicas Principales
          </div>
          <ul>
            <li className="flex flex-col mb-10">
              <div className="flex">
                <Check className="text-emerald-600 mr-4 text-4xl w-5 mb-1" />
                <p className="font-overpass font-bold">Personalización Total</p>
              </div>
              <p className="font-overpass ml-10">
                Diseñamos programas de formación a medida que se adaptan a tus
                requerimientos internos o a las exigencias de tus mandantes.
                Desde el contenido del curso hasta el formato de entrega, cada
                aspecto se personaliza para satisfacer tus necesidades
                específicas.
              </p>
            </li>
            <li className="flex flex-col mb-10">
              <div className="flex">
                <Check className="text-emerald-600 mr-4 text-4xl w-5 mb-1" />
                <p className="font-overpass font-bold">Variedad de formatos</p>
              </div>
              <p className="font-overpass ml-10">
                Ofrecemos una amplia gama de opciones de formación, incluyendo
                capacitación presencial, en línea o una combinación de ambos.
                Esto te permite elegir el formato que mejor se adapte a las
                preferencias y disponibilidad de tus empleados.
              </p>
            </li>
            <li className="flex flex-col mb-10">
              <div className="flex">
                <Check className="text-emerald-600 mr-4 text-4xl w-5 mb-1" />
                <p className="font-overpass font-bold">Horarios flexibles</p>
              </div>
              <p className="font-overpass ml-10">
                Entendemos que la disponibilidad de tiempo puede ser un desafío,
                por lo que ofrecemos horarios flexibles que se ajustan a la
                dinámica de tu empresa. Ya sea durante el horario laboral o
                fuera de él, nos adaptamos a tus necesidades.
              </p>
            </li>
            <li className="flex flex-col mb-10">
              <div className="flex">
                <Check className="text-emerald-600 mr-4 text-4xl w-5 mb-1" />
                <p className="font-overpass font-bold">
                  Amplio abanico de temáticas
                </p>
              </div>
              <p className="font-overpass ml-10">
                Desde seguridad en el trabajo hasta habilidades de liderazgo,
                ofrecemos una variedad de temáticas que cubren una amplia gama
                de áreas de formación. Sea cual sea el área en la que necesites
                capacitación, estamos aquí para ayudarte.
              </p>
            </li>
          </ul>
        </div>
        <div className="md:col-span-8 mx-auto">
          <p className="text-5xl font-bold font-overpass mb-5">
            ¿Que es Máxima Formación FLEX?
          </p>
          <p className="text-slate-600 w-[800px] text-center ">
            Maxima Formación Flex es mucho más que un simple programa de
            formación. Es una solución flexible que te permite diseñar y
            personalizar la formación de acuerdo con tus objetivos comerciales y
            las necesidades de tu industria. Ya sea que necesites implementar
            programas de formación a medida, realizar inducciones corporativas o
            de ingreso a faena, o simplemente mejorar la capacitación interna de
            tus empleados, Maxima Formación Flex te ofrece la flexibilidad
            necesaria para lograrlo
          </p>
          <img
            src={flex_imagen}
            alt="imagen_flex"
            className="w-4/6 mx-auto mt-14"
          />
        </div>
      </section>
    </>
  );
};
