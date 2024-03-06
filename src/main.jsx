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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <ToggleMenuXL />
    <Carousel />
    <KPI />
    <EmpresasContainer />
    <TestimonioCliente />
    <Contactanos />
  </React.StrictMode>
);
