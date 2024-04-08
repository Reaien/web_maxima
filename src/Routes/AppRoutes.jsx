import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import PorQueMaxima from "../components/PorQueMaxima.jsx";
import Soluciones from "../components/Soluciones.jsx";
import CasosDeExito from "../components/CasosDeExito.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/maxima" Component={PorQueMaxima} />
        <Route exact path="/casos_exito" Component={CasosDeExito} />
        <Route exact path="/soluciones" Component={Soluciones} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
