import React from "react";

import {Link} from "gatsby";
import {
  Phone,
  Mail,
  Info,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
<footer className="bg-cosco-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-300">COSCO</h2>
            <p className="text-sm">Conectando Campesinos y Compradores para un Futuro Sostenible</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-300">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-cosco-300 transition-colors flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-cosco-300 transition-colors flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-300">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:3053194924" className="hover:text-cosco-300 transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  305 319 4924
                </a>
              </li>
              <li>
                <a href="mailto:cosco.soporte@gmail.com" className="hover:text-cosco-300 transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  cosco.soporte@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-emerald-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} COSCO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{/* <div className="space-y-4">
  <h3 className="text-lg font-semibold text-yellow-400">Síguenos</h3>
  <div className="flex space-x-4">
    <a href="#" className="hover:text-yellow-400 transition-colors">
      <Facebook className="w-6 h-6" />
    </a>
    <a href="#" className="hover:text-yellow-400 transition-colors">
      <Twitter className="w-6 h-6" />
    </a>
    <a href="#" className="hover:text-yellow-400 transition-colors">
      <Instagram className="w-6 h-6" />
    </a>
    <a href="#" className="hover:text-yellow-400 transition-colors">
      <Linkedin className="w-6 h-6" />
    </a>
  </div>
</div> */}