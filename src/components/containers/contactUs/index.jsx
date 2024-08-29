import React from "react";
import Col from "@/assets/Col.png";
import Ellipse from "@/assets/Ellipse 21.png"

const ContentUs = () => (
  <>
    <div className="relative flex flex-col lg:flex-row justify-center gap-8 lg:gap-24 pt-10 lg:pt-20 mb-10 px-4 lg:px-0 bg-white">
    <img
      src={Ellipse}
      alt=""
      className="absolute -top-[6%] right-0 "
    />
      <div className="w-auto text-center lg:text-left">
        <h1 className="font-bold text-4xl lg:text-8xl text-emerald-900">
          Estamos aquí para<br />ayudarte
        </h1>
      </div>
      <form
  action=""
  className="bg-white p-6 lg:p-12 w-full max-w-[40rem] rounded-3xl shadow-[0px_4px_15px_rgba(0,0,0,0.2)] space-y-6 z-10 mt-8 lg:mt-0"
>

        <h2 className="text-3xl lg:text-5xl font-bold text-emerald-900">Contáctanos</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 lg:p-4 border border-emerald-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="text"
            placeholder="Apellidos"
            className="p-3 lg:p-4 border border-emerald-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="text"
            placeholder="Teléfono"
            className="p-3 lg:p-4 border border-emerald-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="text"
            placeholder="Correo Electrónico"
            className="p-3 lg:p-4 border border-emerald-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <textarea
            placeholder="Mensaje"
            className="p-3 lg:p-4 h-32 lg:h-52 border border-emerald-900 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="accent-emerald-900"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Acepto los <a href="/terminos" className="text-[#14B8A6] no-underline font-semibold">términos y condiciones</a> y la <a href="/terminos" className="text-[#14B8A6] no-underline font-semibold"> politica de privacidad</a>
            </label>
          </div>
          <button
            type="submit"
            className="bg-emerald-900 text-white font-semibold py-3 rounded-md hover:bg-emerald-700 transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
      <img
        src={Col}
        alt=""
        className="hidden lg:block absolute bottom-14 w-full object-cover z-0"
      />
    </div>
  </>
);

export default ContentUs;
