import React from "react";
import Col from "@/assets/Col.png";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import TextField from "@/components/ui/textField";

interface FormSchema {
  name: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const methods = useForm<FormSchema>({
    mode: "onSubmit"
  });
  const { handleSubmit, formState: { errors } } = methods;

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-white h-section">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start text-center lg:text-left">
        <h1 className="text-cosco-primary font-bold text-4xl sm:text-6xl lg:text-8xl pt-12 sm:pt-24 lg:ml-20 lg:mr-32">
          Estamos aquí para <br />ayudarte
        </h1>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full max-w-[40rem] mt-10 lg:mt-24 p-6 sm:p-10 rounded-3xl shadow-[0px_4px_15px_rgba(0,0,0,0.2)] space-y-6 z-10"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-emerald-900">Contáctanos</h2>
            <TextField
              name="name"
              placeholder="Nombre"
              label=""
              required
              minLength={{
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              }}
              maxLength={50}
            />
            <TextField
              name="lastname"
              placeholder="Apellidos"
              label=""
              required
              minLength={{
                value: 3,
                message: "El apellido debe tener al menos 3 caracteres",
              }}
              maxLength={50}
            />
            <TextField
              name="phoneNumber"
              placeholder="Teléfono"
              label=""
              required
              minLength={10}
              maxLength={15}
            />
            <TextField
              name="email"
              placeholder="Correo Electrónico"
              label=""
              required
              pattern={{
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Ingresa un correo válido",
              }}
            />
            <TextField
              name="message"
              placeholder="Mensaje"
              label=""
              required
              minLength={10}
              maxLength={500}
              textarea
              rows={8}
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="accent-emerald-900"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Acepto los <a href="/terminos" className=" no-underline font-bold text-[#14B8A6] ">términos y condiciones</a> y la <a href="/terminos" className="text-[#14B8A6] no-underline font-bold">política de privacidad</a>
              </label>
            </div>
            <button
              type="submit"
              className="bg-emerald-900 text-white font-semibold py-3 rounded-md hover:bg-emerald-700 transition duration-300 w-full"
            >
              Enviar
            </button>
          </form>
        </FormProvider>
      </div>
      <img
        src={Col}
        alt=""
        className="hidden lg:hidden xl:block absolute bottom-32 w-full object-cover z-0"
      />
    </section>
  );
};

export default ContactUs;
