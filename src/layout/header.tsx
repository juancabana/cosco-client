import React from "react";
import { Link } from "gatsby";
import logo from "@/assets/cosco.svg";

const options = [
  { name: "Inicio", href: "/" },
  { name: "Publicaciones", href: "/publications" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Contactanos", href: "/contact-us" },
];

const Header = () => {
  return (
    <>
      <header
        className="sticky top-0 z-30 bg-white bg-opacity-15 backdrop-filter backdrop-blur-2xl transition-colors duration-300 ease-in-out"
      >
        <div className="mx-20 flex h-16  items-center justify-between px-5 sm:px-10 lg:px-5">
          <Link className="block text-teal-600" to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <nav aria-label="Global" className="hidden xl:flex xl:flex-1 xl:justify-start pl-10">
            <ul className="flex items-center gap-8 text-sm">
              {options.map((option) => (
                <li key={option.name}>
                  <Link
                    className="text-emerald-900 font-roboto font-medium text-base leading-6 hover:font-bold px-2"
                    activeClassName="border-b-2 border-emerald-800"
                    to={option.href}
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              className="hidden xl:block rounded-full bg-white text-emerald-900 border-2 font-semibold border-emerald-900 px-5 py-2.5 text-base transition hover:bg-emerald-100"
              to="/auth/login"
            >
              Iniciar sesión
            </Link>
            <div className="hidden xl:block">
              <Link
                className="hidden rounded-full bg-[#134E4A] px-5 py-2.5 text-base font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
                to="/auth/register"
              >
                Registrarme
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
