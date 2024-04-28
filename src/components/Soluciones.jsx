import React from "react";
import { NavBar } from "./Layouts/NavBar.jsx";
import { ToggleMenuXL } from "./Layouts/ToggleMenuXL.jsx";
import { Footer } from "../components/Layouts/Footer.jsx";
import { ImageBar } from "../components/Layouts/ImageBar.jsx";
import { CardPricing } from "../components/Soluciones/CardPricing.jsx";
import { EscuelaVR } from "../components/Soluciones/EscuelaVR.jsx";
import { Experiencias } from "../components/Soluciones/Experiencias.jsx";
import { EscuelaRiesgosCriticos } from "../components/Soluciones/EscuelaRiesgosCriticos.jsx";

import soluciones_maxima_cover from "../assets/images/soluciones_maxima_cover.webp";

const Soluciones = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ToggleMenuXL />
      <ImageBar title="Soluciones" imageURL={soluciones_maxima_cover} />
      <EscuelaRiesgosCriticos />
      <section className="flex justify-items-center text-center md:px-20 xl:px-80 ">
        <p className="text-xl font-overpass mt-20 mb-10">
          No esperes más para llevar la
          <span className="text-emerald-600 "> formación </span>de tu empresa al
          siguiente nivel. Suscríbete a Máxima Formación eTraining y aprovecha
          nuestra plataforma de cursos HSEQ para capacitar a tu equipo de
          trabajo de manera eficiente y efectiva. Elige el plan que mejor se
          adapte a tus necesidades y comienza tu viaje hacia un lugar de trabajo
          más seguro y productivo hoy mismo.
        </p>
      </section>
      <div
        className="grid grid-rows-1 xl:grid-cols-3 mx-auto "
        id="cardPricing"
      >
        <div className=" animate-fade-left animate-duration-[3000ms] ">
          <CardPricing
            colorListon="#C0C0C0"
            tituloPlan="PLATA"
            textoBoton="Contáctanos"
            cantidadParticipantes="Cantidad máxima de participantes 30"
            precioOld="$399.000/mes"
            precioNuevo="$199.000/mes Contratando plan anual"
            lista1="Certificados digitales"
            externalLink="https://api.whatsapp.com/send?phone=56983784773&text=Hola!%0AQuiero%20solicitar%20el%20plan%20Maxima"
          />
        </div>
        <div className="animate-fade-left animate-duration-[3000ms] ">
          <CardPricing
            colorListon="#f4cc3c"
            tituloPlan="ORO"
            textoBoton="Contáctanos"
            cantidadParticipantes="Cantidad máxima de participantes 40"
            precioOld="$599.000/mes"
            precioNuevo="$299.000/mes Contratando plan anual"
            lista1="Certificados digitales"
            lista2="Acceso a soporte exclusivo"
            lista3="Riesgos Críticos/VR 15% descuento"
            lista4="Máxima Formación 360° 10% descuento"
            lista5="Máxima Formación FLEX 10% descuento"
            externalLink="https://api.whatsapp.com/send?phone=56983784773&text=Hola!%0AQuiero%20solicitar%20el%20plan%20Maxima"
          />
        </div>
        <div className=" animate-fade-left animate-duration-[3000ms]">
          <CardPricing
            colorListon="#9AC5DB"
            tituloPlan="DIAMANTE"
            textoBoton="Agenda una reunión"
            cantidadParticipantes="Cantidad máxima de participantes 50"
            precioOld="$3.999.000/mes"
            precioNuevo="$1.999.000/mes Contratando plan anual"
            lista1="Certificados digitales y físicos"
            lista2="Acceso a soporte exclusivo"
            lista3="Riesgos Críticos/VR 30% descuento"
            lista4="Máxima Formación 360° 25% descuento"
            lista5="Máxima Formación FLEX 20% descuento"
            lista6="Inducción corporativa e-learning a la medida del cliente"
            lista7="Acceso online y offline en App"
            externalLink="https://calendly.com/maximaformacion/30min"
          />
        </div>
      </div>
      <div id="escuelaVR">
        <EscuelaVR />
      </div>

      <div id="experiencias">
        <Experiencias />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Soluciones;
