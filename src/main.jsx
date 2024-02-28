import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavBar } from "./components/NavBar.jsx";
import { Carousel } from "./components/Carousel.jsx";
import { ToggleMenuXL } from "./components/ToggleMenuXL.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <ToggleMenuXL />
    <Carousel />
  </React.StrictMode>
);
