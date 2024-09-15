import React, { useState } from "react";

import {
  BookOpen,
  ChevronDown,
  FileText,
  Home,
  LogIn,
  LogOut,
  Mail,
  Menu,
  Star,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { useAuth } from "@/providers/auth";
import { Link, navigate } from "gatsby";
import { Toaster } from "@/components/shadcn/ui/toaster";

export const UserInfo = () => {
  const { user, closeSession, isLogged } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return user.firstName[0] + user.lastName[0]!.toUpperCase();
    }
    return "";
  };

  return (
    <>
      {isLogged ? (
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-1 h-auto">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.image} alt="CabanaJuan" />
                    <AvatarFallback>{getInitials()}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{`${user?.firstName} ${user?.lastName}`}</span>
                    <span className="text-xs text-muted-foreground">
                      {user?.email}
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="hover:bg-gray-100" onClick={() => navigate("/perfil")}>
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex md:hidden hover:bg-gray-100" onClick={() => navigate("/publications")}>
                <BookOpen className="mr-2 h-4 w-4" />
                <span>Publicaciones</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex md:hidden hover:bg-gray-100" onClick={() => navigate("/my-crops")}>
                <FileText className="mr-2 h-4 w-4" />
                <span>Mis cosechas</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex md:hidden hover:bg-gray-100" onClick={() => navigate("/favorites")}>
                <Star className="mr-2 h-4 w-4" />
                <span>Favoritos</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-gray-100" onClick={() => closeSession()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <nav
            className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200 ease-in-out z-10 ${
              isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
            } md:hidden`}
          >
            <ul className="py-2 md:flex md:space-x-4">
              <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Publicaciones
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  to="/auth/login"
                  className="flex bg-cosco-500 items-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 hover:bg-cosco-600"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Iniciar sesión
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  to="/auth/register"
                  className="flex items-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-cosco-700 hover:bg-gray-100"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Registrarse
                </Link>
              </li>
            </ul>
          </nav>

          <div className="relative  hidden md:flex gap-2">
            <Link
              className="block text-nowrap rounded-full bg-transparent text-emerald-900 border-2 font-semibold  border-emerald-900 px-5 py-2.5 text-sm transition hover:bg-emerald-100"
              to="/auth/login"
            >
              Iniciar sesión
            </Link>

            <Link
              className="hidden text-nowrap rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold  text-white transition hover:bg-emerald-200 hover:text-emerald-900 sm:block"
              to="/auth/register"
            >
              Registrarme
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
