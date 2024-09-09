import React from "react";
import Camp from "@/assets/image_4.png";
import Ellipse from "@/assets/Ellipse_3.png"
import Ellipse2 from "@/assets/Ellipse_22.png"

const AboutUs = () => (
  <>
    <img
      src={Ellipse}
      alt=""    
      className="absolute hidden xl:block -top-96 right-[80rem] z-10"
    />
    <section className="relative h-section bg-white flex lg:justify-between p-6 sm:p-20">
      <div className="flex flex-col xl:flex-row max-w-screen-3xl w-full justify-between font-roboto sm:px-6 lg:px-8 relative z-10">
        <div className="text-center xl:text-left max-w-4xl">
          <h1 className="font-extrabold text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-cosco-700 leading-tight pb-8">
            Somos
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-normal text-cosco-650 mt-4 sm:mt-5">
            tu mercado agrícola en línea, conectando directamente a productores y consumidores. En nuestra plataforma, podrás encontrar una amplia variedad de productos frescos, cosechados en su punto óptimo de maduración. Al comprar en COSCO, no solo disfrutarás de alimentos de la más alta calidad, sino que también estarás apoyando a los agricultores locales y fomentando prácticas agrícolas sostenibles. Únete a nuestra comunidad y descubre una nueva forma de consumir alimentos, más cercana y respetuosa con el medio ambiente.
          </p>
          <div className="flex justify-center xl:justify-start my-12">
            <a
              className="rounded-full w-fit bg-cosco-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
              href="/"
            >
              Explorar
            </a>
          </div>
          <p className="text-base sm:text-lg md:text-2xl font-normal text-cosco-600 mt-4 sm:mt-5">
            Somos más que un mercado; es un puente entre el campo y tu mesa. Creemos en la importancia de una alimentación sana y sostenible, por eso te ofrecemos la posibilidad de conocer a quienes cultivan tus alimentos y de disfrutar de productos frescos y de temporada. Al elegir COSCO, estás apoyando a una red de agricultores locales comprometidos con la calidad y el cuidado del medio ambiente. Descubrirás sabores auténticos, harás una compra consciente y contribuirás a construir un futuro más sostenible para todos.
          </p>
        </div>
        <img
          src={Camp}
          alt=""
          className="hidden xl:block max-w-full h-auto max-h-[100rem] rounded-3xl object-cover shadow-[0_10px_50px_rgba(0,0,0,0.25)]"
        />
      </div>
      <img
      src={Ellipse2}
      alt=""
      className="absolute hidden xl:block top-[15rem] right-0"
    />
    </section>
  </>
);

export default AboutUs;
