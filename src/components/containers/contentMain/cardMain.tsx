import React from "react";
import ImgCrop from "@/assets/img_section1.png";
import Shapes from "@/assets/Shapes.png";

const CardMain = () => (
  <section className="flex w-full justify-center bg-white h-section relative overflow-hidden">
    <div className="hidden xl:block absolute h-full w-max">
      <img src={Shapes} alt="" className="h-full" />
    </div>
    <div className="flex max-w-screen-xl w-full items-center justify-between font-roboto gap-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl z-10">
        <h1 className="font-extrabold text-7xl text-cosco-primary leading-10">
          Publica y compra
          <small className="text-4xl font-bold"> cosechas </small>
          <small className="text-4xl font-bold text-cosco-primary-60">
            o productos agrícolas
          </small>
        </h1>
        <p className="text-lg font-normal text-cosco-secondary mt-5">
          Descubre la plataforma que conecta agricultores y consumidores.
          Publica y compra cosechas y productos agrícolas frescos directamente
          de quienes los cultivan. Únete a nuestra comunidad y apoya el comercio
          local y sostenible.
        </p>
        <a
          className="hidden rounded-full w-fit mt-12 bg-cosco-button-950 px-5 py-2.5 text-sm font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
          href="/"
        >
          Explorar
        </a>
      </div>
      <div className="hidden h-full xl:flex justify-center items-center py-6 z-10">
        <img
          src={ImgCrop}
          alt=""
          className="h-full 2xl:max-h-[620px] rounded-3xl"
        />
      </div>
    </div>
  </section>
);

export default CardMain;
