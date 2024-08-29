import React from "react";
import ImgCrop from "@/assets/img_section1.png";
import Shapes from "@/assets/Shapes.png";
import Ellipse from "@/assets/Ellipse 21.png"

const CardMain = () => (
  <section className="relative overflow-hidden bg-white py-12 md:py-20 xl:h-section ">
        <img
      src={Ellipse}
      alt=""
      className="absolute -top-[6%] right-0 xl:w-6/12 z-0 md:w-[60%] sm:w-4/5"
    />
    <div className="hidden xl:block absolute inset-0 z-0">
      <img src={Shapes} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="flex flex-col xl:flex-row max-w-screen-xl w-full items-center justify-between font-roboto gap-8 px-4 sm:px-6 lg:px-8 mx-auto relative z-10 pt-5 xl:pt-0">
      <div className="text-center xl:text-left max-w-xl">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cosco-primary leading-tight">
          Publica y compra
          <br />
          <small className="block text-2xl sm:text-3xl md:text-4xl font-bold">cosechas</small>
          <small className="block text-2xl sm:text-3xl md:text-4xl font-bold text-cosco-primary-60">
            o productos agrícolas
          </small>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal text-cosco-secondary mt-4 sm:mt-5">
          Descubre la plataforma que conecta agricultores y consumidores.
          Publica y compra cosechas y productos agrícolas frescos directamente
          de quienes los cultivan. Únete a nuestra comunidad y apoya el comercio
          local y sostenible.
        </p>
        <a
          className="hidden rounded-full w-fit mt-12 bg-cosco-button px-5 py-2.5 text-sm font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
          href="/"
        >
          Explorar
        </a>
      </div>
      <div className="hidden xl:flex justify-center items-center w-full xl:w-auto py-6 z-10">
        <img
          src={ImgCrop}
          alt=""
          className="max-w-full h-auto max-h-[620px] rounded-3xl object-cover"
        />
      </div>
    </div>
  </section>
);

export default CardMain;
