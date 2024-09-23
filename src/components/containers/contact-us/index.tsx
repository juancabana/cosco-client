import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import ContactUsForm from "./contact-us-form";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 flex flex-col justify-center items-center p-4 md:p-8 bg-opacity-75">
      <div className="max-w-4xl w-full space-y-12 bg-white bg-opacity-90 p-8 rounded-xl shadow-lg">
        <header className="text-center">
          <h1 className="text-5xl font-bold text-cosco-800 mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-cosco-700">
            Estamos aquí para ayudarte. No dudes en ponerte en contacto con
            nosotros.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-cosco-800 mb-4">
              Información de Contacto
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-cosco-700">
                <Phone className="h-6 w-6" />
                <span>+57 3053194924</span>
              </div>
              <div className="flex items-center space-x-3 text-cosco-700">
                <Mail className="h-6 w-6" />
                <span>cosco.soporte@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-cosco-700">
                <MapPin className="h-6 w-6" />
                <span>Cra. 84, Cl. 33AA #01, Medellín, Antioquia</span>
              </div>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                Horario de Atención
              </h3>
              <p className="text-yellow-700">
                Lunes a Viernes: 9:00 AM - 6:00 PM
              </p>
              <p className="text-yellow-700">Domingos: 10:00 AM - 2:00 PM</p>
            </div>
          </section>

          <ContactUsForm />
        </div>

        <footer className="pt-8 border-t border-emerald-200 text-center">
          <p className="text-cosco-700">
            COSCO - Conectando Campesinos y Compradores para un Futuro
            Sostenible
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
