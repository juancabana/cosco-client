import React from "react";
<<<<<<< HEAD
import { Link } from "gatsby";
import logo from "@/assets/cosco.svg";

const options = [
  { name: "Inicio", href: "/" },
  { name: "Publicaciones", href: "/publications" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Contactanos", href: "/contact-us" },
];

const Header = () => {
=======

import logo from "@/assets/cosco.svg";

import { Link } from "gatsby";
import UserInfo from "@/components/ui/userInfo";
import { useAuth } from "@/providers/auth";

const Header = () => {
  const { isLogged } = useAuth();

  const options = [
    { name: "Publicaciones", href: "/publications", enabled: true },
    { name: "Mis cosechas", href: "/my-crops", enabled: isLogged },
    { name: "Sobre nosotros", href: "/about-us", enabled: !isLogged },
    { name: "Contactanos", href: "/contact-us", enabled: !isLogged },
    { name: "Favoritos", href: "/favorites", enabled: isLogged },
  ];

>>>>>>> 70a3c062d397f783db5db3726ce46d2cc730193b
  return (
    <>
      <header
        className="sticky top-0 z-30 bg-white bg-opacity-15 backdrop-filter backdrop-blur-2xl transition-colors duration-300 ease-in-out"
      >
        <div className="mx-20 flex h-16  items-center justify-between px-5 sm:px-10 lg:px-5">
          <Link className="block text-teal-600" to="/">
            <img src={logo} alt="Logo" />
          </Link>

<<<<<<< HEAD
          <nav aria-label="Global" className="hidden xl:flex xl:flex-1 xl:justify-start pl-10">
=======
        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Pages */}
          <nav aria-label="Global" className="hidden md:block">
>>>>>>> 70a3c062d397f783db5db3726ce46d2cc730193b
            <ul className="flex items-center gap-8 text-sm">
              {options.map(
                ({ name, enabled, href }) =>
                  enabled && (
                    <li key={name}>
                      <Link
                        className="text-emerald-900 font-medium text-base leading-6 hover:font-bold px-2"
                        activeClassName="border-b-2 border-emerald-800"
                        to={href}
                      >
                        {name}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
<<<<<<< HEAD
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
=======
            {isLogged ? (
              <UserInfo />
            ) : (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-full bg-transparent text-emerald-900 border-2 font-semibold  border-emerald-900 px-5 py-2.5 text-sm transition hover:bg-emerald-100"
                  to="/auth/login"
                >
                  Iniciar sesión
                </Link>

                <Link
                  className="hidden rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
                  to="/auth/register"
                >
                  Registrarme
                </Link>
              </div>
            )}
>>>>>>> 70a3c062d397f783db5db3726ce46d2cc730193b
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
