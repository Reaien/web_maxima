import React from "react";
import { NavBar } from "./Layouts/NavBar.jsx";
import { ToggleMenuXL } from "./Layouts/ToggleMenuXL.jsx";
import { Footer } from "../components/Layouts/Footer.jsx";
import { ImageBar } from "../components/Layouts/ImageBar.jsx";
import { CardPricing } from "../components/Layouts/CardPricing.jsx";
import soluciones_maxima_cover from "../assets/soluciones_maxima_cover.webp";

const Soluciones = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ToggleMenuXL />
      <ImageBar title="Soluciones" imageURL={soluciones_maxima_cover} />
      <div className="grid grid-rows-1 md:grid-cols-2">
        <CardPricing
          colorListon="#059669"
          tituloPlan="Máxima"
          subTituloPlan="Plan para empresas enfocado en la seguridad y prevención de riesgos
        experiencia y acceso a material de manera online."
        />
        <CardPricing
          colorListon="#f4cc3c"
          tituloPlan="Versátil"
          subTituloPlan="Plan para empresas que apunta a quienes desean un producto específico de todo nuestro catálogo"
        />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Soluciones;
