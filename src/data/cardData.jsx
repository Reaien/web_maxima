import FotoFrancisco from "../assets/clientes_casos_exito/foto_cliente_1.webp";

import FotoEstefany from "../assets/clientes_casos_exito/foto_cliente_2.webp";

import FotoUnknown from "../assets/clientes_casos_exito/foto_cliente_unknown.webp";
import caso_cliente_1 from "../assets/video/caso_cliente.mp4";
import caso_cliente_2 from "../assets/video/caso_cliente_2.mp4";
import caso_cliente_3 from "../assets/video/caso_cliente_3.mp4";

export const cardData = [
  {
    id: 1,
    nombre: "Francisco Yañez",
    cargo: "Coordinador HSEQ",
    empresa: "Power Electronics",
    frase:
      "El equipo humano detrás de Máxima te entiende, y han respondido a nuestros requerimientos como empresa de forma excelente.",
    foto: FotoFrancisco,
    video: caso_cliente_1,
  },
  {
    id: 2,
    nombre: "Estefany Aravena.",
    cargo: "Analista de formación y desarrollo organizacional",
    empresa: "Promet",
    frase:
      "Destaco la capacidad de respuesta de Máxima la preocupación y profesionalismo.",
    foto: FotoEstefany,
    video: caso_cliente_2,
  },
  {
    id: 3,
    nombre: "Nicolás Puentes",
    cargo: "Jefe de prevención de riesgos",
    empresa: "Coxabengoa",
    frase:
      "La simplicidad que entrega Máxima para trabajar en conjunto y llevar a cabo las capacitaciones que requerimos.",
    foto: FotoUnknown,
    video: caso_cliente_3,
  },
];
