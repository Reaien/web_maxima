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
      <CardPricing />
      <Footer />
    </React.Fragment>
  );
};

export default Soluciones;
