import { Link, type PageProps } from "gatsby";
import React, { type FC } from "react";

import backgroundImage from "@/assets/login-image.jpg";
import logo from "@/assets/cosco-white.svg";
import logoWhite from "@/assets/cosco.svg";

import { useForm } from "react-hook-form";

const loginPage: FC<PageProps> = () => {
  const { register } = useForm();

  const login = (): void => {
    alert("Logged");
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div
          className="hidden lg:block lg:w-2/3 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-15"></div>

          <div className="flex items-center h-full px-20 relative z-10">
            <div>
              <Link className="block text-teal-600 h-12" to="/">
                <span className="sr-only">Home</span>
                <img className="h-full" src={logo} alt="" />
              </Link>

              <p className="max-w-xl mt-3 text-gray-300">
                ¡Sé parte del comienzo de algo grande! "Únete a la Comunidad".
                Te invitamos a formar parte de nuestra plataforma desde sus
                primeros pasos. Al ser parte de los primeros usuarios, tendrás
                la oportunidad de dar forma a la experiencia y ser parte de una
                comunidad que valora la agricultura local y sostenible. Únete
                ahora y sé un pionero en esta emocionante aventura.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <Link
                className="w-full text-teal-600 h-10 flex justify-center"
                to="/"
              >
                <span className="sr-only">Home</span>
                <img className="h-full" src={logoWhite} alt="" />
              </Link>
              <h2 className="mt-10 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                Inicia sesión en tu cuenta
              </h2>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Correo electrónico
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-green-400 focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 "
                    >
                      Contraseña
                    </label>
                    {/* <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </a> */}
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-green-400 focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cosco-500 rounded-md hover:bg-cosco-400 focus:outline-none focus:bg-cosco-400 focus:ring focus:ring-cosco-300 focus:ring-opacity-50">
                    Iniciar sesión
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                ¿No tienes una cuenta?{" "}
                {/* <a
                  href="#"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Regístrate
                </a> */}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
