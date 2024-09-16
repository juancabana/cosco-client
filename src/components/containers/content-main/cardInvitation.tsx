import React from "react";

import Ellipse from "@/assets/Ellipse_2.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const CardInvitation = () => (
  <section className="flex w-full justify-center bg-emerald-50 h-section relative overflow-hidden">
    <div className="hidden xl:block absolute h-full w-max">
      <StaticImage
        src="../../../assets/ShapesInverted.webp"
        alt="Lineas"
        loading="lazy"
        className="h-full"
        formats={["webp"]}
        quality={100}
      />
    </div>
    <div className="flex max-w-screen-xl w-auto xl:w-full items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
      <div className="hidden h-full xl:flex justify-center items-center py-6 z-10 max-h-[620px]">
        <StaticImage
          src="../../../assets/secondImage.webp"
          alt="imagen principal"
          loading="eager"
          className="h-full max-w-md 2xl:max-h-[620px] rounded-3xl"
          formats={["webp"]}
          quality={100}
        />
      </div>
      <div className="max-w-md z-10">
      <h1 className="font-extrabold text-5xl md:text-7xl text-cosco-700 leading-none md:text-left">
      Únete a la comunidad
        </h1>
        <p className="text-lg font-normal text-cosco-600 mt-5">
          ¡Sé parte del comienzo de algo grande! "Únete a la Comunidad" te
          invita a formar parte de nuestra plataforma desde sus primeros pasos.
          Al ser parte de los primeros usuarios, tendrás la oportunidad de dar
          forma a la experiencia y ser parte de una comunidad que valora la
          agricultura local y sostenible. Únete ahora y sé un pionero en esta
          emocionante aventura.
        </p>
        <Link
          className="hidden rounded-full w-fit mt-12 bg-cosco-500 px-5 py-2.5 text-sm font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
          to="auth/register"
        >
          Unirme
        </Link>
      </div>
    </div>
    <img src={Ellipse} alt="" className="absolute -bottom-96 -right-80" />
  </section>
);

export default CardInvitation;
