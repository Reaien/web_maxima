import React from "react";
import { NavBar } from "./NavBar.jsx";
import { ToggleMenuXL } from "./ToggleMenuXL.jsx";
import NuestraMision from "./NuestraMision.jsx";
import { ManagerProposal } from "./ManagerProposal.jsx";

const PorQueMaxima = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ToggleMenuXL />
      <NuestraMision />
      <ManagerProposal />
    </React.Fragment>
  );
};

export default PorQueMaxima;
