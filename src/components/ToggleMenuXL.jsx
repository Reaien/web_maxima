import React from "react";
export const ToggleMenuXL = ({ menuVisible, setMenuVisible, titulo }) => {
  return (
    <>
      <section>
        <div
          className={` ${menuVisible ? "" : "hidden"} animate-flip-down animate-duration-[800ms] flex justify-center border-t-[1px] border-t-zinc-600/20 absolute z-10 w-full`}
        >
          <div className="w-full flex justify-center md:w-5/6 bg-white h-[550px] rounded-b-3xl shadow-lg">
            <div className="mt-10 w-96 ">
              <p className=" text-2xl font-normal font-overpass flex justify-center animate-fade animate-duration-[2000ms]">
                {titulo}
              </p>
              <p className="mt-4 border-b w-full border-black/20 "></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
