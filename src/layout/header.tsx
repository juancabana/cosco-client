import React from "react";

import logo from "@/assets/cosco.svg";

import { Link } from "gatsby";
import UserInfo from "@/components/ui/userInfo";
import { useAuth } from "@/providers/auth/index";

const options = [
  { name: "Inicio", href: "/" },
  { name: "Publicaciones", href: "/publications" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Contactanos", href: "/contact-us" },
];

const Header = () => {
  const { isLogged } = useAuth();

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" to="/">
          <span className="sr-only">Home</span>
          <img src={logo} alt="" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Pages */}
          <nav aria-label="Global" className="hidden md:block">
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

            {/* <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
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
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
