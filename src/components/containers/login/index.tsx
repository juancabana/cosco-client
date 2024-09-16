import { Link } from "gatsby";
import React, { type FC } from "react";

import backgroundImage from "@/assets/img_login.webp";
import logo from "@/assets/cosco-white.svg";
import logoWhite from "@/assets/cosco.svg";

import { StaticImage } from "gatsby-plugin-image";

import LoginForm from "./loginForm";

const Login: FC = () => {
  return (
    <section className="bg-white">
      <div className="flex justify-center h-auto md:h-screen ">
        <div
          className="hidden lg:block lg:w-2/3 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <StaticImage
            src="../../../assets/img_login.webp"
            alt="Background"
            loading="eager"
            className="absolute h-full"
            formats={["webp"]}
          />
          <div className="absolute inset-0 bg-black opacity-15"></div>

          <div className="absolute flex items-center h-full top-0 left-0 px-20 z-10">
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

        <div className="flex items-center w-full h-full max-w-md px-6 mx-auto lg:w-2/6 p-4 py-8">
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
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
