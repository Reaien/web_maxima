import React from "react";
import { NavBar } from "./Layouts/NavBar.jsx";
import { ToggleMenuXL } from "./Layouts/ToggleMenuXL.jsx";
import NuestraMision from "./PorQueMaxima/NuestraMision.jsx";
import { ManagerProposal } from "./PorQueMaxima/ManagerProposal.jsx";
import { Footer } from "../components/Layouts/Footer.jsx";
import { ImageBar } from "../components/Layouts/ImageBar.jsx";
import imagen_mision from "../assets/images/capa_maxima.webp";

const PorQueMaxima = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ToggleMenuXL />
      <ImageBar title="¿Por qué Máxima?" imageURL={imagen_mision} />
      <NuestraMision />
      <ManagerProposal />
      <Footer />
    </React.Fragment>
  );
};

export default PorQueMaxima;
