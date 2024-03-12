import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavBar } from "./components/NavBar.jsx";
import { Carousel } from "./components/Carousel.jsx";
import { ToggleMenuXL } from "./components/ToggleMenuXL.jsx";
import { Contactanos } from "./components/Contactanos.jsx";
import { KPI } from "./components/KPI.jsx";
import { EmpresasContainer } from "./components/EmpresasContainer.jsx";
import { TestimonioCliente } from "./components/TestimonioCliente.jsx";
import { TestimonioEmpleado } from "./components/TestimonioEmpleado.jsx";
import { SimuladorContent } from "./components/SimuladorContent.jsx";
import { BlogContent } from "./components/BlogContent.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
