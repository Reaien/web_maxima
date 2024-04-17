import React from "react";
import { cardBlogData } from "../../data/cardBlogData.jsx";
import { CardBlog } from "../Layouts/CardBlog";

export const BlogContent = () => {
  return (
    <>
      <section>
        <div className="grid grid-rows-1 items-center justify-center text-center">
          <p className="text-6xl  xl:pl-6 font-bold font-overpass">
            <span className="text-emerald-600 ">Blog</span> <br />
            Últimas novedades
          </p>
        </div>
      </section>
      <section className="grid grid-rows-1 xl:grid-cols-3 mt-10 mx-auto justify-center">
        {/* función que itera sobre la data de cardBlog */}
        {cardBlogData.map((cardBlog) => {
          return (
            <CardBlog
              key={cardBlog.id}
              titulo={cardBlog.titulo}
              parrafo={cardBlog.parrafo}
              foto={cardBlog.foto}
              fecha={cardBlog.fecha}
            />
          );
        })}
      </section>
    </>
  );
};
