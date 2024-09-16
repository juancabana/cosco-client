import { Link } from "gatsby";
import React from "react";

const CardHistory = () => (
  <div className="flex w-full justify-center bg-white py-40 relative">
    <div className="flex flex-col max-w-screen-lg w-full items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
      <h1 className="font-extrabold text-center text-5xl md:text-7xl text-cosco-700 leading-none xl:text-left">
        Conoce nuestra historia
      </h1>
      <p className="text-lg font-normal text-cosco-600 mt-5 text-center">
      Descubre cómo comenzó nuestra plataforma y la inspiradora historia
        detrás de su creación. Desde los primeros pasos hasta convertirse en una
        comunidad en crecimiento, "Nuestra Historia" te llevará a través del
        viaje de cómo nuestra plataforma se convirtió en la conexión directa
        entre agricultores y consumidores. ¡Acompáñanos en este emocionante
        recorrido!
      </p>
      <Link
        className="hidden rounded-full w-fit mt-4 bg-cosco-500 px-5 py-2.5 text-xl font-medium  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
        to="/about-us"
      >
        Explorar
      </Link>
    </div>
  </div>
);

export default CardHistory;
