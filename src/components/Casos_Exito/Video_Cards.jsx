import React from "react";
import CardVideoExito from "../Layouts/CardVideoExito";
import { cardData } from "../../data/cardData.jsx";

const Video_Cards = () => {
  return (
    <>
      <section>
        <div className="grid grid-rows-1 grid-cols-1 text-center mt-16 font-semibold">
          <div className="mb-16">
            <p className="text-5xl xl:text-7xl font-overpass">
              Historias y experiencias de nuestros clientes
            </p>
            <p className="italic text-3xl font-overpass mt-3">
              Sé parte de esta
              <span className="text-emerald-500"> gran historia</span> en la que
              juntos somos protagonistas
            </p>
          </div>

          <div className="grid grid-rows-1 xl:grid-cols-3  justify-between items-center mx-auto gap-40 mt-5">
            {cardData.map((card) => {
              return (
                <CardVideoExito
                  key={card.id}
                  nombre={card.nombre}
                  cargo={card.cargo}
                  empresa={card.empresa}
                  frase={card.frase}
                  foto={card.foto}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Video_Cards;
