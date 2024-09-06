import React from "react";
import Col from "@/assets/Col.png";
import Ellipse from "@/assets/Ellipse_21.png";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-white h-section relative">
      <img
        src={Ellipse}
        alt=""
        className="absolute hidden xl:block -top-32 right-0 z-10"
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        <h1 className="text-cosco-primary font-bold text-4xl sm:text-6xl lg:text-8xl pt-12 sm:pt-24 lg:ml-20 lg:mr-32">
          Estamos aquí para <br />ayudarte
        </h1>
      </div>

      <form
        className="bg-white 
        absolute sm:right-28 w-full max-w-[40rem] mt-10 lg:-mt-60 p-6 sm:p-10 rounded-3xl shadow-[0px_4px_15px_rgba(0,0,0,0.2)] space-y-6 z-10"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-emerald-900">Contáctanos</h2>

        {/* Inputs con borde más grueso, mayor tamaño y placeholder en color emerald-900 */}
        <input
          type="text"
          placeholder="Nombre"
          className="border-2 border-emerald-900 rounded-md w-full py-4 px-5 placeholder-emerald-900 text-lg"
        />
        <input
          type="text"
          placeholder="Apellidos"
          className="border-2 border-emerald-900 rounded-md w-full py-4 px-5 placeholder-emerald-900 text-lg"
        />
        <input
          type="text"
          placeholder="Teléfono"
          className="border-2 border-emerald-900 rounded-md w-full py-4 px-5 placeholder-emerald-900 text-lg"
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          className="border-2 border-emerald-900 rounded-md w-full py-4 px-5 placeholder-emerald-900 text-lg"
        />

        {/* Textarea para el mensaje más grande */}
        <textarea
          placeholder="Mensaje"
          className="border-2 border-emerald-900 rounded-md w-full py-4 px-5 h-48 placeholder-emerald-900 text-lg resize-none"
        ></textarea>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            className="accent-emerald-900"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            Acepto los <a href="/terminos" className="no-underline font-bold text-[#14B8A6]">términos y condiciones</a> y la <a href="/terminos" className="text-[#14B8A6] no-underline font-bold">política de privacidad</a>
          </label>
        </div>

        {/* Botón más grande */}
        <button
          type="submit"
          className="bg-emerald-900 text-white font-semibold py-4 rounded-md hover:bg-emerald-700 transition duration-300 w-full text-lg"
        >
          Enviar
        </button>
      </form>

      <div>
        <img
          src={Col}
          alt=""
          className="hidden xl:block w-full mt-20"
        />
      </div>
    </section>
  );
};

export default ContactUs;
