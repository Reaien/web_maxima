import React from "react";
import { NavBar } from "./Layouts/NavBar.jsx";
import { Carousel } from "./Home/Carousel.jsx";
import { ToggleMenuXL } from "./Layouts/ToggleMenuXL.jsx";
import { Contactanos } from "./Home/Contactanos.jsx";
import { KPI } from "./Home/KPI.jsx";
import { EmpresasContainer } from "./Home/EmpresasContainer.jsx";
import { TestimonioCliente } from "./Home/TestimonioCliente.jsx";
import { TestimonioEmpleado } from "./Home/TestimonioEmpleado.jsx";
import { SimuladorContent } from "./Home/SimuladorContent.jsx";
import { BlogContent } from "./Home/BlogContent.jsx";
import { Footer } from "./Layouts/Footer.jsx";

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
      <div id="contactanos">
        <Contactanos />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
