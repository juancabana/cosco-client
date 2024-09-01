import { Link } from "gatsby";
import React, { type FC } from "react";

import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { type PayloadLogin } from "@/services/actions";
import ScreenLoader from "@/components/ui/screenLoader";
import TextField from "@/components/ui/textField";
import ErrorPopupModal from "@/components/ui/errorPopupModal";

import useLoginMutation from "@/hooks/mutations/useLoginMutation";

const LoginForm: FC = () => {
  const { mutate, isPending, error } = useLoginMutation();

  const methods = useForm<PayloadLogin>();

  const onSubmit: SubmitHandler<PayloadLogin> = async (data: PayloadLogin) =>
    mutate(data);

  if (error) {
    console.error(error);
  }

  return (
    <>
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
              message: "La contraseña debe tener menos de 50 caracteres",
            }}
            pattern={{
              value: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,50}/,
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
        <Link
          to="/auth/register"
          className="text-blue-500 focus:outline-none focus:underline hover:underline"
        >
          Regístrate
        </Link>
        .
      </p>
      <ScreenLoader isVisible={isPending} />
      <ErrorPopupModal
        isShow={!!error}
        tittle="Upss"
        message="Ocurrió un error al iniciar sesión, por favor intenta de nuevo"
      />
    </>
  );
};

export default LoginForm;
