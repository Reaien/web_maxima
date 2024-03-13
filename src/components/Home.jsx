import React from "react";
import { NavBar } from "./NavBar.jsx";
import { Carousel } from "./Carousel.jsx";
import { ToggleMenuXL } from "./ToggleMenuXL.jsx";
import { Contactanos } from "./Contactanos.jsx";
import { KPI } from "./KPI.jsx";
import { EmpresasContainer } from "./EmpresasContainer.jsx";
import { TestimonioCliente } from "./TestimonioCliente.jsx";
import { TestimonioEmpleado } from "./TestimonioEmpleado.jsx";
import { SimuladorContent } from "./SimuladorContent.jsx";
import { BlogContent } from "./BlogContent.jsx";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ToggleMenuXL />
      <Carousel />
      <KPI />
      <EmpresasContainer />
      <SimuladorContent />
      <TestimonioCliente />
      <TestimonioEmpleado />
      <div id="blog-content">
        <BlogContent />
      </div>
      <Contactanos />
    </React.Fragment>
  );
};

export default Home;
