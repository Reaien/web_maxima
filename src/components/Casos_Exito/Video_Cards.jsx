import React from "react";
import CardVideoExito from "../Layouts/CardVideoExito";

const Video_Cards = () => {
  return (
    <>
      <section>
        <div className="grid grid-rows-1 grid-cols-1 text-center mt-16 font-semibold">
          <div className="mb-16">
            <p className="text-7xl font-overpass">
              Historias y experiencias de nuestros clientes
            </p>
            <p className="text-3xl font-overpass mt-3">
              Sé parte de esta
              <span className="text-emerald-500"> gran historia</span> en la que
              tú eres protagonista
            </p>
          </div>

          <div className="grid grid-rows-1 xl:grid-cols-3  justify-between items-center mx-auto gap-40 mt-5">
            <CardVideoExito />
            <CardVideoExito />
            <CardVideoExito />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video_Cards;
