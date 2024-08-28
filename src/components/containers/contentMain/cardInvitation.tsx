import React from "react";
import ShapesInverted from "@/assets/ShapesInverted.png";
import ImgCrop from "@/assets/img_section1.png";
import Ellipse from "@/assets/Ellipse_2.svg";

const CardInvitation = () => (
  <section className="relative bg-emerald-50 py-12 md:py-20 overflow-hidden xl:h-section">
    <div className="absolute inset-0 hidden xl:block z-0">
      <img
        src={ShapesInverted}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative flex flex-col xl:flex-row max-w-screen-2xl w-full items-center justify-center xl:justify-between font-roboto gap-25 px-4 sm:px-6 lg:px-8 mx-auto z-10">
      <div className="hidden xl:flex justify-center items-center xl:w-1/2 xl:mr-16 py-6 z-10">
        <img
          src={ImgCrop}
          alt=""
          className="h-auto max-h-[620px] rounded-3xl object-cover"
        />
      </div>
      <div className="text-center xl:text-left w-full xl:w-1/3 z-10 xl:ml-auto">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-4xl lg:text-7xl text-cosco-primary leading-tight">
          Únete a la comunidad
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal text-cosco-secondary mt-4 sm:mt-5">
          ¡Sé parte del comienzo de algo grande! "Únete a la Comunidad" te
          invita a formar parte de nuestra plataforma desde sus primeros pasos.
          Al ser parte de los primeros usuarios, tendrás la oportunidad de dar
          forma a la experiencia y ser parte de una comunidad que valora la
          agricultura local y sostenible. Únete ahora y sé un pionero en esta
          emocionante aventura.
        </p>
        <a
          className="inline-block rounded-full mt-6 bg-cosco-button px-5 py-2.5 text-sm sm:text-base font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
          href="/"
        >
          Explorar
        </a>
      </div>
    </div>
    <img
      src={Ellipse}
      alt=""
      className="absolute -bottom-32 -right-32 md:-bottom-24 md:-right-24 xl:-bottom-[40%] xl:-right-[25%]  z-0"
      
    />
  </section>
);

export default CardInvitation;
