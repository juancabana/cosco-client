import React, { useEffect, type FC } from "react";
import { Link } from "gatsby";

import ScreenLoader from "@/components/ui/screenLoader";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import TextField from "@/components/ui/textField";
import { type PayloadRegister } from "@/services/actions";

import useRegisterMutation from "@/hooks/mutations/useRegisterMutation";
import { useErrorModal } from "@/components/ui/ErrorModal";

const RegisterForm: FC = () => {
  const { mutate, isPending, error } = useRegisterMutation();
  const { openModal, RenderedModal } = useErrorModal();

  const methods = useForm<PayloadRegister>();

  const onSubmit: SubmitHandler<PayloadRegister> = async (
    data: PayloadRegister
  ) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    mutate(data);
  };

  useEffect(() => {
    if (error) {
      openModal();
    }
  }, [error]);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit) as Fn}>
          <TextField
            label="Correo electrónico"
            name="email"
            className="xl:mt-0 2xl:mt-6"
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
            className="xl:mt-1.5 2xl:mt-6"
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
          <div className="flex gap-4">
            <TextField
              label="Primer nombre"
              name="firstName"
              className="xl:mt-1.5 2xl:mt-6"
              required
            />
            <TextField
              label="Segundo nombre"
              name="secondName"
              className="xl:mt-1.5 2xl:mt-6"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              label="Primer apellido"
              name="lastName"
              className="xl:mt-1.5 2xl:mt-6"
              required
            />
            <TextField
              label="Segundo apellido"
              name="secondLastName"
              className="xl:mt-1.5 2xl:mt-6"
              defaultValue={null}
            />
          </div>
          <TextField
            label="Teléfono"
            name="phoneNumber"
            type="tel"
            required
            className="xl:mt-1.5 2xl:mt-6"
            placeholder="Agregar número de teléfono"
            pattern={{
              value: /^\d{10}$/,
              message: "El teléfono no es valido",
            }}
          />
          <div className="mt-6">
            <button
              type="submit"
              disabled={isPending}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cosco-500 rounded-md hover:bg-cosco-400 focus:outline-none focus:bg-cosco-400 focus:ring focus:ring-cosco-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Regístrate
            </button>
          </div>
        </form>
      </FormProvider>

      <p className="mt-6 text-sm text-center text-gray-400">
        ¿Ya tienes una cuenta?{" "}
        <Link
          to="/auth/login"
          className="text-blue-500 focus:outline-none focus:underline hover:underline"
        >
          Inicia sesión
        </Link>
        .
      </p>
      <ScreenLoader isVisible={isPending} />
      <RenderedModal title="¡Ups!" errorMessage="Error al registrar usuario" />
    </>
  );
};

export default RegisterForm;
