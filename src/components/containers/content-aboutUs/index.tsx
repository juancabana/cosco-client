import React from "react";
import Ellipse from "@/assets/Ellipse_3.png"
import Ellipse2 from "@/assets/Ellipse_22.png"
import { StaticImage } from "gatsby-plugin-image";


const AboutUs = () => (
  <>
    <img
      src={Ellipse}
      alt=""    
      className="absolute hidden xl:block -top-96 right-[80rem] z-10"
    />
    <section className="flex pt-12 relative overflow-hidden  bg-white justify-center items-center xl:h-section md:h-section">
    <div className="flex max-w-screen-xl w-full text-center  justify-center xl:justify-between xl:text-start gap-8 px-4 sm:px-6 lg:px-8">
      <div className="xl:max-w-xl z-10">
        <h1 className="font-extrabold text-5xl md:text-7xl xl:tect-7xl text-cosco-700 leading-10">
          Somos
        </h1>
        <p className="text-lg font-normal text-cosco-600 mt-5 mb-8">
        Tu mercado agrícola en línea, conectando directamente a productores y consumidores. En nuestra plataforma, podrás encontrar una amplia variedad de productos frescos, cosechados en su punto óptimo de maduración. Al comprar en COSCO, no solo disfrutarás de alimentos de la más alta calidad, sino que también estarás apoyando a los agricultores locales y fomentando prácticas agrícolas sostenibles. Únete a nuestra comunidad y descubre una nueva forma de consumir alimentos, más cercana y respetuosa con el medio ambiente.
        </p>
        <a
        className="rounded-full w-fit bg-cosco-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900"
          href="/"
        >
          Explorar
        </a>
        <p className="text-lg font-normal text-cosco-600 mt-8 mb-9">
        Somos más que un mercado; es un puente entre el campo y tu mesa. Creemos en la importancia de una alimentación sana y sostenible, por eso te ofrecemos la posibilidad de conocer a quienes cultivan tus alimentos y de disfrutar de productos frescos y de temporada. Al elegir COSCO, estás apoyando a una red de agricultores locales comprometidos con la calidad y el cuidado del medio ambiente. Descubrirás sabores auténticos, harás una compra consciente y contribuirás a construir un futuro más sostenible para todos.
        </p>
      </div>
      <div className="hidden h-full xl:flex justify-center items-center py-12 z-10">
        <StaticImage
          src="../../../assets/image_4.png"
          alt="imagen principal"
          loading="eager"
          className="h-lg max-w-lg 2xl:max-h-[620px] rounded-3xl"
          formats={["webp"]}
          quality={100}
        />
      </div>
    </div>
    <img src={Ellipse2} alt="" className="absolute hidden xl:block -bottom-6 -right-1" />
  </section>
  </>
);

export default AboutUs;
