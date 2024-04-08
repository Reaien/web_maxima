import { NavBar } from "./Layouts/NavBar.jsx";
import { ToggleMenuXL } from "./Layouts/ToggleMenuXL.jsx";
import { Footer } from "../components/Layouts/Footer.jsx";
import { ImageBar } from "../components/Layouts/ImageBar.jsx";
import casos_exito_cover from "../assets/casos_exito_cover.webp";

import React from "react";

const CasosDeExito = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ToggleMenuXL />
      <ImageBar title="Casos de éxito" imageURL={casos_exito_cover} />
      <Footer />
    </React.Fragment>
  );
};

export default CasosDeExito;
