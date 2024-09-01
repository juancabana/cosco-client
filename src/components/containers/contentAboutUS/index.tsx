import React from "react";
import Camp from "@/assets/image 4.png";
import Ellipse from "@/assets/Ellipse 3.png"
import EllipseA from "@/assets/Ellipse_2.svg"

const AboutUs = () => (
  <section className="relative h-section bg-white flex lg:justify-between p-6 sm:p-8 lg:p-32">
    <div className="flex flex-col xl:flex-row max-w-screen-xl w-full items-center justify-between font-roboto gap-8 px-4 sm:px-6 lg:px-8 mx-auto relative z-10 pt-5 xl:pt-0">
      <div className="text-center xl:text-left max-w-xl">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cosco-primary leading-tight">
          Somos
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal text-cosco-secondary mt-4 sm:mt-5">
        tu mercado agrícola en línea, conectando directamente a productores y consumidores. En nuestra plataforma, podrás encontrar una amplia variedad de productos frescos, cosechados en su punto óptimo de maduración. Al comprar en COSCO, no solo disfrutarás de alimentos de la más alta calidad, sino que también estarás apoyando a los agricultores locales y fomentando prácticas agrícolas sostenibles. Únete a nuestra comunidad y descubre una nueva forma de consumir alimentos, más cercana y respetuosa con el medio ambiente.
        </p>
        <div className="flex justify-center xl:justify-start mt-12">
          <a
            className="rounded-full w-fit bg-cosco-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
            href="/"
          >
            Explorar
          </a>
        </div>
        <p className="text-base sm:text-lg md:text-xl font-normal text-cosco-secondary mt-4 sm:mt-5">
      Somos más que un mercado; es un puente entre el campo y tu mesa. Creemos en la importancia de una alimentación sana y sostenible, por eso te ofrecemos la posibilidad de conocer a quienes cultivan tus alimentos y de disfrutar de productos frescos y de temporada. Al elegir COSCO, estás apoyando a una red de agricultores locales comprometidos con la calidad y el cuidado del medio ambiente. Descubrirás sabores auténticos, harás una compra consciente y contribuirás a construir un futuro más sostenible para todos.
      </p>
      </div>
      <div className="hidden xl:flex justify-center items-center w-full xl:w-auto py-6 z-10">
        <img
          src={Camp}
          alt=""
          className="max-w-full h-auto max-h-[620px] rounded-3xl object-cover"
        />
      </div>

    </div>

  </section>
);

export default AboutUs;
