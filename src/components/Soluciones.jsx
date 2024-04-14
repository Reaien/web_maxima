import React from "react";
import { NavBar } from "./Layouts/NavBar.jsx";
import { ToggleMenuXL } from "./Layouts/ToggleMenuXL.jsx";
import { Footer } from "../components/Layouts/Footer.jsx";
import { ImageBar } from "../components/Layouts/ImageBar.jsx";
import { CardPricing } from "../components/Soluciones/CardPricing.jsx";
import { EscuelaVR } from "../components/Soluciones/EscuelaVR.jsx";
import { Experiencias } from "../components/Soluciones/Experiencias.jsx";

import soluciones_maxima_cover from "../assets/images/soluciones_maxima_cover.webp";

const Soluciones = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ToggleMenuXL />
      <ImageBar title="Soluciones" imageURL={soluciones_maxima_cover} />
      <div className="grid grid-rows-1 md:grid-cols-2 justify-end ">
        <div className="xl:ml-64 animate-fade-right animate-duration-[3000ms]">
          <CardPricing
            colorListon="#059669"
            tituloPlan="Máxima"
            subTituloPlan="Plan para empresas enfocado en la seguridad y prevención de riesgos
            experiencia y acceso a material de manera online."
            textoBoton="Lo quiero"
            lista1="Curso de Prevención en trabajos con altura"
            lista2="Curso de Manejo y uso de extintores"
            lista3="Curso de Seguridad en espacios cerrados"
            lista4="Y mucho más"
            externalLink="https://api.whatsapp.com/send?phone=56983784773&text=Hola!%0AQuiero%20solicitar%20el%20plan%20Maxima"
          />
        </div>
        <div className="xl:mr-64 animate-fade-left animate-duration-[3000ms]">
          <CardPricing
            colorListon="#f4cc3c"
            tituloPlan="Versátil"
            subTituloPlan="Escoge el plan que mas se adecúe a tus necesidades laborales y seguridad de nuestro catálogo de cursos agendando en calendly una reunión especializada."
            textoBoton="Agenda una reunión"
            lista1="Gran catálogo de cursos"
            lista2="La flexibilidad de elegir"
            lista3="Cotización especializada"
            lista4="Asesoría directa con nuestros ejecutivos"
            externalLink="https://calendly.com/maximaformacion/30min"
          />
        </div>
      </div>
      <EscuelaVR />
      <Experiencias />
      <Footer />
    </React.Fragment>
  );
};

export default Soluciones;
