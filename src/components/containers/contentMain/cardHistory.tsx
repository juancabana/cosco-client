import React from "react";

const CardHistory = () => (
  <div className="flex w-full justify-center bg-white py-20 md:py-40 relative">
    <div className="flex flex-col max-w-screen-xl w-full items-center justify-center font-roboto gap-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center max-w-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cosco-primary leading-tight sm:leading-[4rem] md:leading-[5rem] lg:leading-[6rem]">
        Conoce nuestra historia
      </h1>
      <p className="text-center max-w-2xl text-base sm:text-lg md:text-xl font-normal text-cosco-secondary">
        Descubre cómo comenzó nuestra plataforma y la inspiradora historia
        detrás de su creación. Desde los primeros pasos hasta convertirse en una
        comunidad en crecimiento, "Nuestra Historia" te llevará a través del
        viaje de cómo nuestra plataforma se convirtió en la conexión directa
        entre agricultores y consumidores. ¡Acompáñanos en este emocionante
        recorrido!
      </p>
      <a
          className="inline-block rounded-full mt-6 bg-cosco-button px-5 py-2.5 text-sm sm:text-base font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
          href="/"
        >
          Explorar
        </a>
    </div>
  </div>
);

export default CardHistory;
