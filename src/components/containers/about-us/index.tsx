import { Link } from "gatsby";
import { ArrowRight, Leaf, Sprout } from "lucide-react";
import React from "react";

const AboutUs = () => (
  <div className="min-h-section bg-gradient-to-br from-emerald-50 to-white flex flex-col justify-center items-center p-4 md:p-8 bg-opacity-75 ">
    <div className="max-w-3xl w-full space-y-12 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-cosco-800 mb-4">
          Sobre Nosotros
        </h1>
        <p className="text-xl text-cosco-700">
          En COSCO, conectamos a campesinos con compradores para asegurar que
          cada cosecha encuentre su destino.
        </p>
      </header>

      <section className="space-y-8">
        <p className="text-lg text-cosco-700 border-l-4 border-teal-500 pl-4">
          Nuestro objetivo es ayudar a los agricultores a obtener precios justos
          por sus productos, reduciendo intermediarios y desperdicio de
          alimentos.
        </p>

        <div className="bg-cosco-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-cosco-800 mb-3 flex items-center">
            <Sprout className="mr-2 h-6 w-6 text-cosco-600" />
            ¿Qué hacemos?
          </h2>
          <p className="text-cosco-700">
            Facilitamos la venta directa de productos agrícolas. Los campesinos
            pueden publicar sus cosechas, establecer precios y negociar
            directamente con compradores interesados. Nuestra plataforma es
            simple, accesible desde cualquier dispositivo, y diseñada para
            promover la economía local.
          </p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-3 flex items-center">
            <Leaf className="mr-2 h-6 w-6 text-yellow-600" />
            Nuestra misión
          </h2>
          <p className="text-yellow-700">
            Empoderar a los campesinos, conectar comunidades y fomentar un
            comercio más justo y sostenible.
          </p>
        </div>
      </section>

      <footer className="pt-8 border-t border-cosco-200 flex justify-between items-center">
        <Link
          to="/contact-us"
          className="inline-flex items-center text-cosco-600 hover:text-cosco-700 transition-colors text-lg font-medium"
        >
          Contactanos para más información
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link to="/publications" className="flex items-center text-cosco-600">
          <span>Conoce nuestros productos</span>
        </Link>
      </footer>
    </div>
  </div>
);

export default AboutUs;
