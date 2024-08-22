import React from "react";

import ShapesInverted from "@/assets/ShapesInverted.png";
import ImgCrop from "@/assets/img_section1.png";
import Ellipse from "@/assets/Ellipse_2.svg";

const CardInvitation = () => (
  <section className="flex w-full justify-center bg-emerald-50 h-section relative overflow-hidden">
    <div className="hidden xl:block absolute h-full w-max">
      <img src={ShapesInverted} alt="" className="h-full" />
    </div>
    <div className="flex max-w-screen-xl w-full items-center justify-between font-roboto gap-8 px-4 sm:px-6 lg:px-8">
      <div className="hidden h-full xl:flex justify-center items-center py-6 z-10">
        <img
          src={ImgCrop}
          alt=""
          className="h-full 2xl:max-h-[620px] rounded-3xl"
        />
      </div>
      <div className="max-w-md z-10">
        <h1 className="font-bold text-4xl text-cosco-primary leading-10">
          Únete a la comunidad
        </h1>
        <p className="text-lg font-normal text-cosco-secondary mt-5">
          ¡Sé parte del comienzo de algo grande! "Únete a la Comunidad" te
          invita a formar parte de nuestra plataforma desde sus primeros pasos.
          Al ser parte de los primeros usuarios, tendrás la oportunidad de dar
          forma a la experiencia y ser parte de una comunidad que valora la
          agricultura local y sostenible. Únete ahora y sé un pionero en esta
          emocionante aventura.
        </p>
        <a
          className="hidden rounded-full w-fit mt-12 bg-cosco-button px-5 py-2.5 text-sm font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
          href="/"
        >
          Explorar
        </a>
      </div>
    </div>
    <img src={Ellipse} alt="" className="absolute -bottom-96 -right-80" />
  </section>
);

export default CardInvitation;
