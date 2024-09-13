import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const CardMain = () => (
  <section className="flex w-full justify-center bg-white h-section relative overflow-hidden">
    <div className="hidden xl:block absolute h-full w-max">
      <StaticImage
        src="../../../assets/Shapes.png"
        alt="Lineas"
        loading="eager"
        className="h-full"
        formats={["webp"]}
        quality={100}
      />
    </div>
    
    <div className="flex max-w-screen-xl w-full text-center items-center justify-center xl:justify-between xl:text-start gap-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl z-10">
        <h1 className="font-extrabold text-4xl md:text-7xl xl:text-7xl text-cosco-700 ">
          Publica y compra
          <br/>
          <small className="text-2xl md:text-4xl xl:text-4xl font-bold"> cosechas </small>
          <small className="text-2xl md:text-4xl xl:text-4xl font-bold text-cosco-500">
            o productos agrícolas
          </small>
        </h1>
        <p className="text-lg font-normal text-cosco-600 mt-5 mb-12">
          Descubre la plataforma que conecta agricultores y consumidores.<br/>
          Publica y compra cosechas y productos agrícolas frescos <br/>directamente
          de quienes los cultivan. Únete a nuestra comunidad <br />y apoya el comercio
          local y sostenible.
        </p>
        <a
        className="rounded-full w-fit bg-cosco-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
          href="/"
        >
          Explorar
        </a>
      </div>
      <div className="hidden h-full xl:flex justify-center items-center py-6 z-10">
        <StaticImage
          src="../../../assets/img_section1.png"
          alt="imagen principal"
          loading="eager"
          className="h-lg max-w-md 2xl:max-h-[620px] rounded-3xl"
          formats={["webp"]}
          quality={100}
        />
      </div>
    </div>
  </section>
);

export default CardMain;