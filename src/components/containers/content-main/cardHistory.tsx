import React from "react";

const CardHistory = () => (
  <div className="flex w-full justify-center bg-white py-20 md:py-40 relative">
    <div className="flex flex-col max-w-screen-xl w-full items-center justify-center font-roboto gap-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center max-w-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cosco-750 leading-tight sm:leading-[4rem] md:leading-[5rem] lg:leading-[6rem]">
        Nuestra Historia
      </h1>
      <p className="text-center text-base sm:text-lg md:text-2xl font-normal text-cosco-450">
        Descubre cómo comenzó nuestra plataforma y la inspiradora historia
        detrás de su creación. Desde los primeros pasos hasta convertirse en una
        comunidad en crecimiento, "Nuestra Historia" te llevará a través del
        viaje de cómo nuestra plataforma se convirtió en la conexión directa
        entre agricultores y consumidores. ¡Acompáñanos en este emocionante
        recorrido!
      </p>
      <div className="flex justify-center xl:justify-start mt-12">
          <a
            className="rounded-full w-fit bg-cosco-750 px-8 py-3 text-lg font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
            href="/"
          >
            Explorar
          </a>
        </div>
    </div>
  </div>
);

export default CardHistory;
