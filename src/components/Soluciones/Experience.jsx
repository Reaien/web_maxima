import React from "react";
import Inclusive from "../../assets/images/inclusive_corporativo.webp";
import Influencer from "../../assets/images/influencer.webp";
import Team_building from "../../assets/images/team_building.webp";

export const Experience = () => {
  return (
    <>
      <section className="font-bold font-overpass text-5xl md:text-7xl flex justify-center flex-col">
        <div className="text-center">
          Máxima Formación <span className="text-emerald-600">EXPERIENCE</span>
        </div>
        <p className="font-overpass text-sm text-center text-slate-600 md:w-4/6 mx-auto mt-3 mb-10">
          Bienvenido a Experience, programa que reúne una variedad de servicios
          de capacitación para ofrecerte una experiencia integral y de alta
          calidad. Con un enfoque en la excelencia y la diversidad de servicios,
          Experience está diseñado para satisfacer todas tus necesidades de
          formación corporativa en un solo lugar.
        </p>
      </section>
      <section className="grid xl:grid-cols-3  mb-36">
        <div className=" mx-auto  mb-10">
          <img
            src={Inclusive}
            alt="inclusive"
            className="rounded-xl w-[550px] mx-auto"
          />
          <p className="text-emerald-600 font-bold text-3xl font-overpass mt-3 text-center">
            ALL INCLUSIVE CORPORATIVO
          </p>
          <p className="font-overpass font-sm text-slate-600 md:w-[500px]">
            Ofrecemos programas de formación en HSEQ para empresas que buscan
            una experiencia única, combinada con servicios de hospitalidad de
            alta gama. Nuestros cursos se realizan en hoteles de 3 a 5
            estrellas, tanto en Chile como en el extranjero, con todo incluido.
            Los participantes disfrutan de servicios de relajación, masajes,
            acceso a piscina y comida gourmet, garantizando un aprendizaje
            profesional en un ambiente de tranquilidad y comodidad.
          </p>
        </div>
        <div className=" mx-auto mb-10">
          <img
            src={Team_building}
            alt="team_building"
            className="rounded-xl w-[550px] mx-auto"
          />
          <p className="text-emerald-600 font-bold text-3xl font-overpass mt-3 text-center">
            OUTDOOR/TEAM BUILDING
          </p>
          <p className="font-overpass font-sm text-slate-600 md:w-[580px]">
            Diseñamos entrenamientos especializados para promover la seguridad
            laboral, la gestión ambiental y la calidad en entornos al aire
            libre. Con actividades de team building, aventura y recreación en
            terrenos naturales, nuestro programa OUTDOOR aborda desafíos
            específicos, brindando conocimientos y habilidades esenciales para
            un trabajo seguro. Cada programa combina teoría y práctica en un
            entorno natural para una experiencia completa de aprendizaje.
          </p>
        </div>
        <div className=" mx-auto mb-10">
          <img
            src={Influencer}
            alt="influencer"
            className="rounded-xl w-[550px] mx-auto"
          />
          <p className="text-emerald-600 font-bold text-3xl font-overpass mt-3 text-center">
            INFLUENCERS HSEQ
          </p>
          <p className="font-overpass font-sm text-slate-600 md:w-[550px]">
            El programa Influencer HSEQ es una iniciativa innovadora que impulsa
            la transformación en materia de Salud, Seguridad, Medio Ambiente y
            Calidad (HSEQ). Reuniendo a destacados speakers nacionales e
            internacionales, ofrece charlas inspiradoras sobre los desafíos
            actuales y futuros en HSEQ. Nuestros speakers son líderes
            reconocidos en sus campos, aportando amplia experiencia y
            conocimientos especializados. Cada intervención está diseñada para
            informar, inspirar y motivar a adoptar prácticas más seguras,
            sostenibles y de alta calidad en entornos laborales.
          </p>
        </div>
      </section>
    </>
  );
};
