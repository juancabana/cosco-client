import React from "react";
import ImgCrop from "@/assets/shane-rounce-DNkoNXQti3c-unsplash 2 (1).png";
import ShapesInverted from "@/assets/ShapesInverted.png";
import Ellipse from "@/assets/Ellipse_22.png"

const CardMain = () => (
  <section className="relative xl:h-section bg-emerald-50 flex lg:justify-between p-6 sm:p-20">
    <div className="absolute inset-0 hidden xl:block z-0">
      <img
        src={ShapesInverted}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col xl:flex-row max-w-screen-3xl w-full items-center justify-between font-roboto sm:px-6 lg:px-8 relative z-10">
      <div className="hidden xl:flex   xl:w-1/2 xl:mr-16 py-6 z-10">
        <img
          src={ImgCrop}
          alt=""
         className="w-[38rem] h-auto max-h-[50rem] rounded-3xl object-cover shadow-[0_10px_50px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div className="text-center xl:text-left w-full xl:w-1/3 z-10 xl:ml-auto">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-5xl lg:text-7xl text-cosco-primary leading-tight">
          Únete a la comunidad
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-normal text-cosco-secondary mt-4 sm:mt-5">
          ¡Sé parte del comienzo de algo grande! "Únete a la Comunidad" te
          invita a formar parte de nuestra plataforma desde sus primeros pasos.
          Al ser parte de los primeros usuarios, tendrás la oportunidad de dar
          forma a la experiencia y ser parte de una comunidad que valora la
          agricultura local y sostenible. Únete ahora y sé un pionero en esta
          emocionante aventura.
        </p>
        <div className="flex justify-center xl:justify-start mt-12">
          <a
            className="rounded-full w-fit bg-cosco-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
            href="/"
          >
            Unirme
          </a>
        </div>
      </div>
    </div>
    <img
      src={Ellipse}
      alt=""
      className="absolute hidden xl:block top-[15.5rem] right-0"
    />
  </section>
);

export default CardMain;
