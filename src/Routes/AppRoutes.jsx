import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import NuestraMision from "../components/NuestraMision.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/mision" Component={NuestraMision} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
