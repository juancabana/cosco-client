import { Link } from "gatsby";
import React, { type FC } from "react";

import backgroundImage from "@/assets/login-image.jpg";
import logo from "@/assets/cosco-white.svg";
import logoWhite from "@/assets/cosco.svg";

import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login, type PayloadLogin } from "@/services/actions";
import ScreenLoader from "@/components/ui/screenLoader";
import TextField from "@/components/ui/textField";
import ErrorPopupModal from "@/components/ui/errorPopupModal";

const Login: FC = () => {
  const methods = useForm<PayloadLogin>();

  const onSubmit: SubmitHandler<PayloadLogin> = async (data: PayloadLogin) => {
    mutate(data);
  };

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    retry: 0,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <section className="bg-white">
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
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit) as Fn}>
                  <TextField
                    label="Correo electrónico"
                    name="email"
                    placeholder="ejemplo@ejemplo.com.co"
                    required
                    pattern={{
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "El e-mail no es valido",
                    }}
                  />
                  <TextField
                    label="Contraseña"
                    name="password"
                    type="password"
                    placeholder="********"
                    required
                    minLength={{
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    }}
                    maxLength={{
                      value: 50,
                      message:
                        "La contraseña debe tener menos de 50 caracteres",
                    }}
                    pattern={{
                      value:
                        /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,50}/,
                      message:
                        "La contraseña debe tener al menos una mayúscula, una minúscula y un número",
                    }}
                  />
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cosco-500 rounded-md hover:bg-cosco-400 focus:outline-none focus:bg-cosco-400 focus:ring focus:ring-cosco-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </FormProvider>

              <p className="mt-6 text-sm text-center text-gray-400">
                ¿No tienes una cuenta?{" "}
                <a
                  href="/"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Regístrate
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScreenLoader isVisible={isPending} />
      <ErrorPopupModal
        isShow={!!error}
        tittle="Upss"
        message="Ocurrió un error al iniciar sesión, por favor intenta de nuevo"
      />
    </section>
  );
};

export default Login;
