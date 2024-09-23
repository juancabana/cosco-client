import React, { useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/shadcn/ui/use-toast";

const ContactUsForm = () => {
  const refForm = useRef<HTMLFormElement>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.GATSBY_EMAILJS_SERVICE_ID;
    const templateId = process.env.GATSBY_EMAILJS_TEMPLATE_ID;

    const publicKey = process.env.GATSBY_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || !refForm.current) return;

    emailjs.sendForm(serviceId, templateId, refForm.current, publicKey!).then(
      (result) => {
        console.log(result.text);
        if (refForm.current) refForm.current.reset();
        toast({
          title: "Éxito",
          description: "El mensaje ha sido enviado",
        });

      },
      (error) => {
        console.log(error.text);
        toast({
          title: "Error",
          description: "Ocurrió un error al enviar el mensaje",
          variant: "destructive",
        });
      }
    );
  };

  return (
    <section className="bg-cosco-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-cosco-800 mb-4">
        Envíanos un Mensaje
      </h2>
      <form
        className="space-y-4"
        ref={refForm}
        action=""
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-cosco-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Escribe tu nombre aquí"
            className="mt-1 p-2 block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-cosco-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Escribe tu mensaje aquí"
            className="mt-1 p-2  block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cosco-600 hover:bg-cosco-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Enviar Mensaje
          <Send className="ml-2 h-5 w-5" />
        </button>
      </form>
    </section>
  );
};

export default ContactUsForm;
