import React from "react";
import ImgCrop from "@/assets/img_section1.png";
import Shapes from "@/assets/Shapes.png";

const CardMain = () => (
  <section className="relative xl:h-section bg-white flex lg:justify-between p-6 sm:p-20">
    <div className="hidden xl:block absolute inset-0 z-0">
      <img src={Shapes} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="flex flex-col xl:flex-row max-w-screen-3xl w-full items-center justify-between font-roboto sm:px-6 lg:px-8 relative z-10">
      <div className="text-center xl:text-left max-w-4xl">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-cosco-750 leading-tight">
          Publica y compra
          <br/>
          <small className="text-2xl sm:text-3xl md:text-5xl font-bold"> cosechas </small>
          <small className="text-2xl sm:text-3xl md:text-5xl font-bold text-cosco-400">
            o productos agrícolas
          </small>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl max-w-2xl font-normal text-cosco-600 mt-4 sm:mt-5">
          Descubre la plataforma que conecta agricultores y consumidores.
          Publica y compra cosechas y productos agrícolas frescos directamente
          de quienes los cultivan. Únete a nuestra comunidad y apoya el comercio
          local y sostenible.
        </p>
        <div className="flex justify-center xl:justify-start mt-12">
          <a
            className="rounded-full w-fit bg-cosco-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
            href="/"
          >
            Explorar
          </a>
        </div>
      </div>
      <div className="hidden xl:flex justify-center items-center w-full xl:w-auto py-6 z-10">
  <img
    src={ImgCrop}
    alt=""
    className="hidden xl:block max-w-full h-auto max-h-[50rem] rounded-3xl object-cover shadow-[0_10px_50px_rgba(0,0,0,0.25)]"
  />
</div>
    </div>
  </section>
);

export default CardMain;
