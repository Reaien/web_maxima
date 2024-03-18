import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import PorQueMaxima from "../components/PorQueMaxima.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/maxima" Component={PorQueMaxima} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
