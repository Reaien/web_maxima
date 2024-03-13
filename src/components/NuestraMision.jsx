import React from "react";
import { NavBar } from "./NavBar.jsx";
import { ToggleMenuXL } from "./ToggleMenuXL.jsx";

const NuestraMision = () => {
  return (
    <>
      <NavBar />
      <ToggleMenuXL />
      <section className="grid grid-rows-1 grid-cols-2">
        <div>div col</div>
        <div>div col</div>
      </section>
    </>
  );
};

export default NuestraMision;
