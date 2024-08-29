import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "@/assets/cosco.svg";

const options = [
  { name: "Inicio", href: "/" },
  { name: "Publicaciones", href: "/publications" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Contactanos", href: "/contact-us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setHasScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white fixed inset-x-0 top-0 z-30 transition-shadow ${
          hasScrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-5 sm:px-10 lg:px-5">
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
              className="hidden xl:block rounded-full bg-transparent text-emerald-900 border-2 font-semibold border-emerald-900 px-5 py-2.5 text-sm transition hover:bg-emerald-100"
              to="/auth/login"
            >
              Iniciar sesión
            </Link>

            <div className="hidden xl:block">
              <Link
                className="hidden rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
                to="/"
              >
                Registrarme
              </Link>
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 xl:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-white z-20 transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } xl:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav aria-label="Global" className="flex flex-col items-center mt-16">
          <Link
            className="block rounded-full bg-transparent text-emerald-900 border-2 font-semibold border-emerald-900 px-4 py-2 text-sm transition hover:bg-emerald-100 mx-auto mt-4 w-40 text-center"
            to="/auth/login"
          >
            Iniciar sesión
          </Link>
          <Link
            className="block rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-200 hover:text-emerald-900 mx-auto mt-6 w-40 text-center"
            to="/"
          >
            Registrarme
          </Link>
            <ul className="flex flex-col items-center gap-8 text-sm mt-5">
              {options.map((option) => (
                <li key={option.name}>
                  <Link
                    className="text-emerald-900 font-roboto font-medium text-base leading-6 hover:font-bold px-2"
                    activeClassName="border-b-2 border-emerald-800"
                    to={option.href}
                    onClick={toggleMenu}
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-16">
      </main>
    </>
  );
};

export default Header;
