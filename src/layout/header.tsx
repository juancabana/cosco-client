import React from "react";

import logo from "@/assets/cosco.svg";

import { Link } from "gatsby";
import UserInfo from "@/components/ui/userInfo";
import { useAuth } from "@/providers/auth";

const Header = () => {
  const { isLogged } = useAuth();

  const options = [
    { name: "Publicaciones", href: "/publications", enabled: true },
    { name: "Mis productos", href: "/my-crops", enabled: isLogged },
    { name: "Sobre nosotros", href: "/about-us", enabled: !isLogged },
    { name: "Contactanos", href: "/contact-us", enabled: !isLogged },
    { name: "Favoritos", href: "/favorites", enabled: isLogged },
  ];

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl justify-between items-center md:gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600 min-w-24" to="/">
          <span className="sr-only">Home</span>
          <img src={logo} alt="" />
        </Link>

        <div className="flex justify-between md:w-full">
          {/* Pages */}
          <nav aria-label="Global" className="hidden md:flex">
            <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 md:gap-2  text-sm">
              {options.map(
                ({ name, enabled, href }) =>
                  enabled && (
                    <li key={name}>
                      <Link
                        className="text-emerald-900 font-medium md:text-sm lg:text-base xl:text-base leading-6 hover:font-bold px-1 lg:px-2 text-nowrap"
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
              <UserInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
