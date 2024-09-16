import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const CardMain = () => (
  <section className="flex w-full justify-center bg-white h-section relative overflow-hidden">
    <div className="hidden xl:block absolute h-full w-max">
      <StaticImage
        src="../../../assets/Shapes.webp"
        alt="Lineas"
        loading="eager"
        className="h-full"
        formats={["webp"]}
        quality={100}
      />
    </div>
    <div className="flex max-w-screen-xl w-auto xl:w-full items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl z-10">
        <h1 className="font-extrabold text-5xl md:text-7xl text-cosco-700 leading-none md:text-left">
          Publica y compra
          <small className="text-3xl md:text-4xl font-bold"> cosechas </small>
          <small className="text-3xl md:text-4xl font-bold text-cosco-500">
            o productos agrícolas
          </small>
        </h1>
        <p className="text-lg font-normal text-cosco-600 mt-5">
          Descubre la plataforma que conecta agricultores y consumidores.
          Publica y compra cosechas y productos agrícolas frescos directamente
          de quienes los cultivan. Únete a nuestra comunidad y apoya el comercio
          local y sostenible.
        </p>
        <Link
          className="hidden rounded-full w-fit mt-12 bg-cosco-500 px-5 py-2.5 text-sm font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
          to="/publications"
        >
          Explorar
        </Link>
      </div>
      <div className="hidden h-full xl:flex justify-center items-center py-6 z-10">
        <StaticImage
          src="../../../assets/img_section1.webp"
          alt="imagen principal"
          loading="eager"
          className="h-full max-w-md max-h-[620px] rounded-3xl"
          formats={["webp"]}
          quality={100}
        />
      </div>
    </div>
  </section>
);

export default CardMain;
