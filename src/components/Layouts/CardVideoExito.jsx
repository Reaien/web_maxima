import React from "react";
import cliente_prueba from "../../assets/clientes_casos_exito/cliente_prueba.png";

const CardVideoExito = () => {
  return (
    <div className="relative flex flex-col bg-slate-50 h-[550px] w-[400px] shadow-lg rounded-lg">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        src={cliente_prueba}
        alt="cliente"
      />
      <div className=" flex flex-col ml-5 mt-5 align-top items-start max-w-44">
        <p className="font-bold text-xl font-overpass">Francisco Yañez</p>
        <p className="opacity-55 text-sm">Coordinador HSEQ</p>
        <p className="opacity-55 text-sm">Power Electronics</p>
      </div>
      <div className="relative flex flex-col h-[400px] align-bottom items-start justify-end">
        <p className="font-overpass -mb-10 text-7xl opacity-70">"</p>
        <p className="text-black w-[300px] font-overpass pl-3 text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
          atque repellat quibusdam.
        </p>
      </div>
      <span className="relative font-overpass flex justify-end text-7xl w-[200px] h-[30px] opacity-70">
        "
      </span>
      <div className="mb-5 ml-5">
        <button className="relative flex py-3 px-3 mb-3 rounded bg-emerald-600 hover:bg-emerald-500 transition-all duration-400 font-bold text-white ">
          {`Ver caso de éxito >`}
        </button>
      </div>
    </div>
  );
};

export default CardVideoExito;
